"""Builds the niche guide pages (pool-builders/, wedding-venues/) from one template.
Run: python3 tools/build_niches.py   (from the repo root)"""
import json, html, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://bookdzilla.pages.dev"
CAL = "https://calendly.com/bookdzilla/30min"
UPDATED = "2026-10-28"
UPDATED_TXT = "28 October 2026"

CSS = """
:root{
  --ground:#FFFFFF; --ink:#0B1530; --ink-2:#47506A; --field:#EAF1FF; --field-2:#F5F8FF;
  --yellow:#FFC400; --leak:#C62D1F; --leak-soft:#FDECEA; --line:#D5DEEE; --green:#12A150; --green-soft:#E3F5EA; --bubble:#EEF1F6; --on-dark:#FFFFFF; --on-dark-2:#B9C3DC;
  --display:"Funnel Display", "Helvetica Neue", Arial, sans-serif;
  --text:"Funnel Sans", "Helvetica Neue", Arial, sans-serif;
  --gutter:clamp(20px, 4vw, 48px);
}
*{box-sizing:border-box}
html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;scroll-padding-top:88px}
body{margin:0;background:var(--ground);color:var(--ink);font-family:var(--text);font-size:1.0625rem;line-height:1.6}
a{color:inherit}
h1,h2,h3{font-family:var(--display);margin:0;line-height:1.05;letter-spacing:-0.02em;text-wrap:balance}
p{margin:0}
.wrap{max-width:1180px;margin:0 auto;padding-left:max(var(--gutter), env(safe-area-inset-left, 0px));padding-right:max(var(--gutter), env(safe-area-inset-right, 0px))}
:focus-visible{outline:3px solid var(--yellow);outline-offset:3px}

.nav{position:sticky;top:0;z-index:20;background:var(--ground);border-bottom:1px solid var(--field)}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;gap:20px;height:72px}
.word{font-family:var(--display);font-weight:800;font-size:1.5rem;letter-spacing:-0.04em;text-decoration:none}
.nav nav{display:flex;align-items:center;gap:26px}
.nav nav a{text-decoration:none;font-weight:500;font-size:0.98rem}
.nav nav a[aria-current]{text-decoration:underline;text-decoration-thickness:3px;text-decoration-color:var(--yellow);text-underline-offset:6px}
@media (max-width:760px){ .nav nav a:not(.btn){display:none} }

.btn{display:inline-flex;align-items:center;gap:10px;background:var(--yellow);color:var(--ink);font-weight:600;text-decoration:none;border:0;border-radius:999px;padding:14px 24px;font-size:1rem;cursor:pointer;transition:transform 160ms cubic-bezier(0.23,1,0.32,1), background-color 160ms ease}
.btn:active{transform:scale(0.97)}
@media (hover:hover){ .btn:hover{background:#FFD23A} }
.btn.line{background:transparent;box-shadow:inset 0 0 0 2px var(--ink)}
.btn.dark{background:var(--ink);color:var(--ground)}

.crumbs{padding-top:28px;font-size:0.9rem;color:var(--ink-2)}
.crumbs a{text-decoration:none}.crumbs a:hover{text-decoration:underline}

.hero{padding-block:clamp(20px, 4vw, 48px) clamp(56px, 8vw, 100px)}
.hero .wrap{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,0.85fr);gap:clamp(32px, 5vw, 72px);align-items:end}
.hero h1{font-size:clamp(2.4rem, 6.2vw, 5.4rem);font-weight:800;max-width:14ch}
.hero .lead{margin-top:24px;font-size:clamp(1.15rem, 1.6vw, 1.32rem);max-width:36rem}
.hero .acts{margin-top:32px;display:flex;gap:12px;flex-wrap:wrap}
.byline{margin-top:28px;font-size:0.92rem;color:var(--ink-2)}
.byline b{color:var(--ink);font-weight:600}
@media (max-width:900px){ .hero .wrap{grid-template-columns:minmax(0,1fr)} }

/* one sample thread: the page's single visual */
.thread{background:var(--field);padding:20px;display:flex;flex-direction:column;gap:10px;min-width:0}
.thread .top{display:flex;justify-content:space-between;gap:10px;font-size:0.88rem;color:var(--ink-2);padding-bottom:4px;flex-wrap:wrap}
.thread .top b{color:var(--green);font-family:var(--display);font-size:1rem}
.msg{max-width:88%;padding:11px 14px;border-radius:18px;font-size:0.95rem;line-height:1.45}
.msg.in{background:var(--ground);align-self:flex-start;border-bottom-left-radius:6px}
.msg.out{background:var(--ink);color:var(--ground);align-self:flex-end;border-bottom-right-radius:6px}
.msg small{display:block;margin-top:4px;font-size:0.76rem;opacity:0.7}
.booked{align-self:center;margin-top:4px;background:var(--green-soft);color:#0B6B37;font-weight:600;font-size:0.9rem;border-radius:999px;padding:8px 16px}
.thread .cap{font-size:0.84rem;color:var(--ink-2)}

/* numbers band */
.facts{background:var(--field);padding-block:clamp(48px, 6vw, 80px)}
.facts .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(20px, 3vw, 40px)}
.facts b{display:block;font-family:var(--display);font-weight:800;font-size:clamp(2.4rem, 4.4vw, 3.8rem);letter-spacing:-0.04em;line-height:1}
.facts p{margin-top:10px;color:var(--ink-2);max-width:26rem}
.facts p a{color:var(--ink-2)}
@media (max-width:760px){ .facts .grid{grid-template-columns:minmax(0,1fr)} }

/* guide: sticky contents + long-form prose */
.guide{padding-block:clamp(72px, 9vw, 130px) 0}
.guide .wrap{display:grid;grid-template-columns:minmax(0,15rem) minmax(0,1fr);gap:clamp(32px, 6vw, 96px);align-items:start}
.toc{position:sticky;top:104px;font-size:0.95rem}
.toc p{font-weight:600;margin-bottom:12px}
.toc ol{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px;border-left:2px solid var(--field)}
.toc a{display:block;padding-left:14px;margin-left:-2px;border-left:2px solid transparent;text-decoration:none;color:var(--ink-2)}
.toc a:hover{color:var(--ink);border-left-color:var(--ink)}
.prose{max-width:44rem;min-width:0}
.prose > section + section{margin-top:clamp(64px, 7vw, 96px)}
.prose h2{font-size:clamp(1.9rem, 3.6vw, 2.9rem);font-weight:800;max-width:20ch}
.prose h3{font-size:1.3rem;letter-spacing:-0.01em;line-height:1.25;margin-top:36px}
.prose p,.prose ul,.prose ol{margin-top:16px}
.prose p + p{margin-top:14px}
.prose ul,.prose ol{padding-left:1.2em}
.prose li + li{margin-top:8px}
.prose .muted{color:var(--ink-2)}
.prose blockquote{margin:20px 0 0;padding:16px 18px;background:var(--field-2);border-left:4px solid var(--ink);font-size:0.98rem}
.prose blockquote p{margin:0}
.prose blockquote p + p{margin-top:10px}
.steps{list-style:none;padding:0;counter-reset:s}
.steps > li{counter-increment:s;position:relative;padding-left:3.2rem;margin-top:28px}
.steps > li::before{content:counter(s);position:absolute;left:0;top:0;width:2.2rem;height:2.2rem;border-radius:999px;background:var(--ink);color:var(--ground);display:grid;place-items:center;font-family:var(--display);font-weight:700;font-size:1rem}
.steps > li h3{margin-top:0;padding-top:4px}
.tbl{margin-top:20px;width:100%;border-collapse:collapse;font-size:0.97rem}
.tbl th,.tbl td{text-align:left;padding:12px 10px;border-bottom:1px solid var(--field);vertical-align:top}
.tbl th{font-weight:600;color:var(--ink-2);font-size:0.88rem}
.tbl td:first-child{font-weight:600;white-space:nowrap}
@media (max-width:900px){ .guide .wrap{grid-template-columns:minmax(0,1fr)} .toc{position:static} }

/* offer */
.offer{margin-top:clamp(80px, 10vw, 150px);background:var(--ink);color:var(--on-dark);padding-block:clamp(64px, 8vw, 110px)}
.offer .wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(32px, 5vw, 72px);align-items:start}
.offer h2{font-size:clamp(2.2rem, 4.6vw, 3.8rem);font-weight:800;max-width:13ch}
.offer .amt{font-family:var(--display);font-weight:800;font-size:clamp(2.6rem, 4.6vw, 3.8rem);letter-spacing:-0.04em;line-height:1}
.offer .amt small{font-family:var(--text);font-weight:500;font-size:1rem;letter-spacing:0;margin-left:6px;color:var(--on-dark-2)}
.offer ul{margin:22px 0 0;padding-left:1.1em;color:var(--on-dark-2);display:flex;flex-direction:column;gap:8px}
.offer .g{margin-top:22px;background:#163A2A;color:#9FE3BD;font-weight:600;padding:12px 14px}
.offer .acts{margin-top:28px;display:flex;gap:12px;flex-wrap:wrap}
.offer .btn.line{color:var(--on-dark);box-shadow:inset 0 0 0 2px var(--on-dark)}
.offer p.sub{margin-top:20px;color:var(--on-dark-2);max-width:30rem}
@media (max-width:860px){ .offer .wrap{grid-template-columns:minmax(0,1fr)} }

/* faq + author + sources */
.end{padding-block:clamp(72px, 9vw, 120px)}
.end .wrap{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:clamp(40px, 6vw, 96px);align-items:start}
.end h2{font-size:clamp(1.9rem, 3.6vw, 2.9rem);font-weight:800}
.faq h3{font-size:1.18rem;letter-spacing:-0.01em;line-height:1.3;margin-top:30px}
.faq p{margin-top:8px;color:var(--ink-2)}
.author{background:var(--field-2);padding:clamp(22px, 3vw, 32px)}
.author .av{width:52px;height:52px;border-radius:999px;background:var(--ink);color:var(--ground);display:grid;place-items:center;font-family:var(--display);font-weight:800;font-size:1.2rem}
.author h3{font-size:1.2rem;margin-top:16px;letter-spacing:-0.01em}
.author p{margin-top:10px;color:var(--ink-2);font-size:0.97rem}
.sources{margin-top:28px}
.sources h3{font-size:1rem;letter-spacing:0}
.sources ol{margin:10px 0 0;padding-left:1.2em;font-size:0.9rem;color:var(--ink-2);display:flex;flex-direction:column;gap:6px}
.also{margin-top:28px;font-size:0.95rem}
@media (max-width:900px){ .end .wrap{grid-template-columns:minmax(0,1fr)} }

footer{background:var(--ink);color:var(--on-dark);padding-block:48px 36px}
footer .row{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;color:var(--on-dark-2);font-size:0.92rem}
footer a{color:var(--on-dark)}
footer .word{color:var(--on-dark);font-size:2.2rem}
@media (prefers-reduced-motion: reduce){ .btn{transition:none} }

/* leak check form in the offer band */
.lc{margin-top:28px;display:flex;flex-direction:column;gap:10px;max-width:34rem}
.lc label{font-weight:600}
.lc .row{display:flex;gap:10px;flex-wrap:wrap}
.lc input{width:100%;min-width:0;font:inherit;font-size:1rem;color:var(--ink);background:var(--ground);border:2px solid var(--ground);border-radius:999px;padding:13px 20px}
.lc input:focus{outline:3px solid var(--yellow);outline-offset:2px}
.lc .note{font-size:0.92rem;color:var(--on-dark-2);min-height:1.5em}
.lc .note.err{color:#FFB4A8;font-weight:600}
.lc .note.ok{color:var(--on-dark);font-weight:600}
.lc .fld{flex:1 1 210px;display:flex;flex-direction:column;gap:6px;min-width:0}
.lc .hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}
.lc button{align-self:flex-start}
.lc button:disabled{opacity:.7;cursor:default}
.offer .other{margin-top:18px;font-size:0.95rem;color:var(--on-dark-2)}
.offer .other a{color:var(--on-dark)}
.prose ul.leaks{list-style:none;padding-left:0}
.prose .leaks li{position:relative;padding-left:2.2rem}
.prose .leaks li::before{content:"";position:absolute;left:0.35rem;top:0.55em;width:0.7rem;height:0.7rem;border-radius:999px;background:var(--leak)}
.prose .lk{color:var(--leak);font-weight:600}
"""

