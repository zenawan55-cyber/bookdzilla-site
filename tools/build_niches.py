"""Builds the niche guide pages (wedding-venues/, dental-clinics/) from one template.
Run: python3 tools/build_niches.py   (from the repo root)"""
import json, html, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://bookdzilla.pages.dev"
CAL = "https://calendly.com/bookdzilla/30min"
UPDATED = "2026-10-24"
UPDATED_TXT = "24 October 2026"

CSS = """
:root{
  --ground:#FFFFFF; --ink:#0B1530; --ink-2:#47506A; --field:#EAF1FF; --field-2:#F5F8FF;
  --yellow:#FFC400; --green:#12A150; --green-soft:#E3F5EA; --bubble:#EEF1F6; --on-dark:#FFFFFF; --on-dark-2:#B9C3DC;
  --display:"Funnel Display", "Helvetica Neue", Arial, sans-serif;
  --text:"Funnel Sans", "Helvetica Neue", Arial, sans-serif;
  --gutter:clamp(20px, 4vw, 48px);
}
*{box-sizing:border-box}
html{-webkit-font-smoothing:antialiased;scroll-padding-top:88px}
body{margin:0;background:var(--ground);color:var(--ink);font-family:var(--text);font-size:1.0625rem;line-height:1.6}
a{color:inherit}
h1,h2,h3{font-family:var(--display);margin:0;line-height:1.05;letter-spacing:-0.03em;text-wrap:balance}
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
"""

def page(p):
    url = f"{BASE}/{p['slug']}/"
    faq_ld = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": html.unescape(a)}} for q, a in p["faq"]]
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Article", "headline": p["h1_plain"], "description": p["desc"], "url": url,
         "datePublished": UPDATED, "dateModified": UPDATED,
         "author": {"@type": "Person", "name": "Hamza", "jobTitle": "Founder", "worksFor": {"@type": "Organization", "name": "Bookdzilla"},
                    "url": "https://www.linkedin.com/in/hamza-bookdzilla/"},
         "publisher": {"@type": "Organization", "name": "Bookdzilla", "url": BASE + "/"}},
        {"@type": "Service", "name": p["service"], "serviceType": p["service_types"], "areaServed": "United States",
         "provider": {"@type": "ProfessionalService", "name": "Bookdzilla", "url": BASE + "/"},
         "offers": {"@type": "Offer", "price": "497", "priceCurrency": "USD", "description": "$497 setup plus $497 per month, month to month"}},
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
        for sl, n in [("wedding-venues", "Wedding venues"), ("dental-clinics", "Dental clinics")])
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
<link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css">
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
<style>{CSS}</style>
</head>
<body>
<header class="nav">
  <div class="wrap">
    <a class="word" href="/">Bookdzilla</a>
    <nav aria-label="Main">
      {nav_links}
      <a class="btn" href="{CAL}" data-cal target="_blank" rel="noopener">I need this</a>
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
          <a class="btn" href="{CAL}" data-cal target="_blank" rel="noopener">I need this</a>
          <a class="btn line" href="/#try">Try the live demo</a>
        </div>
        <p class="byline">By <b>Hamza</b>, founder of Bookdzilla · Updated <time datetime="{UPDATED}">{UPDATED_TXT}</time> · {p['read']} min read</p>
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

  <section class="offer" id="offer">
    <div class="wrap">
      <div>
        <h2>{p['offer_h']}</h2>
        <p class="sub">{p['offer_sub']}</p>
        <div class="acts">
          <a class="btn" href="{CAL}" data-cal target="_blank" rel="noopener">I need this</a>
          <a class="btn line" href="mailto:bookdzilla@gmail.com?subject={p['mail_subject']}">Email Hamza</a>
        </div>
      </div>
      <div>
        <p class="amt">$497<small>a month</small></p>
        <p class="sub" style="margin-top:10px">Plus $497 one-time setup. Month to month, cancel with 7 days notice.</p>
        <ul>{p['offer_list']}</ul>
        <p class="g">We agree a booking target before launch. Miss it in the first 30 days and month two is free.</p>
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
          <p>Hamza runs Bookdzilla. Before that he spent over two years as a product manager and ran Meta ads for his own food brand. Our first test, for a car repair shop, turned $25 of Facebook ads and fast replies into about 50 enquiries and 4 to 5 new customers in two weeks.</p>
          <p>{p['author_extra']}</p>
          <p><a href="https://www.linkedin.com/in/hamza-bookdzilla/" target="_blank" rel="noopener">LinkedIn</a> · <a href="mailto:bookdzilla@gmail.com">bookdzilla@gmail.com</a></p>
        </div>
        <div class="sources"><h3>Sources</h3><ol>{srcs}</ol></div>
        <p class="also">Also read: {p['also']}</p>
      </aside>
    </div>
  </section>
