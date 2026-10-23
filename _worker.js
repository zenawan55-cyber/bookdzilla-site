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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/demo") return env.ASSETS.fetch(request);
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