OFFER_LIST = ("<li>Ads with one clear promise: Meta ads we write and run, Google ads tidied</li>"
              "<li>A free offer for people not ready to buy today</li>"
              "<li>One page per ad, with your rating on the first screen</li>"
              "<li>An answer within a minute, then follow-up until they book</li>"
              "<li>Five numbers every Monday</li>")

def page(p):
    url = f"{BASE}/{p['slug']}/"
    faq_ld = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": html.unescape(a)}} for q, a in p["faq"]]
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Article", "headline": p["h1_plain"], "description": p["desc"], "url": url,
         "datePublished": p["published"], "dateModified": UPDATED,
         "author": {"@type": "Person", "name": "Hamza", "jobTitle": "Founder", "worksFor": {"@type": "Organization", "name": "Bookdzilla"},
                    "url": "https://www.linkedin.com/in/hamza-bookdzilla/"},
         "publisher": {"@type": "Organization", "name": "Bookdzilla", "url": BASE + "/"}},
        {"@type": "Service", "name": p["service"], "serviceType": p["service_types"], "areaServed": ["Texas", "United States"],
         "provider": {"@type": "ProfessionalService", "name": "Bookdzilla", "url": BASE + "/"},
         "offers": {"@type": "Offer", "description": "Fixed monthly price set after a free leak check, month to month"}},
        {"@type": "FAQPage", "mainEntity": faq_ld},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Bookdzilla", "item": BASE + "/"},
            {"@type": "ListItem", "position": 2, "name": p["crumb"], "item": url}]}]}
    toc = "".join(f'<li><a href="#{i}">{t}</a></li>' for i, t in p["toc"])
    faq = "".join(f"<h3>{q}</h3><p>{a}</p>" for q, a in p["faq"])
    srcs = "".join(f'<li><a href="{u}" rel="noopener" target="_blank">{t}</a></li>' for t, u in p["sources"])
    facts = "".join(f"<div><b>{b}</b><p>{t}</p></div>" for b, t in p["facts"])
    cur = ' aria-current="page"'
    nav_links = "".join(
        f'<a href="/{sl}/"{cur if sl == p["slug"] else ""}>{n}</a>'
        for sl, n in [("pool-builders", "Pool builders"), ("wedding-venues", "Wedding venues")])
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{p['title']}</title>
<meta name="description" content="{p['desc']}">
<link rel="canonical" href="{url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="article">
<meta property="og:title" content="{p['title']}">
<meta property="og:description" content="{p['desc']}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="https://bookdzilla.pages.dev/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@500;700;800&family=Funnel+Sans:wght@400;500;600&display=swap">
<style>{CSS}</style>
</head>
<body>
<header class="nav">
  <div class="wrap">
    <a class="word" href="/">Bookdzilla</a>
    <nav aria-label="Main">
      {nav_links}
      <a class="btn" href="#check">Free leak check</a>
    </nav>
  </div>