</main>

<footer>
  <div class="wrap">
    <a class="word" href="/">Bookdzilla</a>
    <div class="row" style="margin-top:24px">
      <span>More customers for local businesses.</span>
      <span><a href="/wedding-venues/">Wedding venues</a> · <a href="/dental-clinics/">Dental clinics</a> · <a href="/#price">Price</a> · <a href="mailto:bookdzilla@gmail.com">bookdzilla@gmail.com</a></span>
    </div>
  </div>
</footer>
<script>
document.querySelectorAll('[data-cal]').forEach(function(a){{
  a.addEventListener('click', function(e){{
    if (window.Calendly && Calendly.initPopupWidget){{ e.preventDefault(); Calendly.initPopupWidget({{url: '{CAL}?hide_gdpr_banner=1'}}); }}
  }});
}});
</script>
</body>
</html>
"""

KNOT_VENUE = ("The Knot, average cost of a wedding venue (2026 Real Weddings Study, 2025 weddings)", "https://www.theknot.com/content/average-cost-reception-venue")
KNOT_ENG = ("The Knot, the most popular time to get engaged", "https://www.theknot.com/content/popular-day-to-get-engaged")
HBR = ("Oldroyd, McElheran and Elkington, The Short Life of Online Sales Leads, Harvard Business Review, March 2011", "https://hbr.org/2011/03/the-short-life-of-online-sales-leads")

VENUE = dict(
    slug="wedding-venues", crumb="Wedding venues",
    title="More booked tours for wedding venues | Bookdzilla",
    desc="How wedding venues book more tours from the enquiries they already get: reply in under a minute, answer price and date first, book the tour on your calendar and follow up until couples decide. A practical guide, plus a done-for-you setup with a booking guarantee.",
    h1="More booked tours for your wedding venue.", h1_plain="More booked tours for your wedding venue",
    service="Enquiry response and tour booking for wedding venues",
    service_types=["Speed to lead", "Tour booking", "Enquiry follow-up", "Missed-call text back", "Review requests"],
    lead="Couples email five venues on a Thursday night and tour the ones that answer first. This guide shows how to be that venue with tools that exist today, and what we set up for you if you'd rather not build it yourself.",
    read=9,
    thread="""<div class="top"><span>Website enquiry · Thu 9:14pm</span><span>Replied in <b>38 sec</b></span></div>
        <p class="msg in">Hi! Do you have Saturday June 13 open next year? About 120 guests. What's pricing like?<small>Maya</small></p>
        <p class="msg out">Hi Maya, congrats! June 13 is open right now. Saturdays for up to 150 guests start at $6,500 and include tables, chairs and the bridal suite. Want to see it in person? I have Thursday at 4pm or Saturday at 11am.<small>Willow Creek Barn</small></p>
        <p class="msg in">Saturday at 11 works!<small>Maya</small></p>
        <p class="booked">Tour booked · Sat 11:00am</p>
        <figcaption class="cap">An example with made-up venue details. Yours answers with your own dates, prices and tone.</figcaption>""",
    facts=[("$12,900", 'Average spent on a wedding venue by couples married in 2025, and $16,000 for weddings over 100 guests. <a href="#sources">The Knot</a>'),
           ("76%", 'Of couples say price is the most important factor when choosing a venue, so the first reply needs a number. <a href="#sources">The Knot</a>'),
           ("~40%", 'Of engagements happen between November and February. December alone is about 19%. Enquiries follow. <a href="#sources">The Knot</a>')],
    toc=[("lost", "Where bookings get lost"), ("season", "Engagement season"), ("setup", "What to set up"), ("reply", "The first reply"), ("test", "Test your venue"), ("measure", "What to measure")],
    body="""
