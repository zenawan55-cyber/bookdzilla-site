// Bookdzilla site worker: serves the static site and one demo endpoint.
// POST /api/demo  {type, business, message}  ->  {reply, ms, source}
// Needs a Workers AI binding named AI (Pages > Settings > Bindings). Without it the demo
// still answers from a written fallback, so the page never breaks.

const PROFILES = {
  venue: {
    label: "wedding and event venue",
    sample: "Willow Creek Barn",
    facts: "Saturdays in 2027 start at $6,500 for up to 150 guests, Fridays and Sundays at $4,800. Price includes tables, chairs, the bridal suite and the garden ceremony site. Tours are available Thursday at 4pm or Saturday at 11am.",
    fallback: "Thanks for reaching out! Saturdays start at $6,500 for up to 150 guests, including tables, chairs and the bridal suite. The best way to see if it fits is a quick tour. I have Thursday at 4pm or Saturday at 11am. Which works for you?"
  },
  clinic: {
    label: "dental clinic",
    sample: "Bright Smile Dental",
    facts: "New patient exam with X-rays is $99. In-office whitening is $450 and takes about an hour. Most PPO insurance is accepted. Open appointments: Tuesday at 5pm or Wednesday at 6pm.",
    fallback: "Thanks for your message! A new patient exam with X-rays is $99, and we accept most PPO insurance. I have Tuesday at 5pm or Wednesday at 6pm open. Would either of those work?"
  },
  medspa: {
    label: "med spa",
    sample: "Glow Aesthetics",
    facts: "Botox is $12 a unit and most first visits use 20 to 40 units. Free 15-minute consultations. Open times: Tuesday at 5pm or Thursday at 12pm.",
    fallback: "Hi, thanks for reaching out! Botox is $12 a unit, and most first visits use 20 to 40 units. We start with a free 15-minute consult. I can do Tuesday at 5pm or Thursday at noon. Which is better?"
  },
  hvac: {
    label: "HVAC and home services company",
    sample: "Summit Air & Heat",
    facts: "Diagnostic visit is $89 and goes toward the repair. A technician can come today between 6 and 8pm or tomorrow at 8am. Serves the metro area and nearby suburbs.",
    fallback: "Sorry to hear that! We can get a technician to you today between 6 and 8pm, or tomorrow at 8am. The diagnostic visit is $89 and goes toward the repair. Which time works?"
  },
  pool: {
    label: "custom pool builder",
    sample: "Bluewater Custom Pools",
    facts: "Most custom pools land between $65,000 and $90,000 depending on size, decking and features. The exact price comes from a free 30-minute design visit at the home. Open times: Wednesday at 9am or Thursday at 3pm.",
    fallback: "Thanks for reaching out! Most of our custom pools land between $65k and $90k, depending on size, decking and features. The exact number comes from a free 30-minute design visit at your home. Wednesday at 9am or Thursday at 3pm?"
  },
  other: {
    label: "local service business",
    sample: "your business",
    facts: "Free consultations. Open times: Tuesday at 10am or Thursday at 2pm. Pricing depends on the job and is confirmed at the consultation.",
    fallback: "Thanks for getting in touch! The quickest way to get you an exact answer is a short free consultation. I have Tuesday at 10am or Thursday at 2pm. Which works better for you?"
  }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}