</header>

<main>
  <div class="wrap crumbs"><a href="/">Bookdzilla</a> / {p['crumb']}</div>
  <div class="hero">
    <div class="wrap">
      <div>
        <h1>{p['h1']}</h1>
        <p class="lead">{p['lead']}</p>
        <div class="acts">
          <a class="btn" href="#check">Get my free leak check</a>
          <a class="btn line" href="#{p['toc'][0][0]}">Read the guide</a>
        </div>
        <p class="byline">By <b>Hamza</b>, founder of Bookdzilla. Updated <time datetime="{UPDATED}">{UPDATED_TXT}</time>, {p['read']} min read.</p>
      </div>
      <figure class="thread" style="margin:0" aria-label="Example conversation">
        {p['thread']}
      </figure>
    </div>
  </div>

  <section class="facts" aria-label="Key numbers">
    <div class="wrap grid">{facts}</div>
  </section>

  <div class="guide">
    <div class="wrap">
      <nav class="toc" aria-label="On this page"><p>On this page</p><ol>{toc}</ol></nav>
      <article class="prose">
        {p['body']}
      </article>
    </div>
  </div>

  <section class="offer" id="check">
    <div class="wrap">
      <div>
        <h2>{p['offer_h']}</h2>
        <p class="sub">{p['offer_sub']}</p>
        <form class="lc" id="lc" novalidate>
          <div class="row">
            <span class="fld"><label for="site">Your website</label><input id="site" name="website" type="text" inputmode="url" autocomplete="url" placeholder="yourbusiness.com" required></span>
            <span class="fld"><label for="em">Your email</label><input id="em" name="email" type="email" autocomplete="email" placeholder="you@yourbusiness.com" required></span>
          </div>
          <input class="hp" type="text" name="_honey" id="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
          <button class="btn" type="submit">Get my free leak check</button>
          <p class="note" id="lc-msg" aria-live="polite">Your 2-minute video arrives by email within a day.</p>
        </form>
        <p class="other">Or email <a href="mailto:bookdzilla@gmail.com?subject={p['mail_subject']}">bookdzilla@gmail.com</a>, or <a href="{CAL}" target="_blank" rel="noopener">book a 30-minute call</a>.</p>
      </div>
      <div>
        <p class="sub">One fixed monthly price, set after the free leak check and based on what we fix. Month to month. Your ad budget stays yours and goes straight to Meta or Google.</p>
        <ul>{OFFER_LIST}</ul>
        <p class="g">Before we change anything, we write down your last 30 days of leads, {p['unit']} and response time, so we both see what changes.</p>
      </div>
    </div>
  </section>

  <section class="end">
    <div class="wrap">
      <div class="faq">
        <h2>Questions owners ask.</h2>
        {faq}
      </div>
      <aside>
        <div class="author">
          <div class="av" aria-hidden="true">H</div>
          <h3>About the author</h3>
          <p>Hamza runs Bookdzilla from Bahawalpur, Pakistan, on US business hours. Before that he spent over two years as a product manager and ran Meta ads for his own food brand. Our first test, for a car repair shop, turned $25 of Facebook ads and fast replies into about 50 enquiries and 4 to 5 new customers in two weeks.</p>
          <p>{p['author_extra']}</p>
          <p><a href="https://www.linkedin.com/in/hamza-bookdzilla/" target="_blank" rel="noopener">LinkedIn</a>, <a href="mailto:bookdzilla@gmail.com">bookdzilla@gmail.com</a></p>
        </div>
        <div class="sources" id="sources"><h3>Sources</h3><ol>{srcs}</ol></div>
        <p class="also">Also read: {p['also']}</p>
      </aside>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <a class="word" href="/">Bookdzilla</a>
    <div class="row" style="margin-top:24px">
      <span>More booked jobs from the ads you already pay for.</span>
      <span><a href="/pool-builders/">Pool builders</a>&emsp;<a href="/wedding-venues/">Wedding venues</a>&emsp;<a href="/#start">How it starts</a>&emsp;<a href="mailto:bookdzilla@gmail.com">bookdzilla@gmail.com</a></span>
    </div>
  </div>