<section id="lost">
  <h2>Where venue bookings get lost.</h2>
  <p>Most venues don't have a lead problem. They have a reply problem. Couples plan in the evenings and on weekends, the same hours your team is running events or off the clock. They send the same enquiry to several venues at once, then tour the ones that answer with a date and a price.</p>
  <p>Speed matters more than it feels like it should. In a study of 1.25 million online leads at 42 US companies, firms that responded within an hour were about seven times as likely to qualify the lead as firms that responded even one hour later, and more than 60 times as likely as firms that waited a day or longer. That research wasn't about weddings, but anyone who has watched a couple book the venue that called back first knows it applies.</p>
  <p>The losses happen in four places:</p>
  <ul>
    <li><b>The first reply comes too late.</b> A Thursday-night enquiry answered on Monday morning is usually already touring somewhere else.</li>
    <li><b>The reply has no answer in it.</b> "Thanks for reaching out, when can you hop on a call?" makes the couple do more work. They want to know if the date is open and roughly what it costs.</li>
    <li><b>Nobody follows up.</b> Couples go quiet because they are busy, not because they said no. One reply and silence loses people who were still deciding.</li>
    <li><b>Phone calls go to voicemail.</b> Most callers don't leave a message. They call the next venue on the list.</li>
  </ul>
</section>

<section id="season">
  <h2>Engagement season is when this costs the most.</h2>
  <p>About 40% of engagements happen between November and February, and December is the single biggest month. Newly engaged couples start shopping for venues within weeks, so January and February are often the busiest enquiry months of the year for venues.</p>
  <p>That is also when a slow reply costs the most. With an average venue spend of $12,900, losing even two tours a month to a faster competitor adds up quickly. The best time to fix your reply process is before the rush, not in the middle of it.</p>
</section>

<section id="setup">
  <h2>What you can set up with today's tools.</h2>
  <p class="muted">None of this needs a new website or a new booking platform. It connects to the inbox, phone number and calendar you already use.</p>
  <ol class="steps">
    <li><h3>Answer every enquiry in under a minute</h3><p>Route every source into one place: your website form, The Knot and WeddingWire messages, Instagram and Facebook DMs, Google Business messages and email. Each new enquiry gets a written reply within a minute, any time of day. Assistants built on models like Claude or ChatGPT can write that reply from your real prices, packages and policies, in your tone, and hand the conversation to you the moment someone asks for a person.</p></li>
    <li><h3>Lead with the date and a price range</h3><p>Check the requested date against your calendar and say whether it's open. Then give the starting price for that day of the week and guest count. You don't have to publish your full price sheet. "Saturdays for up to 150 start at $6,500" is enough to keep the conversation going.</p></li>
    <li><h3>Offer two tour times, not a link to figure out</h3><p>Ask "Thursday at 4pm or Saturday at 11am?" instead of "let us know when works." Two concrete options get a yes far more often than an open question. When they pick one, it goes straight onto your calendar through Calendly, Cal.com, GoHighLevel or the system you use now. Offer a video tour for out-of-town couples.</p></li>
    <li><h3>Remind them so they actually show up</h3><p>Send a confirmation right away, a reminder the day before and a short text two hours before with parking and who to ask for. If someone misses a tour, send a rebooking message the same day.</p></li>
    <li><h3>Follow up until they decide</h3><p>Couples who go quiet get short, personal follow-ups: day 1 (a photo of the space set for a wedding their size), day 3 (answers to the question most couples ask next), day 7 (whether their date is still open) and day 14 (a friendly last check-in). Stop the moment they reply.</p></li>
    <li><h3>Text back every missed call</h3><p>When a call goes unanswered, the caller gets a text within seconds: sorry we missed you, is this about a date, here are two times to talk. Most people who would have dialed the next venue reply to the text instead.</p></li>
    <li><h3>Follow up after the tour</h3><p>The tour isn't the booking. Send the proposal the same day, a check-in two days later and a reminder before any hold on their date expires. This is where most venues leave money on the table.</p></li>
    <li><h3>Bring back old enquiries</h3><p>Your inbox is full of couples who asked about a date last year and never booked. A short message to the ones whose dates are still open, or who never chose a venue, turns some of them into tours without any ad spend.</p></li>
    <li><h3>Ask for reviews at the right moment</h3><p>Send a review request for Google and The Knot a few days after the wedding, while the couple is still happy and sharing photos. More recent reviews means more couples contacting you in the first place.</p></li>
  </ol>