function tidy(text) {
  return String(text || "")
    .replace(/\s*—\s*/g, ", ")
    .replace(/^["'\s]+|["'\s]+$/g, "")
    .replace(/\n{2,}/g, "\n")
    .slice(0, 600);
}


// ---- Tracked video links ------------------------------------------------
// GET /v/<slug>        a small page that forwards to the video. The alert fires only
//                      when a real browser runs the page's script, so link previews,
//                      spam scanners and bots never trigger it.
// POST /v/<slug>/open  called by that script; emails bookdzilla@gmail.com.
// GET /v/me            marks this browser as ours, so our own clicks never alert.
// Add a prospect: one line in VIDEOS.
const VIDEOS = {
  cannabiz: { to: "https://www.loom.com/share/47a84837d9e042baa412817ee5e6beb7", who: "Austin Feely, CannaBiz Loans", title: "2-minute video for CannaBiz Loans" }
};
const ALERT_TO = "https://script.google.com/macros/s/AKfycbxgRU7A6FFlK5hpU8ZWPDFjpdBvRaGwFZEVVUK79ax2-U8PHLCDt2acywV8KnCJJk9Hww/exec";
const BOTS = /bot|crawl|spider|slurp|preview|facebookexternalhit|embedly|whatsapp|telegram|discord|skype|googleimageproxy|google-safety|feedfetcher|bingpreview|headless|python|curl|wget|java\/|go-http|okhttp|axios|node-fetch|proofpoint|mimecast|barracuda|scanner|monitor/i;
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function videoPage(slug, v, url) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(v.title)}</title><meta name="robots" content="noindex">
<meta property="og:title" content="${esc(v.title)}"><meta property="og:description" content="Where your ads and pages lose people, and what to fix first. From Bookdzilla.">
<meta property="og:image" content="${url.origin}/og.png"><meta property="og:type" content="video.other"><meta name="twitter:card" content="summary_large_image">
<noscript><meta http-equiv="refresh" content="0;url=${esc(v.to)}"></noscript>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0B1530;color:#fff;font:500 17px/1.4 "Helvetica Neue",Arial,sans-serif}a{color:#FFC400}</style>
</head><body><p>Opening your video&hellip; <a href="${esc(v.to)}">Tap here</a> if it doesn't open.</p>
<script>
(function(){var go=function(){location.replace(${JSON.stringify(v.to)})};
var me=/(^|; )bdz_me=1/.test(document.cookie);
if(me){go();return}
try{fetch(${JSON.stringify("/v/" + slug + "/open")},{method:"POST",keepalive:true,headers:{"content-type":"application/json"},body:JSON.stringify({tz:Intl.DateTimeFormat().resolvedOptions().timeZone,w:screen.width})}).catch(function(){}).finally(function(){setTimeout(go,150)})}catch(e){go()}
setTimeout(go,3000)})();
</script></body></html>`;
}

async function handleVideo(request, url, ctx) {
  const parts = url.pathname.split("/").filter(Boolean); // ["v", slug, "open"?]
  if (parts[1] === "me") {
    return new Response("<!doctype html><meta name=viewport content='width=device-width'><p style='font:17px Arial;padding:24px'>This browser is marked as Bookdzilla. Your own clicks on video links won't send alerts.</p>", {
      headers: { "content-type": "text/html; charset=utf-8", "set-cookie": "bdz_me=1; Path=/; Max-Age=31536000; Secure; SameSite=Lax" }
    });
  }
  const slug = (parts[1] || "").toLowerCase();
  const v = VIDEOS[slug];
  if (!v) return Response.redirect(url.origin + "/", 302);
  const ua = request.headers.get("user-agent") || "";

  if (parts[2] === "open" && request.method === "POST") {
    const me = /(^|;\s*)bdz_me=1/.test(request.headers.get("cookie") || "");
    if (!me && !BOTS.test(ua)) {
      let extra = {};
      try { extra = await request.json(); } catch {}
      const cf = request.cf || {};
      const now = new Date();
      const fmt = (tz) => now.toLocaleString("en-US", { timeZone: tz, weekday: "short", hour: "numeric", minute: "2-digit", month: "short", day: "numeric" });
      const device = /iphone|ipad|android|mobile/i.test(ua) ? "Phone" : "Computer";
      const place = [cf.city, cf.region, cf.country].filter(Boolean).join(", ") || "unknown";
      const payload = {
        type: "video",
        slug: slug,
        who: v.who,
        link: `${url.origin}/v/${slug}`,
        theirTime: extra.tz ? fmt(extra.tz) + " (" + extra.tz + ")" : "unknown",
        where: place,
        device: device,
        browser: ua.slice(0, 160)
      };
      ctx.waitUntil(fetch(ALERT_TO, { method: "POST", headers: { "content-type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) }).catch(() => {}));
    }
    return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
  }

  if (request.method !== "GET" && request.method !== "HEAD") return new Response(null, { status: 405 });
  return new Response(videoPage(slug, v, url), { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" } });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // Retired page (Oct 2026): the site now covers pool builders and wedding venues only.
    if (url.pathname.startsWith("/dental-clinics")) return Response.redirect(url.origin + "/", 301);
    if (url.pathname.startsWith("/v/")) return handleVideo(request, url, ctx);
    if (url.pathname !== "/api/demo") return env.ASSETS.fetch(request);
    if (request.method === "GET" && url.searchParams.get("check") === "1") {
      if (!env.AI) return json({ ai: false, detail: "no AI binding" });
      try {
        const out = await env.AI.run("@cf/meta/llama-3.1-8b-instruct-fast", { messages: [{ role: "user", content: "Say ok" }], max_tokens: 5 });
        return json({ ai: true, sample: out && out.response });
      } catch (e) { return json({ ai: true, error: String(e && e.message || e).slice(0, 200) }); }
    }
    if (request.method !== "POST") return json({ error: "Use POST" }, 405);

    let body;
    try { body = await request.json(); } catch { return json({ error: "Send JSON" }, 400); }
    const type = PROFILES[body.type] ? body.type : "other";
    const p = PROFILES[type];
    const business = String(body.business || "").trim().slice(0, 80) || p.sample;
    const message = String(body.message || "").trim().slice(0, 600);
    if (!message) return json({ error: "Type a message first" }, 400);

    const started = Date.now();
    const system =
      `You are the front desk for ${business}, a ${p.label} in the United States. ` +
      `A potential customer just sent a message. Reply the way a warm, quick, professional front desk person would by text. ` +
      `Use only these example details when they are relevant: ${p.facts} ` +
      `Rules: 2 to 4 short sentences, under 70 words. Answer their actual question first. ` +
      `Then move them to a booking by offering the two times above and asking which works. ` +
      `No emojis, no em dashes, no markdown, no sign-off. Never say you are an AI unless they ask directly. ` +
      `If the message is not something a customer of this business would send, politely steer back to booking.`;

    if (!env.AI) return json({ reply: p.fallback, ms: Date.now() - started, source: "fallback", detail: "no AI binding" });
    try {
      const out = await env.AI.run("@cf/meta/llama-3.1-8b-instruct-fast", {
        messages: [{ role: "system", content: system }, { role: "user", content: message }],
        max_tokens: 160,
        temperature: 0.6
      });
      const reply = tidy(out && out.response);
      if (!reply) throw new Error("empty");
      return json({ reply, ms: Date.now() - started, source: "ai" });
    } catch (e) {
      return json({ reply: p.fallback, ms: Date.now() - started, source: "fallback", detail: String(e && e.message || e).slice(0, 160) });
    }
  }
};