</footer>
<script>
(function(){{
  var form = document.getElementById("lc"), site = document.getElementById("site"), em = document.getElementById("em"), hp = document.getElementById("hp"), msg = document.getElementById("lc-msg");
  if (form) form.addEventListener("submit", function(e){{
    e.preventDefault();
    var v = site.value.trim(), m = em.value.trim(), btn = form.querySelector("button");
    if (!v || v.indexOf(".") < 0){{ msg.textContent = "Add your website, like yourbusiness.com, so we know where to look."; msg.className = "note err"; site.focus(); return; }}
    if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(m)){{ msg.textContent = "Add your email so we know where to send the video."; msg.className = "note err"; em.focus(); return; }}
    btn.disabled = true; btn.textContent = "Sending...";
    fetch("https://formsubmit.co/ajax/bookdzilla@gmail.com", {{
      method: "POST", headers: {{"Content-Type": "application/json", "Accept": "application/json"}},
      body: JSON.stringify({{website: v, email: m, page: location.pathname, _replyto: m, _subject: "Free leak check: " + v, _template: "table", _honey: hp.value}})
    }}).then(function(r){{ return r.json(); }}).then(function(d){{
      if (String(d.success) !== "true") throw new Error(d.message || "failed");
      form.reset(); btn.textContent = "Sent";
      msg.className = "note ok"; msg.textContent = "Got it. Your 2-minute video arrives at " + m + " within a day.";
    }}).catch(function(){{
      btn.disabled = false; btn.textContent = "Get my free leak check";
      msg.className = "note err"; msg.textContent = "That didn't go through. Email bookdzilla@gmail.com with your website and we'll send the video.";
    }});
  }});
}})();
</script>
</body>
</html>
"""

KNOT_VENUE = ("The Knot, average cost of a wedding venue (2026 Real Weddings Study, 2025 weddings)", "https://www.theknot.com/content/average-cost-reception-venue")
KNOT_ENG = ("The Knot, the most popular time to get engaged", "https://www.theknot.com/content/popular-day-to-get-engaged")
HBR = ("Oldroyd, McElheran and Elkington, The Short Life of Online Sales Leads, Harvard Business Review, March 2011", "https://hbr.org/2011/03/the-short-life-of-online-sales-leads")
POOLCORP = ("POOLCORP fourth-quarter 2025 earnings call, 19 February 2026 (transcript, The Motley Fool)", "https://www.fool.com/earnings/call-transcripts/2026/02/19/pool-corp-pool-q4-2025-earnings-call-transcript")
POOLMAG = ("Pool Magazine, Texas pool permits down for the third straight year, 2 April 2026", "https://www.poolmagazine.com/pool-news/texas-pool-permits-down-third-straight-year-in-a-row/")
HOMEGUIDE = ("HomeGuide, how much does an inground pool cost", "https://homeguide.com/costs/inground-pool-cost")
AD_LIBRARY = ("Meta Ad Library", "https://www.facebook.com/ads/library/")
GOOGLE_ADS_TC = ("Google Ads Transparency Center", "https://adstransparency.google.com/")

MONDAY_TABLE = """<table class="tbl">
    <thead><tr><th>Number</th><th>What it tells you</th></tr></thead>
    <tbody>
      <tr><td>Leads</td><td>How many people raised a hand: forms, calls, messages and ad leads.</td></tr>
      <tr><td>{unit_cap}</td><td>How many of them ended up on your calendar.</td></tr>
      <tr><td>Cost per {unit_one}</td><td>Ad spend divided by {unit}. The number to judge every ad by.</td></tr>
      <tr><td>Response time</td><td>How fast the first real reply went out. Aim for under a minute.</td></tr>
      <tr><td>Revenue from booked jobs</td><td>What the {jobs} that came from those {unit} are worth.</td></tr>
    </tbody>
  </table>
  <p>If leads go up and {unit} stay flat, the problem is the reply and the follow-up, not the ads. Fix that before spending more.</p>"""

POOL = dict(
    slug="pool-builders", crumb="Pool builders", published="2026-10-28",
    title="More booked design visits for pool builders | Bookdzilla",
    desc="Where pool builders lose homeowners between the ad and the design visit, and how to fix each leak: ads with one promise, a page that keeps it, a free offer, a reply within a minute and follow-up. A practical guide, plus a free leak check of your own ads and pages.",
    h1="More booked design visits for your pool company.", h1_plain="More booked design visits for your pool company",
    service="Ads, landing pages and lead follow-up for pool builders",
    service_types=["Meta ads", "Google ads landing pages", "Lead follow-up", "Design visit booking"],
    lead="Homeowners ask two or three builders for a quote and lean toward whoever makes it easiest to book. This guide shows where pool builders lose them between the ad and the design visit, how to fix each leak, and what we set up if you'd rather not do it yourself.",
    read=8, unit="booked design visits", unit_one="booked design visit",
    thread="""<div class="top"><span>Facebook ad lead, Tue 8:47pm</span><span>Replied in <b>41 sec</b></span></div>
        <p class="msg in">Hi, how much for a pool with a small spa? Backyard is about 40 by 60. We're in Frisco.<small>Dana</small></p>
        <p class="msg out">Hi Dana, thanks for reaching out. Most of our pools with a spa land between $75,000 and $95,000, depending on size, decking and features. The exact number comes from a free design visit at your home. I have Thursday at 5pm or Saturday at 10am. Which works?<small>Willow Creek Pools</small></p>
        <p class="msg in">Saturday at 10 is good<small>Dana</small></p>
        <p class="booked">Design visit booked, Sat 10:00am</p>
        <figcaption class="cap">An example with a made-up builder and made-up prices. Yours answers with your own ranges, times and tone.</figcaption>""",
    facts=[("~60,000", 'New pools built in the US in 2025, about 40% fewer than in 2022, and about the same expected for 2026. <a href="#sources">POOLCORP</a>'),
           ("&minus;9%", 'Texas new pool permits in 2025, the third yearly drop in a row. Fewer buyers means each click you pay for matters more. <a href="#sources">Pool Magazine</a>'),
           ("$62,500", 'National average for a new inground pool. One extra signed pool is worth more than a year of what we charge. <a href="#sources">HomeGuide</a>')],
    toc=[("market", "Fewer pools, same ad bill"), ("leaks", "Where design visits leak"), ("page", "A page that keeps the promise"), ("offer", "A free offer"), ("reply", "The first reply"), ("follow", "Follow-up"), ("test", "Test your own path"), ("measure", "What to measure")],
    body="""