</section>

<section id="reply">
  <h2>What a good first reply looks like.</h2>
  <p>Here is a reply that answers the question, gives a reason to keep talking and moves straight to a tour. Copy the shape, not the words.</p>
  <blockquote><p>Hi Maya, congratulations! June 13 is open right now. Saturdays for up to 150 guests start at $6,500 and include tables, chairs, the bridal suite and the garden ceremony site.</p><p>The easiest way to see if it feels right is a tour. I have Thursday at 4pm or Saturday at 11am. Which works better?</p></blockquote>
  <p>And here is the reply most venues send:</p>
  <blockquote><p>Thank you for your interest! Please find our brochure attached. Let us know a good time for a call.</p></blockquote>
  <p>The second one isn't rude. It just answers nothing and asks the couple to do the next step, at 9pm, while three other venues are also in their inbox.</p>
</section>

<section id="test">
  <h2>Test your own venue in five minutes.</h2>
  <p>Before you change anything, measure where you are. We run this same test before every call.</p>
  <ol>
    <li>On a Thursday or Friday evening, send an enquiry through your own website form from a personal email. Ask about a Saturday next year, 120 guests and pricing.</li>
    <li>Write down the exact time you sent it.</li>
    <li>Note when the first reply arrives, and whether it answers the date and the price.</li>
    <li>Repeat it with a call at lunchtime and a DM on Instagram.</li>
  </ol>
  <p>If the reply took more than an hour, or didn't answer the question, you have found where tours are going.</p>
</section>

<section id="measure">
  <h2>What to measure every week.</h2>
  <table class="tbl">
    <thead><tr><th>Number</th><th>What it tells you</th></tr></thead>
    <tbody>
      <tr><td>Reply time</td><td>Minutes from enquiry to first real answer. Aim for under one.</td></tr>
      <tr><td>Enquiry to tour</td><td>Share of enquiries that book a tour. This is where speed shows up first.</td></tr>
      <tr><td>Tour show rate</td><td>Share of booked tours that actually happen. Reminders move this.</td></tr>
      <tr><td>Tour to booking</td><td>Share of tours that sign. Proposal follow-up moves this.</td></tr>
      <tr><td>Cost per booking</td><td>What you spend on listings and ads, divided by weddings booked.</td></tr>
    </tbody>
  </table>