<section id="market">
  <h2>Fewer pools, same ad bill.</h2>
  <p>New pool construction has shrunk. POOLCORP, the biggest pool supply distributor in the US, estimates that just under 60,000 new pools were built in 2025, about half the pandemic peak and 40% below 2022, and expects about the same in 2026. In Texas, new pool permits fell about 9% in 2025, the third yearly drop in a row, with Dallas and Houston holding up better than the rest.</p>
  <p>With fewer buyers, the builders who have a good year are rarely the ones who spend the most on ads. They're the ones who turn more of the clicks they already pay for into design visits, and more design visits into signed pools.</p>
</section>

<section id="leaks">
  <h2>Where design visits leak.</h2>
  <p>Between the ad and the design visit there are five places to lose a homeowner. Most builders have the ad and a page. Very few have the other three.</p>
  <ul class="leaks">
    <li><b>The ad makes no single promise.</b> "Custom pools, financing, 20 years of experience, call today" gives nobody a reason to click now.</li>
    <li><b>The page forgets the ad.</b> The ad offers a free design visit and the page opens on "Custom pools built to last", with no mention of it.</li>
    <li><b>The proof is hidden.</b> A 4.9 rating from 200 reviews sits on Google while the page the ad opens shows none of it.</li>
    <li><b>Nothing for people who aren't ready.</b> Most homeowners clicking in October are planning for next summer. With nothing to take today, they leave.</li>
    <li><b>The reply is slow, then stops.</b> A form sent Tuesday evening gets a call back Thursday. One voicemail, then nothing.</li>
  </ul>
</section>

<section id="page">
  <h2>A page that keeps the ad's promise.</h2>
  <p class="muted">Every ad should open a page built for it, not your homepage.</p>
  <ol class="steps">
    <li><h3>Repeat the promise in the headline</h3><p>If the ad says "Free backyard design visit", the page's first line says the same. People who clicked for that promise need to see it in the first second, or they assume they're in the wrong place.</p></li>
    <li><h3>Put your rating on the first screen</h3><p>Your Google rating and review count next to the button, plus one short review that mentions the build going smoothly. Homeowners are about to let a crew dig up their backyard; trust comes before the form.</p></li>
    <li><h3>Give a realistic price range</h3><p>"Most of our pools land between $70,000 and $95,000" filters out people who can't afford one and reassures those who can. You don't lose anyone worth keeping by saying it.</p></li>
    <li><h3>Make booking one tap away</h3><p>A short form (name, phone, zip code) or two design visit times, visible without scrolling on a phone. Every extra field and every scroll loses people.</p></li>
    <li><h3>Show your pools, not stock photos</h3><p>Three or four of your own builds in the same area, with the city named. Homeowners want to see pools that could be in their neighborhood.</p></li>
  </ol>
</section>

<section id="offer">
  <h2>A free offer for homeowners not ready yet.</h2>
  <p>A homeowner who saw your ad in the fall may not sign until spring. If the only option is "request a quote", most of them leave. Give them something worth asking for now:</p>
  <ul>
    <li>A free backyard design visit, with a 3D drawing of their pool.</li>
    <li>A price guide for their area: what a pool, a spa and decking typically cost, and what changes the number.</li>
    <li>A spring build slot list: "Get on the list for an April or May build."</li>
  </ul>
  <p>Each of these gets you a name and number months before they choose a builder, and the follow-up does the rest.</p>
</section>

<section id="reply">
  <h2>What a good first reply looks like.</h2>
  <p>Speed matters more than it feels like it should. In a study of 1.25 million online leads at 42 US companies, firms that responded within an hour were about seven times as likely to qualify the lead as firms that responded even one hour later. Here is a reply that answers the question and moves straight to a design visit:</p>
  <blockquote><p>Hi Dana, thanks for reaching out. Most of our pools with a spa land between $75,000 and $95,000, depending on size, decking and features. The exact number comes from a free design visit at your home.</p><p>I have Thursday at 5pm or Saturday at 10am. Which works?</p></blockquote>
  <p>And here is the reply many builders send the next day:</p>
  <blockquote><p>Thanks for your interest! Please give us a call to discuss your project.</p></blockquote>
  <p>The second one answers nothing and asks a busy homeowner to make a phone call during the same hours they couldn't call the first time.</p>
</section>

<section id="follow">
  <h2>Follow-up until they decide.</h2>
  <p>Homeowners go quiet because they're busy, not because they said no. Short, personal follow-ups by text and email keep you in the running: day 1 (photos of a pool you built nearby), day 3 (answers to the question most homeowners ask next, usually financing or timeline), day 7 (open design visit times this week) and day 14 (a friendly last check-in). Stop the moment they reply.</p>
  <p>After the design visit, send the proposal the same day and check in two days later. Many builders lose signed pools here, not at the first reply.</p>
</section>

<section id="test">
  <h2>Test your own path in five minutes.</h2>
  <ol>
    <li>Find your live ads in the Meta Ad Library and the Google Ads Transparency Center, and write down what each one promises.</li>
    <li>Tap through each ad on your phone. Does the page repeat the promise? Is your rating on the first screen? How many scrolls to the form?</li>
    <li>On a Tuesday evening, send a quote request through your own form from a personal email.</li>
    <li>Write down when the first real reply arrives, and whether it gave a price range and two times.</li>
  </ol>
  <p>Any "no", or a reply that took more than an hour, is where design visits are going. That's exactly what our free leak check covers, on video.</p>
</section>

<section id="measure">
  <h2>What to measure every Monday.</h2>
  """ + MONDAY_TABLE.format(unit="booked design visits", unit_one="booked design visit", unit_cap="Booked design visits", jobs="pools") + """