</section>
""",
    offer_h="Want it done for your venue?",
    offer_sub="We set up everything above for you in about a week, on your inbox, phone number and calendar, and you approve every reply before it goes live.",
    mail_subject="Wedding%20venue%20setup",
    offer_list="<li>Replies to every enquiry in under a minute, day and night</li><li>Tours booked on your calendar, with reminders</li><li>Follow-up for 14 days, and after every tour</li><li>Missed-call text back</li><li>A weekly report: enquiries, tours, bookings</li>",
    faq=[("Will couples know it isn't a person?", "Replies are written in your tone from your own prices and policies, and you approve how it talks before anything goes live. If a couple asks whether they are talking to a person, it says so honestly and hands the conversation to you."),
         ("Does it work with The Knot and WeddingWire enquiries?", "Yes. Those enquiries arrive by email, and we answer them from the same place as your website form and DMs, so every couple gets the same fast reply."),
         ("We don't publish our prices. Is that a problem?", "No. We agree a starting price or a range you're comfortable sharing, such as the starting Saturday rate. Full pricing can still wait for the tour."),
         ("We already use HoneyBook, Tripleseat or a spreadsheet.", "Keep it. If enquiries come in by email or the tool can send them through Zapier, we connect to it instead of replacing it."),
         ("What happens when someone wants to talk to a person?", "You get a text or email with the couple's name, date and question, and the assistant tells them you'll be in touch. You can step in on any conversation at any time."),
         ("How long does setup take?", "About a week from our kickoff call to live, including your sign-off on the replies.")],
    author_extra="Before every call we send a real enquiry through the venue's own website and time the reply, so the conversation starts from your numbers, not ours.",
    sources=[KNOT_VENUE, KNOT_ENG, HBR],
    also='<a href="/dental-clinics/">More new patients for dental clinics</a>',
)

DENTAL = dict(
    slug="dental-clinics", crumb="Dental clinics",
    title="More new patients for dental clinics | Bookdzilla",
    desc="How dental clinics book more new patients from the calls, forms and messages they already get: missed-call text back, replies in under a minute, booking into the schedule, reminders and recall. A practical guide, plus a done-for-you setup with a booking guarantee.",
    h1="More new patients for your dental clinic.", h1_plain="More new patients for your dental clinic",
    service="New patient enquiry response and booking for dental clinics",
    service_types=["Speed to lead", "Missed-call text back", "Appointment booking", "Recall and reactivation", "Review requests"],
    lead="New patients call during lunch, fill in your form at 10pm and message two practices at once. They book whoever answers first. This guide shows how to be that practice, and what we set up for you if you'd rather not build it yourself.",
    read=9,
    thread="""<div class="top"><span>Missed call · Tue 12:41pm</span><span>Texted back in <b>9 sec</b></span></div>
        <p class="msg out">Hi, this is Bright Smile Dental. Sorry we missed your call! Are you looking to book a visit? Reply here and we'll help right away.<small>Bright Smile Dental</small></p>
        <p class="msg in">Yes, I'm new to the area. Do you take Delta Dental? Need a cleaning.<small>Jordan</small></p>
        <p class="msg out">Welcome! We're in network with Delta Dental PPO. A new patient exam, X-rays and cleaning is usually covered. I have Thursday at 8am or Friday at 3:30pm. Which works?<small>Bright Smile Dental</small></p>
        <p class="booked">Request sent to front desk · Fri 3:30pm</p>
        <figcaption class="cap">An example with made-up practice details. Yours answers with your own insurance list, times and tone.</figcaption>""",
    facts=[("7x", 'More likely to qualify a lead when you reply within an hour than an hour later, in a study of 1.25 million leads. <a href="#sources">HBR</a>'),
           ("60x", 'More likely within an hour than after waiting 24 hours or more. A form answered the next morning is often already booked elsewhere. <a href="#sources">HBR</a>'),
           ("2", 'Times to offer in the first reply. "Thursday at 8 or Friday at 3:30?" gets a yes more often than "when works for you?"')],
    toc=[("lost", "Where new patients get lost"), ("setup", "What to set up"), ("privacy", "Patient privacy"), ("reply", "The first reply"), ("test", "Test your practice"), ("measure", "What to measure")],
    body="""