</section>
""",
    offer_h="Get a free leak check for your pool company.",
    offer_sub="Send your website. Within a day you get a 2-minute video of where your ads and pages lose homeowners, plus one page rebuilt in your brand. No call needed.",
    mail_subject="Free%20leak%20check%20(pool%20builder)",
    faq=[("We get most of our jobs from referrals.", "Most good builders do. Referrals don't need fixing; paid clicks do. If you spend on ads, we make sure those clicks turn into design visits at the same rate your referrals do."),
         ("Do you run the ads?", "We write, design and run Meta ads with one clear promise each. If someone already runs your Google ads well, we keep them and fix what happens after the click."),
         ("We don't like publishing prices.", "You don't have to publish your price sheet. A range like \"most of our pools land between $70,000 and $95,000\" is enough to filter and reassure. You choose the range."),
         ("Do you use AI to reply to leads?", "Yes, for the first reply, written from your real price ranges, service area and calendar, in your tone, and approved by you before anything goes live. Anyone who asks for a person gets you or your team."),
         ("Who owns the pages and contacts?", "You do. Your ad accounts, the pages and every contact stay yours if you stop."),
         ("How long does setup take?", "About 14 days from your yes to live, including your sign-off on the pages and the replies.")],
    author_extra="Before every first email we look at the builder's live ads and tap through the pages they open, so the conversation starts from what we saw, not a guess.",
    sources=[POOLCORP, POOLMAG, HOMEGUIDE, HBR, AD_LIBRARY, GOOGLE_ADS_TC],
    also='<a href="/wedding-venues/">More booked tours for wedding venues</a>',
)

VENUE = dict(
    slug="wedding-venues", crumb="Wedding venues", published="2026-10-24",
    title="More booked tours for wedding venues | Bookdzilla",
    desc="Where wedding venues lose couples between the ad or listing and the tour, and how to fix each leak: a page that keeps the ad's promise, an open-dates and pricing check, a reply within a minute with a date and a price, and follow-up. A practical guide, plus a free leak check.",
    h1="More booked tours for your wedding venue.", h1_plain="More booked tours for your wedding venue",
    service="Ads, landing pages and enquiry follow-up for wedding venues",
    service_types=["Meta ads", "Landing pages", "Enquiry follow-up", "Tour booking"],
    lead="Couples message several venues in one night and tour the ones that answer first with a date and a price. This guide shows where venues lose those couples between the click and the tour, how to fix each leak, and what we set up if you'd rather not do it yourself.",
    read=9, unit="booked tours", unit_one="booked tour",
    thread="""<div class="top"><span>Website enquiry, Thu 9:14pm</span><span>Replied in <b>38 sec</b></span></div>
        <p class="msg in">Hi! Do you have Saturday June 12 open next year? About 120 guests. What's pricing like?<small>Maya</small></p>
        <p class="msg out">Hi Maya, congrats! June 12 is open right now. Saturdays for up to 150 guests start at $6,500 and include tables, chairs and the bridal suite. Want to see it in person? I have Thursday at 4pm or Saturday at 11am.<small>Willow Creek Barn</small></p>
        <p class="msg in">Saturday at 11 works!<small>Maya</small></p>
        <p class="booked">Tour booked, Sat 11:00am</p>
        <figcaption class="cap">An example with made-up venue details. Yours answers with your own dates, prices and tone.</figcaption>""",
    facts=[("$12,900", 'Average spent on a wedding venue by couples married in 2025, and $16,000 for weddings over 100 guests. <a href="#sources">The Knot</a>'),
           ("76%", 'Of couples say price is the most important factor when choosing a venue, so the first reply needs a number. <a href="#sources">The Knot</a>'),
           ("~40%", 'Of engagements happen between November and February. December alone is about 19%. Enquiries follow. <a href="#sources">The Knot</a>')],
    toc=[("lost", "Where tours leak"), ("season", "Engagement season"), ("page", "A page that keeps the promise"), ("offer", "A free offer"), ("reply", "The first reply"), ("follow", "Follow-up"), ("test", "Test your venue"), ("measure", "What to measure")],
    body="""
<section id="lost">
  <h2>Where venue tours leak.</h2>
  <p>Most venues don't have a lead problem. They pay for ads and listings, the enquiries come in, and then couples drift away before the tour. Couples plan in the evenings and on weekends, send the same enquiry to several venues at once, and tour the ones that answer with a date and a price.</p>
  <p>Speed matters more than it feels like it should. In a study of 1.25 million online leads at 42 US companies, firms that responded within an hour were about seven times as likely to qualify the lead as firms that responded even one hour later, and more than 60 times as likely as firms that waited a day or longer.</p>
  <p>The losses happen in five places:</p>
  <ul class="leaks">
    <li><b>The ad and the page say different things.</b> The ad shows the ceremony lawn at sunset; the page opens on a generic "Welcome to our venue".</li>
    <li><b>Price and dates are nowhere.</b> Couples rank price first. A page with no starting price makes them ask, and many won't.</li>
    <li><b>Nothing for couples not ready to tour.</b> Many are just engaged and still comparing. With nothing to take, they leave.</li>
    <li><b>The first reply comes too late.</b> A Thursday-night enquiry answered on Monday is usually already touring somewhere else.</li>
    <li><b>Nobody follows up.</b> Couples go quiet because they're busy, not because they said no.</li>
  </ul>
</section>

<section id="season">
  <h2>Engagement season is when this costs the most.</h2>
  <p>About 40% of engagements happen between November and February, and December is the single biggest month. Newly engaged couples start shopping for venues within weeks, so January and February are often the busiest enquiry months of the year.</p>
  <p>That is also when a slow reply costs the most. With an average venue spend of $12,900, losing even two tours a month to a faster venue adds up quickly. The best time to fix the path is before the rush.</p>
</section>

<section id="page">
  <h2>A page that keeps the ad's promise.</h2>
  <ol class="steps">
    <li><h3>Repeat the promise</h3><p>If the ad sells "Fall Saturdays from $6,500", the page leads with exactly that. Couples who clicked for it should see it in the first second.</p></li>
    <li><h3>Show the starting price and open dates</h3><p>"Saturdays for up to 150 guests from $6,500" and a short list of open dates this season. You don't have to publish your full price sheet.</p></li>
    <li><h3>Put your rating on the first screen</h3><p>Your Google or The Knot rating with the review count, plus one review that mentions the day going smoothly.</p></li>
    <li><h3>Make the tour one tap away</h3><p>Two tour times or a short form visible without scrolling on a phone, and a video tour option for out-of-town couples.</p></li>
  </ol>
</section>

<section id="offer">
  <h2>A free offer for couples not ready to tour.</h2>
  <p>Many couples who click aren't ready to book a tour yet. Offer an open-dates and pricing check: they enter a month and a guest count, and get back the open Saturdays and the starting price for each. It's useful to them, and it gives you a name and an email weeks before they decide.</p>
</section>

<section id="reply">
  <h2>What a good first reply looks like.</h2>
  <p>Here is a reply that answers the question, gives a reason to keep talking and moves straight to a tour. Copy the shape, not the words.</p>
  <blockquote><p>Hi Maya, congratulations! June 12 is open right now. Saturdays for up to 150 guests start at $6,500 and include tables, chairs, the bridal suite and the garden ceremony site.</p><p>The easiest way to see if it feels right is a tour. I have Thursday at 4pm or Saturday at 11am. Which works better?</p></blockquote>
  <p>And here is the reply most venues send:</p>
  <blockquote><p>Thank you for your interest! Please find our brochure attached. Let us know a good time for a call.</p></blockquote>
  <p>The second one isn't rude. It just answers nothing and asks the couple to do the next step, at 9pm, while three other venues are also in their inbox.</p>
</section>

<section id="follow">
  <h2>Follow-up until they decide.</h2>
  <p>Couples who go quiet get short, personal follow-ups: day 1 (a photo of the space set for a wedding their size), day 3 (answers to the question most couples ask next), day 7 (whether their date is still open) and day 14 (a friendly last check-in). Stop the moment they reply.</p>
  <p>The tour isn't the booking. Send the proposal the same day, check in two days later and remind them before any hold on their date expires. Missed calls get a text back within seconds, and a missed tour gets a rebooking message the same day.</p>
</section>

<section id="test">
  <h2>Test your own venue in five minutes.</h2>
  <ol>
    <li>Find your live ads in the Meta Ad Library and the Google Ads Transparency Center, and tap through each one on your phone. Does the page repeat the promise, show a starting price and your rating?</li>
    <li>On a Thursday or Friday evening, send an enquiry through your own website form from a personal email. Ask about a Saturday next year, 120 guests and pricing.</li>
    <li>Write down when the first reply arrives, and whether it answers the date and the price.</li>
    <li>Repeat it with a call at lunchtime and a DM on Instagram.</li>
  </ol>
  <p>If the reply took more than an hour, or didn't answer the question, you have found where tours are going. We run this same test before every first email.</p>
</section>

<section id="measure">
  <h2>What to measure every Monday.</h2>
  """ + MONDAY_TABLE.format(unit="booked tours", unit_one="booked tour", unit_cap="Booked tours", jobs="weddings") + """
</section>
""",
    offer_h="Get a free leak check for your venue.",
    offer_sub="Send your website. Within a day you get a 2-minute video of where your ads, pages and replies lose couples, and what to fix first. No call needed.",
    mail_subject="Free%20leak%20check%20(wedding%20venue)",
    faq=[("Do you use AI to reply to couples?", "Yes, for the first reply, written in your tone from your own dates, prices and policies, and approved by you before anything goes live. If a couple asks whether they're talking to a person, it says so honestly and hands the conversation to you."),
         ("Does it work with The Knot and WeddingWire enquiries?", "Yes. Those enquiries arrive by email, and we answer them from the same place as your website form and DMs, so every couple gets the same fast reply."),
         ("We don't publish our prices. Is that a problem?", "No. We agree a starting price or a range you're comfortable sharing, such as the starting Saturday rate. Full pricing can still wait for the tour."),
         ("We already use HoneyBook, Tripleseat or a spreadsheet.", "Keep it. If enquiries come in by email or the tool can pass them on, we connect to it instead of replacing it."),
         ("Who owns the pages and contacts?", "You do. Your ad accounts, the pages and every contact stay yours if you stop."),
         ("How long does setup take?", "About 14 days from your yes to live, including your sign-off on the pages and the replies.")],
    author_extra="Before every first email we send a real enquiry through the venue's own website and time the reply, so the conversation starts from your numbers, not ours.",
    sources=[KNOT_VENUE, KNOT_ENG, HBR, AD_LIBRARY, GOOGLE_ADS_TC],
    also='<a href="/pool-builders/">More booked design visits for pool builders</a>',
)

for p in (POOL, VENUE):
    d = ROOT / p["slug"]
    d.mkdir(exist_ok=True)
    (d / "index.html").write_text(page(p))
    print("wrote", d / "index.html")

(ROOT / "sitemap.xml").write_text(f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>{BASE}/</loc><lastmod>{UPDATED}</lastmod></url>
  <url><loc>{BASE}/pool-builders/</loc><lastmod>{UPDATED}</lastmod></url>
  <url><loc>{BASE}/wedding-venues/</loc><lastmod>{UPDATED}</lastmod></url>
</urlset>
""")
(ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {BASE}/sitemap.xml\n")
print("wrote sitemap.xml, robots.txt")