<section id="lost">
  <h2>Where new patients get lost.</h2>
  <p>Most practices spend money to make the phone ring, then lose a share of those patients in the gap between the enquiry and the first real answer. It's rarely the front desk's fault. They are checking patients in, verifying insurance and answering the phone at the same time.</p>
  <p>Speed matters more than it feels like it should. In a study of 1.25 million online leads at 42 US companies, firms that responded within an hour were about seven times as likely to qualify the lead as firms that responded even one hour later. A new patient who filled in your form at night and hears back mid-morning has often booked with the practice that answered first.</p>
  <p>The losses happen in four places:</p>
  <ul>
    <li><b>Calls during the busy hours.</b> Lunch, the first hour of the day and after 5pm are when patients call and when the desk is busiest. Most callers who reach voicemail don't leave a message.</li>
    <li><b>Forms and messages answered the next day.</b> Website forms, Google Business messages and Facebook or Instagram DMs often wait until someone has time.</li>
    <li><b>The insurance question.</b> "Do you take my insurance?" is the most common first question, and a slow or vague answer sends people back to their insurer's directory.</li>
    <li><b>Patients who drift away.</b> Overdue recalls and unscheduled treatment plans quietly become someone else's patients.</li>
  </ul>
</section>

<section id="setup">
  <h2>What you can set up with today's tools.</h2>
  <p class="muted">None of this replaces your practice management software. It sits in front of it, on your existing phone number, forms and inbox.</p>
  <ol class="steps">
    <li><h3>Text back every missed call</h3><p>When a call goes unanswered, the caller gets a text within seconds from your practice number asking how you can help. Most people who would have called the next practice reply to the text, and the conversation continues there.</p></li>
    <li><h3>Answer every form and message in under a minute</h3><p>Route your website form, Google Business messages and social DMs into one inbox. Each new patient gets a reply within a minute, written from your real services, insurance list, new patient offer and hours. Assistants built on models like Claude or ChatGPT can write these in your tone and hand off to your team the moment a question needs a person.</p></li>
    <li><h3>Answer insurance and price first</h3><p>Say whether you're in network with their plan, or what the new patient exam costs without insurance. Then offer two appointment times. Clinical questions always go to your team, never to the assistant.</p></li>
    <li><h3>Book into your schedule</h3><p>Depending on your setup, the patient picks a time that goes straight onto the calendar, or the request goes to the front desk to confirm in Dentrix, Eaglesoft, Open Dental or whatever you use. Either way the patient gets an answer now and a confirmation later.</p></li>
    <li><h3>Confirm and remind to cut no-shows</h3><p>Send a confirmation when they book, a reminder two days before with new patient forms and what to bring, and a text the morning of. Anyone who misses a visit gets a rebooking message the same day.</p></li>
    <li><h3>Run recall and reactivation</h3><p>Patients overdue for a cleaning, and patients with treatment plans they never scheduled, get a short, personal message with two times. These are the cheapest appointments you will ever fill, because those patients already know you.</p></li>
    <li><h3>Ask for reviews after good visits</h3><p>A review request a few hours after the appointment, while the visit is fresh, keeps your Google Business Profile growing. More recent reviews means more calls from people searching "dentist near me".</p></li>
  </ol>
</section>

<section id="privacy">
  <h2>A note on patient privacy.</h2>
  <p>Messages from patients can include health information, so the tools matter. We build on platforms that offer HIPAA options and sign a Business Associate Agreement where the platform provides one, keep messages to booking and logistics, and route anything clinical to your team. Your patient records stay in your practice management software.</p>
</section>

<section id="reply">
  <h2>What a good first reply looks like.</h2>
  <p>Here is a reply to a new patient form that answers the question and moves straight to a booking. Copy the shape, not the words.</p>
  <blockquote><p>Hi Jordan, thanks for reaching out to Bright Smile Dental. Yes, we're in network with Delta Dental PPO, and a new patient exam, X-rays and cleaning is usually covered.</p><p>I have Thursday at 8am or Friday at 3:30pm. Which works better for you?</p></blockquote>
  <p>And here is the reply many practices send the next morning:</p>
  <blockquote><p>Thank you for contacting our office. Please call us during business hours to schedule.</p></blockquote>
  <p>The second one asks the patient to do the work again, during the same hours they couldn't call the first time.</p>
</section>

<section id="test">
  <h2>Test your own practice in five minutes.</h2>
  <p>Before you change anything, measure where you are.</p>
  <ol>
    <li>Call your own practice from a personal phone at 12:30pm and again at 5:45pm. Note whether a person answers.</li>
    <li>On a Sunday evening, fill in your website form as a new patient asking whether you take a common insurance plan.</li>
    <li>Send a message through your Google Business Profile.</li>
    <li>Write down when each one gets a real answer, and whether it offered a time.</li>
  </ol>
  <p>If any of them took more than an hour, that is where new patients are going.</p>
</section>

<section id="measure">
  <h2>What to measure every week.</h2>
  <table class="tbl">
    <thead><tr><th>Number</th><th>What it tells you</th></tr></thead>
    <tbody>
      <tr><td>Missed calls</td><td>Calls not answered by a person, and how many got a text back.</td></tr>
      <tr><td>Reply time</td><td>Minutes from form or message to first real answer. Aim for under one.</td></tr>
      <tr><td>New patients booked</td><td>From calls, forms and messages, counted separately so you see what works.</td></tr>
      <tr><td>Show rate</td><td>Share of booked new patients who come in. Reminders move this.</td></tr>
      <tr><td>Recall booked</td><td>Overdue patients brought back each week.</td></tr>
    </tbody>
  </table>
</section>
""",
    offer_h="Want it done for your practice?",
    offer_sub="We set up everything above for you in about a week, on your phone number, forms and calendar, and you approve every reply before it goes live.",
    mail_subject="Dental%20clinic%20setup",
    offer_list="<li>Missed-call text back from your number</li><li>Replies to every form and message in under a minute</li><li>Booking requests sent to your schedule or front desk</li><li>Reminders, recall and review requests</li><li>A weekly report: enquiries, bookings, show rate</li>",
    faq=[("Will patients know it isn't a person?", "Replies are written in your practice's tone and approved by you before anything goes live. If a patient asks whether they are talking to a person, it says so honestly and passes them to your team."),
         ("Does it give medical advice?", "No. It answers booking questions: hours, insurance, prices and appointment times. Anything clinical, including pain or emergencies, goes straight to your team with the patient's details."),
         ("Does it work with Dentrix, Eaglesoft or Open Dental?", "It works alongside them. Booking requests either land on a connected calendar or go to your front desk to confirm in your software. Your patient records stay where they are."),
         ("What about HIPAA?", "We build on platforms that offer HIPAA options and a Business Associate Agreement where available, and keep messages to scheduling and logistics."),
         ("Will it use my practice phone number?", "Yes. Missed-call texts go out from your existing number, so patients see the name they called."),
         ("How long does setup take?", "About a week from our kickoff call to live, including your sign-off on the replies.")],
    author_extra="Before every call we test the practice ourselves: a call at lunchtime and a form on a weekend night, timed, so the conversation starts from your numbers, not ours.",
    sources=[HBR],
    also='<a href="/wedding-venues/">More booked tours for wedding venues</a>',
)

for p in (VENUE, DENTAL):
    d = ROOT / p["slug"]
    d.mkdir(exist_ok=True)
    (d / "index.html").write_text(page(p))
    print("wrote", d / "index.html")

(ROOT / "sitemap.xml").write_text(f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>{BASE}/</loc><lastmod>{UPDATED}</lastmod></url>
  <url><loc>{BASE}/wedding-venues/</loc><lastmod>{UPDATED}</lastmod></url>
  <url><loc>{BASE}/dental-clinics/</loc><lastmod>{UPDATED}</lastmod></url>
</urlset>
""")
(ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {BASE}/sitemap.xml\n")
print("wrote sitemap.xml, robots.txt")
