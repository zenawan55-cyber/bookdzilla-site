export interface Guide {
  slug: string;
  title: string; // h1
  seoTitle: string;
  desc: string;
  card: string; // one line for cards
  answer: string; // the short answer, shown first
  read: number;
  toc: [string, string][];
  body: string; // HTML
  faqs: [string, string][];
  sources: [string, string][];
  services: string[];
  industries: string[];
  related: string[];
}

const HBR: [string, string] = ['Oldroyd, McElheran and Elkington, "The Short Life of Online Sales Leads", Harvard Business Review, March 2011', 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads'];
const AD_LIB: [string, string] = ['Meta Ad Library', 'https://www.facebook.com/ads/library/'];
const ADS_TC: [string, string] = ['Google Ads Transparency Center', 'https://adstransparency.google.com/'];
const GOOGLE_AI: [string, string] = ['Google Search Central, "AI features and your website"', 'https://developers.google.com/search/docs/appearance/ai-features'];
const KNOT: [string, string] = ['The Knot, average cost of a wedding venue (2026 Real Weddings Study, weddings held in 2025)', 'https://www.theknot.com/content/average-cost-reception-venue'];
const HYPERLEAP: [string, string] = ['Hyperleap AI, "AI Front Desk for Wedding Venues" (plans and channels)', 'https://hyperleap.ai/wedding-venues-agents'];
const TRILLET: [string, string] = ['Trillet, "AI Answering Service for Wedding Venues" (pricing and booking)', 'https://trillet.ai/blogs/ai-answering-service-for-wedding-venues'];
const WEDDINGHERO: [string, string] = ['WeddingHero, "The Best AI Sales Assistant & Receptionist for Wedding Venues in 2026" (updated June 2026)', 'https://weddinghero.ca/wedding-venue/ideas/the-best-ai-sales-assistant-receptionist-for-wedding-venues-in-2026-57'];
const G2_VENUEX: [string, string] = ['G2, VenueX AI pricing overview', 'https://www.g2.com/products/venuex-ai/pricing'];
const EESEL_DENTAL: [string, string] = ['eesel AI, "AI receptionist for dentists: what works in 2026" (vendor pages checked November 4, 2026)', 'https://www.eesel.ai/blog/ai-receptionist-for-dentists'];
const CLOUDTALK_DENTAL: [string, string] = ['CloudTalk, "Best Dental AI Receptionist: 10 Tools Compared for 2026" (updated October 29, 2026)', 'https://www.cloudtalk.io/blog/best-dental-ai-virtual-receptionist-tools/'];
const JUSTCALL_DENTAL: [string, string] = ['JustCall, "The best AI receptionists for dental practices"', 'https://justcall.io/blog/best-ai-receptionists-dental.html'];
const DIALZARA_FRONTDESK: [string, string] = ['Dialzara, "My AI Front Desk vs RingCentral" (plans and minutes)', 'https://dialzara.com/compare/my-ai-front-desk-vs-ringcentral'];
const KERAGON_MEDSPA: [string, string] = ['Keragon, "10 Best AI Agent Software for Med Spas in 2026" (November 12, 2026)', 'https://www.keragon.com/blog/best-ai-agent-software-for-med-spas-in-2026'];
const ZENOTI_PRICING: [string, string] = ['Zenoti, pricing (AI Voice Receptionist on custom-priced plans)', 'https://www.zenoti.com/pricing'];
const PODIUM_PLANS: [string, string] = ['Podium Aesthetics, plans (custom pricing)', 'https://aesthetics.podium.com/plans'];
const JUSTCALL_MEDSPA: [string, string] = ['JustCall, "Best AI receptionists for med spas"', 'https://justcall.io/blog/best-ai-receptionists-for-medspas.html'];
const AMSPA_SOCIAL: [string, string] = ['American Med Spa Association, "Stop leaking paid social leads"', 'https://www.americanmedspa.org/news/stop-leaking-paid-social-leads-how-med-spas-can-use-ai-to-plug-the-intake-gap/'];
const ROSIE_PRICING: [string, string] = ['Rosie, plans and pricing', 'https://heyrosie.com/pricing'];
const GOODCALL_PRICING: [string, string] = ['Goodcall, pricing', 'https://www.goodcall.com/pricing'];
const JOBBER_RECEPTIONIST: [string, string] = ['Jobber Help Center, "Receptionist, powered by Jobber AI" (updated November 18, 2026)', 'https://help.getjobber.com/en/articles/receptionistpowered-by-jobber-ai/'];
const OTHERWORLDS_PRICING: [string, string] = ['Otherworlds AI, pricing', 'https://www.otherworldsai.com/pricing'];
const CARLY_HVAC: [string, string] = ['Carly, "HVAC Answering Service: Options and Costs (2026)" (list prices taken October 7, 2026)', 'https://www.usecarly.com/blog/hvac-answering-service/'];

export const GUIDES: Guide[] = [
  {
    slug: 'speed-to-lead',
    title: 'How fast should you respond to a new lead?',
    seoTitle: 'Speed to Lead: How Fast Should You Respond to a New Lead?',
    desc: 'Respond to a new lead within five minutes, and within one if you can. What the research says about lead response time and how to reply that fast.',
    card: 'Within five minutes, and within one if you can. The research, and how to do it without hiring.',
    answer: 'Respond to a new lead within five minutes, and within one minute if you can. In a Harvard Business Review study of 1.25 million sales leads, firms that tried to reach a lead within an hour were nearly seven times as likely to qualify it as firms that waited even one hour longer.',
    read: 5,
    toc: [['what', 'What speed to lead means'], ['research', 'What the research says'], ['why', 'Why speed wins'], ['good', 'What a good first reply contains'], ['how', 'How to reply in under a minute'], ['measure', 'How to measure it']],
    body: `
<section id="what">
<h2>What speed to lead means.</h2>
<p>Speed to lead is the time between a person contacting your business and your first real reply. It is also called lead response time. A real reply answers the question that was asked. An automatic "we received your message" does not count.</p>
<p>It applies to every way a lead arrives: a website form, a phone call, a Meta or Google lead form, a listing site and a direct message.</p>
</section>
<section id="research">
<h2>What the research says.</h2>
<p>The best known study is "The Short Life of Online Sales Leads", published in Harvard Business Review in March 2011. The authors audited 2,241 US companies and analyzed 1.25 million sales leads. They found:</p>
<ul>
<li>Firms that tried to contact a lead within an hour were nearly seven times as likely to qualify it as firms that tried an hour later.</li>
<li>They were more than 60 times as likely to qualify it as firms that waited 24 hours or longer.</li>
<li>Only 37% of the companies audited responded within an hour. 24% took more than 24 hours, and 23% never responded at all.</li>
<li>Among companies that did respond within 30 days, the average response time was 42 hours.</li>
</ul>
<p>The companies in that study sold to consumers and to businesses, and the pattern has held in later audits. Most businesses are slow, so the ones that are fast stand out.</p>
</section>
<section id="why">
<h2>Why speed wins.</h2>
<p>A person who fills in a form is thinking about the purchase at that moment. An hour later they are making dinner. A day later they have spoken to someone else.</p>
<p>For local, high-ticket purchases there is a second reason. Buyers rarely contact one business. A couple messages three venues in an evening. A homeowner calls three roofers after a storm. The first business to give a useful answer usually gets the visit, and the visit usually gets the job.</p>
</section>
<section id="good">
<h2>What a good first reply contains.</h2>
<p>Fast is not enough. The reply has to move the person forward. A good first reply does three things:</p>
<ol>
<li><b>Answers the question.</b> If they asked about price, give a starting price or a range. If they asked about a date, say whether it is open.</li>
<li><b>Offers two times.</b> "Thursday at 4pm or Saturday at 11am" is easier to answer than "when are you free?"</li>
<li><b>Sounds like a person at your business.</b> Use their name, your name and plain words.</li>
</ol>
<p>Compare it with the reply most businesses send: "Thanks for your interest. Please call us to discuss." That answers nothing and hands the work back to the buyer.</p>
</section>
<section id="how">
<h2>How to reply in under a minute.</h2>
<p>Nobody can watch an inbox at 9pm on a Sunday, so a one-minute reply has to be set up in advance:</p>
<ol>
<li>Send every form, ad lead and missed call to one place.</li>
<li>Write the first reply from your real prices, service area, policies and calendar.</li>
<li>Have it sent automatically by text and email, with two open times from your calendar.</li>
<li>Hand the conversation to a person the moment the buyer asks for one.</li>
<li>Follow up on day 1, 3, 7 and 14 if they go quiet, and stop when they reply.</li>
</ol>
<p>This is what Bookdzilla sets up in its <a href="/services/lead-follow-up/">speed to lead and follow-up service</a>. Missed calls are covered by <a href="/guides/missed-call-text-back/">missed-call text back</a>.</p>
</section>
<section id="measure">
<h2>How to measure it.</h2>
<p>Track the median time to the first real reply, every week, across every channel. A median is better than an average because one lead that waited all weekend will not hide a good week or excuse a bad one.</p>
<p>To find your number today, send an inquiry through your own website on a weekday evening and time the answer. The full method is in <a href="/guides/five-minute-leak-check/">how to audit your own lead funnel in five minutes</a>.</p>
</section>`,
    faqs: [
      ['What is a good lead response time?', 'Under five minutes is good and under one minute is excellent. Anything over an hour means a large share of leads will have moved on.'],
      ['Does an automatic confirmation count as a response?', 'No. A message that only confirms receipt does not answer the question. The clock stops when the lead gets a useful reply.'],
      ['Is speed still important for expensive purchases?', 'Yes. Buyers of expensive services compare several providers, and the first helpful answer usually earns the visit or the consult.'],
    ],
    sources: [HBR],
    services: ['lead-follow-up', 'tracking-and-reporting'],
    industries: ['wedding-venues', 'senior-living', 'roofing'],
    related: ['missed-call-text-back', 'five-minute-leak-check', 'wedding-venue-inquiry-response'],
  },
  {
    slug: 'ads-get-clicks-but-no-bookings',
    title: 'Why your ads get clicks but no bookings.',
    seoTitle: 'Why Your Ads Get Clicks but No Bookings (and How to Fix It)',
    desc: 'When ads get clicks but few bookings, the problem is usually after the click. The five places paid traffic leaks and how to fix each one.',
    card: 'The problem is usually after the click. Five places paid traffic leaks, and the fix for each.',
    answer: 'When ads get clicks but few bookings, the problem is usually after the click. Paid traffic leaks in five places: an ad with no clear promise, a page that does not match the ad, a slow first reply, no follow-up and no tracking from ad to booking. Fix the earliest leak first.',
    read: 6,
    toc: [['math', 'Do the math first'], ['ad', 'The ad'], ['page', 'The page'], ['reply', 'The reply'], ['follow', 'The follow-up'], ['numbers', 'The numbers'], ['order', 'What to fix first']],
    body: `
<section id="math">
<h2>Do the math first.</h2>
<p>Take last month's numbers and write down four of them: clicks, inquiries, booked appointments and jobs won. The biggest drop between two neighbors shows where to look.</p>
<ul>
<li>Many clicks and few inquiries: the page is the leak.</li>
<li>Many inquiries and few bookings: the reply and the follow-up are the leak.</li>
<li>Few clicks for the spend: the ad is the leak.</li>
<li>You cannot fill in the list: the numbers are the leak.</li>
</ul>
</section>
<section id="ad">
<h2>The ad makes no single promise.</h2>
<p>"Custom pools, financing available, 20 years of experience, call today" lists features. It does not give anyone a reason to act now. An ad works when it offers one thing a buyer can say yes to: a free design visit, a tour this week, a price guide.</p>
<p>Creative also wears out. When the same image runs for months, the people most likely to respond have already seen it, and each lead costs more. New angles each month keep the cost down. See <a href="/services/paid-ads/">how Bookdzilla runs Meta and Google ads</a>.</p>
</section>
<section id="page">
<h2>The page does not match the ad.</h2>
<p>This is the most common leak. The ad promises one thing and the click lands on a homepage that talks about everything. Three checks, on a phone:</p>
<ol>
<li>Does the first line of the page repeat the promise of the ad?</li>
<li>Are your rating and review count visible without scrolling?</li>
<li>Can the visitor book or inquire without scrolling?</li>
</ol>
<p>A "no" to any of them costs inquiries. The fix is a <a href="/services/landing-pages/">landing page built for that one ad</a>.</p>
</section>
<section id="reply">
<h2>The first reply is slow.</h2>
<p>An inquiry is not a booking. Buyers of expensive local services contact two or three businesses and go with the one that answers first and best. In a Harvard Business Review study, firms that tried to reach a lead within an hour were nearly seven times as likely to qualify it as firms that waited an hour longer.</p>
<p>The standard to aim for is a real answer within a minute, with a price or a range and two times to book. More in <a href="/guides/speed-to-lead/">how fast you should respond to a new lead</a>.</p>
</section>
<section id="follow">
<h2>Nobody follows up.</h2>
<p>People go quiet because they are busy. One call and one voicemail is not follow-up. A short message on day 1, 3, 7 and 14 brings back a real share of the people who meant to reply and forgot.</p>
<p>The same goes for the people who inquired last season. They already know you, and contacting them costs almost nothing. That is <a href="/services/database-reactivation/">database reactivation</a>.</p>
</section>
<section id="numbers">
<h2>Nobody can see which ads book.</h2>
<p>If reports stop at clicks and leads, budget drifts toward ads that produce cheap leads, not booked work. Track each lead to its ad and follow it to the calendar. Then judge every ad by <a href="/guides/cost-per-booked-appointment/">cost per booked appointment</a>.</p>
</section>
<section id="order">
<h2>What to fix first.</h2>
<p>Fix from the booking backward. A faster reply and real follow-up pay off on the leads you already get, at no extra ad spend. Then fix the page, so more clicks become inquiries. Only then raise the ad budget. Spending more before fixing the path just pays for more leaks.</p>
<p>If you want this done on your own ads and pages, a <a href="/free-leak-check/">free leak check</a> shows where your path loses people, on a 2-minute video.</p>
</section>`,
    faqs: [
      ['What is a good conversion rate for a landing page?', 'It varies widely by industry and offer, so compare a page against its own past results. If a page built for one ad converts no better than your homepage did, the promise or the proof is missing.'],
      ['Should I pause my ads until this is fixed?', 'Usually not. Keep them running at a level you are comfortable with, fix the reply and the page, and raise the budget once bookings follow.'],
      ['Are cheap leads a good sign?', 'Only if they book. Cost per lead can fall while bookings stay flat. Cost per booked appointment is the number that matters.'],
    ],
    sources: [HBR, AD_LIB, ADS_TC],
    services: ['paid-ads', 'landing-pages', 'lead-follow-up'],
    industries: ['pool-builders', 'med-spas', 'dental-practices'],
    related: ['cost-per-booked-appointment', 'five-minute-leak-check', 'speed-to-lead'],
  },
  {
    slug: 'cost-per-booked-appointment',
    title: 'Cost per booked appointment, explained.',
    seoTitle: 'Cost per Booked Appointment: Formula and Example',
    desc: 'Cost per booked appointment is ad spend divided by appointments booked. The formula, a worked example and why it beats cost per lead.',
    card: 'Ad spend divided by appointments booked. The one number to judge every ad by.',
    answer: 'Cost per booked appointment is your ad spend divided by the number of appointments booked from that spend. If $640 of ads produced 9 booked tours, each booked tour cost about $71. It is a better measure than cost per lead because it only improves when real appointments do.',
    read: 4,
    toc: [['formula', 'The formula'], ['example', 'A worked example'], ['vs', 'Cost per lead compared'], ['five', 'The five numbers to watch'], ['improve', 'How to lower it']],
    body: `
<section id="formula">
<h2>The formula.</h2>
<p><b>Cost per booked appointment = ad spend ÷ appointments booked from that spend.</b></p>
<p>Use the same period for both numbers, usually a week or a month. Count an appointment when it is on the calendar: a tour, a consult, a design visit, an inspection. Use whatever your business calls the step before a sale.</p>
</section>
<section id="example">
<h2>A worked example.</h2>
<p>These numbers are made up to show the arithmetic.</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Measure</th><th>Ad A</th><th>Ad B</th></tr></thead>
<tbody>
<tr><td>Ad spend</td><td class="num">$600</td><td class="num">$600</td></tr>
<tr><td>Leads</td><td class="num">40</td><td class="num">15</td></tr>
<tr><td>Cost per lead</td><td class="num">$15</td><td class="num">$40</td></tr>
<tr><td>Booked appointments</td><td class="num">3</td><td class="num">6</td></tr>
<tr><td>Cost per booked appointment</td><td class="num">$200</td><td class="num">$100</td></tr>
</tbody></table></div>
<p>By cost per lead, Ad A looks almost three times better. By cost per booked appointment, Ad B is twice as good. A report that stops at leads would move budget to the wrong ad.</p>
</section>
<section id="vs">
<h2>Cost per lead compared.</h2>
<p>Cost per lead is easy to get from Meta or Google, which is why most reports use it. Its weakness is that it treats every lead as equal. An ad with a vague promise can attract many people who were never going to buy.</p>
<p>Cost per booked appointment needs one more step: knowing which leads booked. That takes <a href="/services/tracking-and-reporting/">lead tracking</a> from the ad through to the calendar. It is worth the step, because it is the first number in the chain that is tied to revenue.</p>
</section>
<section id="five">
<h2>The five numbers to watch.</h2>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Number</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Leads</td><td>How many people raised a hand: forms, calls, messages and ad leads.</td></tr>
<tr><td>Booked appointments</td><td>How many of them ended up on your calendar.</td></tr>
<tr><td>Cost per booked appointment</td><td>Ad spend divided by booked appointments.</td></tr>
<tr><td>Response time</td><td>How fast the first real reply went out. Aim for under a minute.</td></tr>
<tr><td>Revenue from booked jobs</td><td>What the jobs that came from those appointments are worth.</td></tr>
</tbody></table></div>
<p>If leads rise and bookings stay flat, the problem is the reply and the follow-up, not the ads. Fix that before spending more.</p>
</section>
<section id="improve">
<h2>How to lower it.</h2>
<p>There are only two ways. Spend less for the same bookings, or book more from the same spend. The second is usually easier:</p>
<ul>
<li>Reply to every inquiry within a minute. See <a href="/guides/speed-to-lead/">how fast to respond to a new lead</a>.</li>
<li>Follow up on day 1, 3, 7 and 14.</li>
<li>Send each ad to a <a href="/services/landing-pages/">page built for it</a>.</li>
<li>Remind people before the appointment so they arrive.</li>
<li>Move budget each week toward the ads with the lowest cost per booking.</li>
</ul>
</section>`,
    faqs: [
      ['What is a good cost per booked appointment?', 'It depends on what a sale is worth. A $150 booked design visit is cheap for a $60,000 pool and expensive for a $200 service call. Compare it with the profit on the jobs those appointments produce.'],
      ['How is it different from cost per acquisition?', 'Cost per acquisition counts won customers. Cost per booked appointment counts the step before, which you can measure weeks earlier and act on faster.'],
      ['Should no-shows be counted?', 'Count bookings for this number, and track show rate beside it. If many booked appointments do not arrive, reminders are the fix.'],
    ],
    sources: [],
    services: ['tracking-and-reporting', 'paid-ads'],
    industries: ['wedding-venues', 'dental-practices', 'hvac'],
    related: ['ads-get-clicks-but-no-bookings', 'speed-to-lead', 'five-minute-leak-check'],
  },
  {
    slug: 'wedding-venue-inquiry-response',
    title: 'How to reply to a wedding venue inquiry.',
    seoTitle: 'How to Respond to a Wedding Venue Inquiry (With a Template)',
    desc: 'Reply to a wedding venue inquiry within minutes: confirm the date, give a starting price and offer two tour times. A template you can copy.',
    card: 'Confirm the date, give a starting price, offer two tour times. A template you can copy.',
    answer: 'Reply to a wedding venue inquiry within minutes, not days. Confirm whether the date is open, give a starting price, and offer two tour times. Couples contact several venues at once, and 76% say price is the most important factor in choosing one, so a reply without a number loses to one with it.',
    read: 5,
    toc: [['why', 'Why the first reply decides the tour'], ['template', 'A reply you can copy'], ['avoid', 'The reply to avoid'], ['follow', 'A follow-up schedule'], ['after', 'After the tour'], ['test', 'Test your own venue']],
    body: `
<section id="why">
<h2>Why the first reply decides the tour.</h2>
<p>Couples plan in the evenings and on weekends. They send the same message to three or four venues and tour the ones that answer with a date and a price. According to The Knot, couples married in 2025 spent an average of $12,900 on their venue, and 76% say price matters most when choosing one.</p>
<p>That makes a venue inquiry a high-value lead with a short life. A Thursday night message answered on Monday is usually touring somewhere else by then.</p>
</section>
<section id="template">
<h2>A reply you can copy.</h2>
<p>Copy the shape and use your own details:</p>
<blockquote><p>Hi Maya, congratulations! June 12 is open right now. Saturdays for up to 150 guests start at $6,500 and include tables, chairs, the bridal suite and the garden ceremony site.</p><p>The easiest way to see if it feels right is a tour. I have Thursday at 4pm or Saturday at 11am. Which works better?</p></blockquote>
<p>It does four things in under 60 words. It uses her name. It answers the date. It gives a starting price and what it includes. It offers two tour times, so the next step is one word away.</p>
</section>
<section id="avoid">
<h2>The reply to avoid.</h2>
<blockquote><p>Thank you for your interest! Please find our brochure attached. Let us know a good time for a call.</p></blockquote>
<p>This reply is polite and it answers nothing. It asks the couple to open a PDF, find the price themselves and propose a time, at 9pm, while other venues are in the same inbox.</p>
<p>You do not have to publish a full price sheet. A starting Saturday rate is enough to tell a couple whether you are within reach.</p>
</section>
<section id="follow">
<h2>A follow-up schedule.</h2>
<p>Couples who go quiet are busy, not gone. Short, personal messages keep you in the running:</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>When</th><th>What to send</th></tr></thead>
<tbody>
<tr><td>Day 1</td><td>A photo of the space set for a wedding their size.</td></tr>
<tr><td>Day 3</td><td>The answer to the question most couples ask next, such as catering or rain plans.</td></tr>
<tr><td>Day 7</td><td>Whether their date is still open.</td></tr>
<tr><td>Day 14</td><td>A friendly last check-in.</td></tr>
</tbody></table></div>
<p>Stop the moment they reply. A missed call gets a text back within seconds, and a missed tour gets a rebooking message the same day.</p>
</section>
<section id="after">
<h2>After the tour.</h2>
<p>The tour is not the booking. Send the proposal the same day, check in two days later and remind the couple before any hold on their date expires. Many venues lose weddings here, not at the first reply.</p>
</section>
<section id="test">
<h2>Test your own venue.</h2>
<p>On a Thursday or Friday evening, send an inquiry through your own website from a personal email. Ask about a Saturday next year, 120 guests and pricing. Write down when the reply arrives and whether it answers the date and the price.</p>
<p>If it took more than an hour or answered neither, you have found where tours are going. Bookdzilla sets this up for venues: see <a href="/industries/wedding-venues/">marketing for wedding venues</a> and the <a href="/services/lead-follow-up/">speed to lead and follow-up service</a>.</p>
</section>`,
    faqs: [
      ['How quickly should a venue respond to an inquiry?', 'Within minutes. Couples contact several venues at once and tour the first ones that reply with a date and a price.'],
      ['Should a venue give pricing in the first reply?', 'Yes, at least a starting price. Most couples rank price first, and a reply without a number invites them to choose a venue that gave one.'],
      ['How many times should a venue follow up?', 'Four short messages over two weeks is a sensible default: day 1, 3, 7 and 14. Stop as soon as the couple replies.'],
    ],
    sources: [KNOT, HBR],
    services: ['lead-follow-up', 'landing-pages'],
    industries: ['wedding-venues'],
    related: ['speed-to-lead', 'missed-call-text-back', 'five-minute-leak-check'],
  },
  {
    slug: 'ai-receptionist-for-wedding-venues',
    title: 'AI receptionist and inquiry follow-up for wedding venues: options and prices.',
    seoTitle: 'AI Receptionist for Wedding Venues: Options and 2026 Prices',
    desc: 'What wedding venues pay for AI inquiry replies and call answering in 2026: AI software from $40 a month, venue AI assistants and done-for-you agencies compared.',
    card: 'AI software from $40 a month, venue AI assistants and done-for-you agencies, compared by price and coverage.',
    answer: 'A wedding venue can buy AI inquiry replies and call answering three ways. General AI software you set up yourself starts at $40 a month for chat and messaging, and an AI phone receptionist such as Trillet starts at $249 a month. Venue AI sales assistants that also catch The Knot, WeddingWire and Zola leads list prices from $149 to $499 a month, and some quote up to about $1,600. A done-for-you agency builds the system and also fixes the ads and pages that bring couples in. Bookdzilla charges $1,000 a month plus a one-time setup fee of $300 to $400.',
    read: 6,
    toc: [['ways', 'Three ways to buy it'], ['prices', 'Options and prices'], ['check', 'What to check before you pay'], ['which', 'Which one fits your venue'], ['fit', 'Where Bookdzilla fits']],
    body: `
<section id="ways">
<h2>Three ways to buy it.</h2>
<p>The job is the same in every case: answer each inquiry within a minute with the date, a starting price and tour times, pick up the phone when your team cannot, and follow up until the couple books a tour or says no. Couples message several venues in one evening and tour the ones that answer first. <a href="/guides/wedding-venue-inquiry-response/">How to reply to a venue inquiry</a> covers what that first reply should say.</p>
<ul>
<li><b>General AI software.</b> A chat agent or phone receptionist you configure yourself. It is the cheapest option, and you write the answers, connect the calendar and check the conversations.</li>
<li><b>Venue AI sales assistants.</b> Software built for venues. It reads leads from listing sites such as The Knot, WeddingWire and Zola, replies by email and text and books tours. Some also answer calls.</li>
<li><b>Done-for-you agencies.</b> A team that builds the reply, booking, follow-up and call answering for you, usually on a CRM such as GoHighLevel, and also runs the ads and landing pages that produce the inquiries.</li>
</ul>
</section>
<section id="prices">
<h2>Options and prices.</h2>
<div class="cmp-wrap"><table class="cmp">
<thead><tr><th scope="col">Option</th><th scope="col">Published price</th><th scope="col">Calls</th><th scope="col">What it covers</th></tr></thead>
<tbody>
<tr><th scope="row">Hyperleap AI<small>General AI chat agent</small></th><td>$40, $100 or $200 a month</td><td>Not listed</td><td>Website chat, WhatsApp, Instagram and Facebook messages. Books tours through Calendly or Cal.com on the $100 and $200 plans.</td></tr>
<tr><th scope="row">Trillet<small>General AI phone receptionist</small></th><td>From $249 a month with 2,500 minutes, then $0.12 a minute</td><td>Yes</td><td>Phone calls. Books tours through Google Calendar, Cal.com or a GoHighLevel calendar.</td></tr>
<tr><th scope="row">Mikla<small>Venue AI sales assistant</small></th><td>$149 (up to 50 leads), $249 or $499 a month. Enterprise quoted.</td><td>Yes</td><td>Email, text, phone, website chat, Instagram, Facebook and WhatsApp. The Knot, WeddingWire and Zola leads.</td></tr>
<tr><th scope="row">Breezit<small>Venue AI sales assistant</small></th><td>From $199 a month</td><td>Yes</td><td>Email, text, phone and lead portals, including The Knot, WeddingWire and Zola.</td></tr>
<tr><th scope="row">VenueAI<small>Venue AI sales assistant</small></th><td>Demo-led. About $399 to $1,599 a month by lead volume.</td><td>Not listed</td><td>Email and text. The Knot, WeddingWire and Zola leads.</td></tr>
<tr><th scope="row">VenueX AI<small>AI agent for venue sales teams</small></th><td>Not published</td><td>Not listed</td><td>Email, text and web chat. Tours to Google Calendar or Outlook.</td></tr>
<tr><th scope="row">Bookdzilla<small>Done-for-you agency</small></th><td>$1,000 a month plus $300 to $400 setup, no contract</td><td>Yes</td><td>Website forms, The Knot and WeddingWire emails, Instagram and Facebook messages and calls, plus Meta and Google ads and landing pages.</td></tr>
</tbody>
</table></div>
<p>Prices are monthly in US dollars and leave out your ad budget, and phone minutes and texts unless stated. Hyperleap and Trillet prices come from their own pages. Mikla, Breezit and VenueAI are as listed in WeddingHero's June 2026 comparison, and VenueX AI from G2. Checked November 25, 2026, so confirm the current price before you buy. Bookdzilla wrote this guide and is one of the options in it.</p>
</section>
<section id="check">
<h2>What to check before you pay.</h2>
<ol>
<li><b>Which inquiries it reads.</b> List where your couples come from: website form, The Knot, WeddingWire, Zola, Instagram, Facebook and phone. Anything the tool does not read still waits for your team.</li>
<li><b>Whether it gives a price.</b> Most couples rank price first. A reply that says "let's set up a call" loses to one that gives a starting Saturday rate.</li>
<li><b>Tours versus dates.</b> Booking a tour from your calendar is easy. Confirming a wedding date is not, because holds and contracts live in your booking system. A safe setup offers tour times and lets a coordinator confirm the date.</li>
<li><b>Who writes and approves the replies.</b> You should see every script before it goes live and be able to change the tone.</li>
<li><b>Follow-up that stops.</b> Messages on day 1, 3, 7 and 14 are a sensible default, and they should stop the moment the couple replies or books.</li>
<li><b>Who owns the number and the data.</b> Your leads, conversations and phone number should stay yours if you cancel.</li>
</ol>
</section>
<section id="which">
<h2>Which one fits your venue.</h2>
<ul>
<li><b>Plenty of inquiries, slow replies.</b> A venue AI sales assistant is usually enough. Pick one that reads every source your couples use.</li>
<li><b>Calls going to voicemail.</b> Add phone answering, either from a venue tool that covers calls or a separate AI receptionist.</li>
<li><b>Too few inquiries, or ads that do not produce tours.</b> Software will not fix that. You need someone to fix the ads and the page as well as the reply.</li>
<li><b>No time to set anything up.</b> Choose a done-for-you option and judge it on booked tours, not messages sent.</li>
</ul>
</section>
<section id="fit">
<h2>Where Bookdzilla fits.</h2>
<p>Bookdzilla is an AI marketing agency for high-ticket local businesses in the United States, including wedding venues. It builds the reply within a minute, the <a href="/services/ai-receptionist/">AI receptionist</a> and the follow-up in GoHighLevel, and runs the Meta and Google ads and landing pages when those are where couples are lost. It costs $1,000 a month plus a one-time setup fee of $300 to $400, month to month. See <a href="/pricing/">pricing</a> and <a href="/industries/wedding-venues/">marketing for wedding venues</a>.</p>
<p>If your ads already bring enough couples and only the reply is slow, a venue AI tool from the table may cost less. Start with a <a href="/free-leak-check/">free leak check</a> to see where tours are being lost before you buy anything.</p>
</section>`,
    faqs: [
      ['How much does an AI receptionist cost for a wedding venue?', 'Published prices in 2026 run from $40 a month for chat-only software to $499 a month for venue AI sales assistants, and some demo-led tools quote up to about $1,600 a month. Phone minutes and texts can cost extra. Agencies that also run your ads charge more: Bookdzilla is $1,000 a month plus a one-time setup fee of $300 to $400.'],
      ['Can an AI receptionist confirm a wedding date?', 'Only if it reads your booking system. Most connect to a calendar for tours, which does not show holds or contracts, so a safe setup offers tour times and has a coordinator confirm the date.'],
      ['Does it work with The Knot and WeddingWire?', 'Venue AI sales assistants usually read leads from The Knot, WeddingWire and Zola. General AI tools may need those emails forwarded or connected, so ask which sources are covered before you pay.'],
    ],
    sources: [HYPERLEAP, TRILLET, WEDDINGHERO, G2_VENUEX, KNOT],
    services: ['ai-receptionist', 'lead-follow-up', 'paid-ads'],
    industries: ['wedding-venues'],
    related: ['wedding-venue-inquiry-response', 'ai-receptionist-vs-answering-service', 'how-to-choose-an-ai-marketing-agency'],
  },
  {
    slug: 'ai-receptionist-for-dental-practices',
    title: 'AI receptionist and new-patient follow-up for dental practices: options and prices.',
    seoTitle: 'AI Receptionist for Dentists: Options and 2026 Prices',
    desc: 'What dental practices pay for an AI receptionist and new-patient follow-up in 2026: dental AI platforms, general AI receptionists and done-for-you agencies compared.',
    card: 'Dental AI platforms from $299 a month, general AI receptionists and done-for-you agencies, compared.',
    answer: 'A dental practice can buy AI call answering and new-patient follow-up three ways. Dental AI platforms that book straight into Dentrix, Open Dental or Eaglesoft publish prices from $299 to $1,199 a month, and some quote only. General AI receptionists such as Smith.ai start free for 25 calls and reach $500 a month for 300 calls, but name no dental software. A done-for-you agency builds the reply, reminders and follow-up and also runs the ads. Bookdzilla charges $1,000 a month plus a one-time setup fee of $300 to $400.',
    read: 6,
    toc: [['ways', 'Three ways to buy it'], ['prices', 'Options and prices'], ['check', 'What to check before you pay'], ['which', 'Which one fits your practice'], ['fit', 'Where Bookdzilla fits']],
    body: `
<section id="ways">
<h2>Three ways to buy it.</h2>
<p>The job has two halves. The phone: answer new-patient calls when the front desk is busy, at lunch and after hours, and book them into the schedule. The inbox: reply to website forms and ad leads within a minute with a fee range, financing and consult times, then remind and follow up. Most products cover the first half well. Fewer cover the second.</p>
<ul>
<li><b>Dental AI platforms.</b> Software built for dental offices. It answers calls, books into your practice management software and, on some plans, texts and chats.</li>
<li><b>General AI receptionists.</b> Phone answering for any business. Cheaper to start, but it books through calendar apps, so your team re-enters the appointment.</li>
<li><b>Done-for-you agencies.</b> A team that builds the reply, booking, reminders and follow-up for you, usually on a CRM such as GoHighLevel, and also runs the Meta and Google ads and the landing pages.</li>
</ul>
</section>
<section id="prices">
<h2>Options and prices.</h2>
<div class="cmp-wrap"><table class="cmp">
<thead><tr><th scope="col">Option</th><th scope="col">Published price</th><th scope="col">Calls</th><th scope="col">What it covers</th></tr></thead>
<tbody>
<tr><th scope="row">Dentina<small>Dental AI receptionist</small></th><td>$299 or $399 a month per location, billed annually</td><td>Yes</td><td>Books into Dentrix, Open Dental, Eaglesoft and other systems. The $399 plan adds two-way texting and web chat.</td></tr>
<tr><th scope="row">Viva AI<small>Dental AI receptionist</small></th><td>$349, $899 or $1,199 a month in credits, about 10 per AI call minute</td><td>Yes</td><td>Calls, texts, web chat and email. Books into Open Dental, Dentrix, Eaglesoft and Curve.</td></tr>
<tr><th scope="row">Weave<small>Phone and texting platform with AI</small></th><td>Platform from $199 a month. AI receptionist quoted.</td><td>Yes</td><td>Calls and texts. Books directly into Open Dental, Eaglesoft, Dentrix and Denticon, and takes requests in other systems.</td></tr>
<tr><th scope="row">Arini<small>Dental AI receptionist</small></th><td>Quote only</td><td>Yes</td><td>Calls, cancellations and insurance questions, plus outbound campaigns. Books into Open Dental, Eaglesoft, Curve, Dentrix Ascend and others.</td></tr>
<tr><th scope="row">Smith.ai<small>General AI receptionist</small></th><td>Free for 25 calls, $150 a month for 75 calls, $500 for 300</td><td>Yes</td><td>Answers, qualifies and routes calls, with live receptionists available. Books through calendar tools, not dental software.</td></tr>
<tr><th scope="row">Bookdzilla<small>Done-for-you agency</small></th><td>$1,000 a month plus $300 to $400 setup, no contract</td><td>Yes</td><td>Forms, calls and ad leads answered within a minute with a fee range, financing and consult times. Reminders, unscheduled-treatment follow-up, Meta and Google ads and landing pages.</td></tr>
</tbody>
</table></div>
<p>Prices are monthly in US dollars. Dentina, Viva AI, Weave, Arini and Smith.ai are as reported in eesel's November 4, 2026 check of each vendor's pricing, integration and help pages, and Dentina and Weave match CloudTalk's October 2026 comparison. Checked November 26, 2026, so confirm the current price before you buy. Bookdzilla wrote this guide and is one of the options in it.</p>
</section>
<section id="check">
<h2>What to check before you pay.</h2>
<ol>
<li><b>Booking into your software.</b> Name your system and version. Direct booking puts the appointment in the schedule. A "request" means your team still types it in, which is where after-hours bookings get lost.</li>
<li><b>New patients, not only reschedules.</b> New-patient calls ask about insurance, first-visit cost and openings. Make a test call as a new patient before you sign.</li>
<li><b>Web and ad leads.</b> Implant and cosmetic patients often fill in a form at night. A tool that only answers the phone leaves those waiting until morning.</li>
<li><b>Fees and financing.</b> For implants, veneers and aligners, a reply with a fee range and a payment plan books more consults than "come in to find out".</li>
<li><b>Patient privacy.</b> Get a signed business associate agreement before the first live call, ask where recordings are stored, and keep clinical questions out of automated texts.</li>
<li><b>Treatment plans that stall.</b> Patients who said "let me think about it" need a follow-up. Ask who sends it, and when it stops.</li>
<li><b>Billing terms.</b> Some plans are per location and billed annually. Price the full year before you compare.</li>
</ol>
</section>
<section id="which">
<h2>Which one fits your practice.</h2>
<ul>
<li><b>Calls overflow at lunch and after hours.</b> A dental AI platform that books into your software is usually the right first buy.</li>
<li><b>Most new patients come from forms and ads.</b> Make sure those get a reply within a minute, not only the phone.</li>
<li><b>Consults happen but treatment does not.</b> Follow-up on open treatment plans matters more than answering speed.</li>
<li><b>Ads bring leads but few consults.</b> Software will not fix the page or the offer. You need someone who fixes the ads, the page and the reply together.</li>
</ul>
</section>
<section id="fit">
<h2>Where Bookdzilla fits.</h2>
<p>Bookdzilla is an AI marketing agency for high-ticket local businesses in the United States, including implant and cosmetic dental practices. It builds the reply within a minute, the <a href="/services/ai-receptionist/">AI receptionist</a>, the reminders and the treatment-plan follow-up in GoHighLevel, booking into your calendar where the software allows or into consult slots your team confirms. It also runs the Meta and Google ads and the landing pages. It costs $1,000 a month plus a one-time setup fee of $300 to $400, month to month. See <a href="/pricing/">pricing</a> and <a href="/industries/dental-practices/">marketing for dental practices</a>.</p>
<p>If your ads already bring enough patients and only the phone is the problem, a dental AI platform from the table may cost less. Start with a <a href="/free-leak-check/">free leak check</a> to see where consults are being lost before you buy anything.</p>
</section>`,
    faqs: [
      ['How much does an AI receptionist cost for a dental practice?', 'Published prices in 2026 run from $299 to $1,199 a month for dental AI platforms that book into practice software, and some vendors quote only. General AI receptionists start free and reach $500 a month for 300 calls. Bookdzilla, which also handles web leads, follow-up and ads, is $1,000 a month plus a one-time setup fee of $300 to $400.'],
      ['Does an AI receptionist book into Dentrix, Open Dental or Eaglesoft?', 'Dental platforms such as Dentina, Viva AI and Arini book directly into those systems, though supported versions differ. Weave books directly into four systems and takes requests in others. General tools book through calendar apps, so your team re-enters the appointment.'],
      ['Is an AI receptionist HIPAA compliant?', 'Ask for a signed business associate agreement before the first live call, and check where recordings are stored and for how long. Keep clinical questions out of automated texts.'],
    ],
    sources: [EESEL_DENTAL, CLOUDTALK_DENTAL, JUSTCALL_DENTAL],
    services: ['ai-receptionist', 'lead-follow-up', 'database-reactivation'],
    industries: ['dental-practices'],
    related: ['ai-receptionist-vs-answering-service', 'speed-to-lead', 'how-to-choose-an-ai-marketing-agency'],
  },
  {
    slug: 'ai-receptionist-for-med-spas',
    title: 'AI receptionist and lead follow-up for med spas: options and prices.',
    seoTitle: 'AI Receptionist for Med Spas: Options and 2026 Prices',
    desc: 'What med spas pay for an AI receptionist and instant lead follow-up in 2026: general AI receptionists, med spa platforms and done-for-you agencies compared.',
    card: 'AI receptionists from $99 a month, med spa platforms and done-for-you agencies, compared.',
    answer: 'A med spa can buy AI call answering and lead follow-up three ways. Standalone AI receptionists publish prices from $99 to $500 a month. Med spa platforms such as Zenoti and Podium include AI on custom-quoted plans, and Aesthetix CRM sells an AI Employee add-on for $299 a month. A done-for-you agency builds the reply, booking and rebooking and also runs the ads. Bookdzilla charges $1,000 a month plus a one-time setup fee of $300 to $400.',
    read: 6,
    toc: [['ways', 'Three ways to buy it'], ['prices', 'Options and prices'], ['check', 'What to check before you pay'], ['which', 'Which one fits your med spa'], ['fit', 'Where Bookdzilla fits']],
    body: `
<section id="ways">
<h2>Three ways to buy it.</h2>
<p>Most med spa inquiries do not start with a phone call. They arrive as an Instagram message, a text or a Meta lead form at 9pm, and paid social is the first source of new clients for most practices. The job is to answer those within a minute with a starting price and two open times, pick up the phone when the front desk is with a client, and bring clients back when their treatment is due.</p>
<ul>
<li><b>Standalone AI receptionists.</b> Phone answering you set up yourself. Cheapest to start. Booking usually goes to a shared calendar or a texted link.</li>
<li><b>Med spa platforms.</b> Booking and practice software with AI built in or sold as an add-on. Best if you already run on it.</li>
<li><b>Done-for-you agencies.</b> A team that builds the reply, booking, reminders and rebooking for you, usually on a CRM such as GoHighLevel, and also runs the ads and the landing pages.</li>
</ul>
</section>
<section id="prices">
<h2>Options and prices.</h2>
<div class="cmp-wrap"><table class="cmp">
<thead><tr><th scope="col">Option</th><th scope="col">Published price</th><th scope="col">Calls</th><th scope="col">What it covers</th></tr></thead>
<tbody>
<tr><th scope="row">Frontdesk<small>General AI receptionist</small></th><td>$99 a month for 200 minutes or $149 for 300, about 20% less billed annually</td><td>Yes</td><td>Answers calls around the clock. Booking workflows come with the $149 plan.</td></tr>
<tr><th scope="row">Smith.ai<small>AI receptionist with live backup</small></th><td>Free for 25 calls, $150 a month for 75 calls, $500 for 300</td><td>Yes</td><td>Answers, qualifies and routes calls, and can transfer to live receptionists.</td></tr>
<tr><th scope="row">Aesthetix CRM<small>Med spa CRM with an AI add-on</small></th><td>CRM from $299 a month, plus $299 for the AI Employee</td><td>Not listed</td><td>Lead conversion, follow-up and marketing automation inside the CRM.</td></tr>
<tr><th scope="row">Zenoti<small>Med spa software with AI agents</small></th><td>Custom pricing. AI Voice Receptionist on the top plan.</td><td>Yes</td><td>Answers calls around the clock and books inside Zenoti.</td></tr>
<tr><th scope="row">Podium<small>Med spa platform with an AI Employee</small></th><td>Custom pricing</td><td>Not listed</td><td>Forms, texts, calls and email in one inbox. The AI Employee answers questions and books appointments.</td></tr>
<tr><th scope="row">Bookdzilla<small>Done-for-you agency</small></th><td>$1,000 a month plus $300 to $400 setup, no contract</td><td>Yes</td><td>Instagram messages, forms, ad leads and missed calls answered within a minute with a starting price and two times. Rebooking by treatment, Meta ads and landing pages.</td></tr>
</tbody>
</table></div>
<p>Prices are monthly in US dollars. Frontdesk is as listed in Dialzara's comparison, Smith.ai from eesel's November 4, 2026 check of its pricing page, Aesthetix CRM from Keragon's November 2026 comparison, and Zenoti and Podium from their own pricing pages. Checked November 26, 2026, so confirm the current price before you buy. Bookdzilla wrote this guide and is one of the options in it.</p>
</section>
<section id="check">
<h2>What to check before you pay.</h2>
<ol>
<li><b>Where bookings land.</b> A shared calendar cannot see which injector, room and treatment length a slot needs, so many setups end with the AI capturing the lead and a coordinator placing the booking. Ask whether it books into Boulevard, Zenoti, Vagaro or your system, or sends a link.</li>
<li><b>Messages, not only calls.</b> If most inquiries come from Instagram, texts and Meta lead forms, a phone-only receptionist misses the busiest channel.</li>
<li><b>Starting prices.</b> "Lip filler starts at $650 a syringe" books consults. "Come in for a consult to find out" sends clients to the spa that gave a number.</li>
<li><b>A hard line on medical questions.</b> Replies should cover prices, availability and booking. Anything clinical goes to your provider.</li>
<li><b>Deposits and no-shows.</b> Ask how it confirms, reminds and handles deposits for first-time clients.</li>
<li><b>Privacy.</b> Med spas handle health information. Ask whether the vendor signs a business associate agreement.</li>
<li><b>Rebooking.</b> Treatments that last three or four months need a reminder when they are due. Check who sends it.</li>
</ol>
</section>
<section id="which">
<h2>Which one fits your med spa.</h2>
<ul>
<li><b>Calls missed while the team is with clients.</b> A standalone AI receptionist, or your platform's AI if it has one.</li>
<li><b>Already on Zenoti, Podium or Aesthetix.</b> Price their AI first, because it books where your schedule lives.</li>
<li><b>Paid social leads going cold.</b> A reply within a minute on messages and lead forms matters more than the phone.</li>
<li><b>Ads that do not produce consults.</b> Software will not fix the offer or the page. You need someone who fixes the ads, the page and the reply together.</li>
</ul>
</section>
<section id="fit">
<h2>Where Bookdzilla fits.</h2>
<p>Bookdzilla is an AI marketing agency for high-ticket local businesses in the United States, including med spas. It builds the reply within a minute on messages, forms and missed calls, the <a href="/services/ai-receptionist/">AI receptionist</a> and the rebooking reminders in GoHighLevel, and runs the Meta ads and landing pages for each offer. It costs $1,000 a month plus a one-time setup fee of $300 to $400, month to month. See <a href="/pricing/">pricing</a> and <a href="/industries/med-spas/">marketing for med spas</a>.</p>
<p>If your ads already bring enough clients and you only need the phone answered, a receptionist from the table may cost less. Start with a <a href="/free-leak-check/">free leak check</a> to see where bookings are being lost before you buy anything.</p>
</section>`,
    faqs: [
      ['How much does an AI receptionist cost for a med spa?', 'Published prices in 2026 start at $99 a month for standalone AI receptionists and reach $500 a month for 300 calls. Med spa platforms such as Zenoti and Podium quote their AI on custom plans. Bookdzilla, which also runs the ads and follow-up, is $1,000 a month plus a one-time setup fee of $300 to $400.'],
      ['Can an AI receptionist book into Boulevard or Zenoti?', 'Zenoti\'s own AI books inside Zenoti. Other tools differ: some write into your booking software, others book a shared calendar or text a booking link for a coordinator to place. Ask which before you buy.'],
      ['Will it answer Instagram messages?', 'Not always. Many AI receptionists answer calls only. If most of your inquiries arrive by Instagram, text or Meta lead forms, choose a setup that replies there within a minute.'],
    ],
    sources: [DIALZARA_FRONTDESK, EESEL_DENTAL, KERAGON_MEDSPA, ZENOTI_PRICING, PODIUM_PLANS, JUSTCALL_MEDSPA, AMSPA_SOCIAL],
    services: ['ai-receptionist', 'lead-follow-up', 'database-reactivation'],
    industries: ['med-spas'],
    related: ['ai-receptionist-vs-answering-service', 'speed-to-lead', 'ads-get-clicks-but-no-bookings'],
  },
  {
    slug: 'ai-receptionist-for-hvac',
    title: 'AI receptionist and lead follow-up for HVAC companies: options and prices.',
    seoTitle: 'AI Receptionist for HVAC Companies: Options and 2026 Prices',
    desc: 'What HVAC companies pay for an AI receptionist and missed-call follow-up in 2026: AI answering services, field service add-ons and done-for-you agencies compared.',
    card: 'AI answering from $49 a month, Jobber\'s add-on, HVAC-specific services and done-for-you agencies, compared.',
    answer: 'An HVAC company can buy AI call answering three ways. Self-serve AI answering services publish prices from $49 to $500 a month, and Jobber sells its own receptionist as a $99 add-on. HVAC-specific services that triage emergencies and book into ServiceTitan, Jobber or Housecall Pro run $297 to $997 a month. A done-for-you agency also follows up quotes and runs the ads: Bookdzilla charges $1,000 a month plus a one-time setup fee of $300 to $400. Live answering services cost roughly $777 to $1,965 a month at 200 calls.',
    read: 6,
    toc: [['ways', 'Three ways to buy it'], ['prices', 'Options and prices'], ['check', 'What to check before you pay'], ['which', 'Which one fits your company'], ['fit', 'Where Bookdzilla fits']],
    body: `
<section id="ways">
<h2>Three ways to buy it.</h2>
<p>A homeowner with no cooling calls companies until one answers. The job is to pick up every call, including the ones that come in while the team is on a roof or after 6pm, sort emergencies from tune-ups, put the visit on the dispatch calendar and text back anyone who hung up. The money that is easiest to miss comes later: replacement quotes that get one visit and no second contact.</p>
<ul>
<li><b>AI answering services.</b> Self-serve phone answering, priced by minutes or callers. Cheapest to start.</li>
<li><b>Field service add-ons and HVAC services.</b> Receptionists inside or connected to Jobber, ServiceTitan or Housecall Pro, with emergency rules and booking on the dispatch board.</li>
<li><b>Done-for-you agencies.</b> A team that builds the answering, missed-call text back, quote follow-up and tune-up campaigns for you, usually on a CRM such as GoHighLevel, and also runs the ads.</li>
</ul>
</section>
<section id="prices">
<h2>Options and prices.</h2>
<div class="cmp-wrap"><table class="cmp">
<thead><tr><th scope="col">Option</th><th scope="col">Published price</th><th scope="col">Calls</th><th scope="col">What it covers</th></tr></thead>
<tbody>
<tr><th scope="row">Rosie<small>AI answering service</small></th><td>$49, $149 or $299 a month for 250, 1,000 or 2,000 minutes</td><td>Yes</td><td>Answers calls around the clock. Live and warm transfers to your team from the $149 plan.</td></tr>
<tr><th scope="row">Goodcall<small>AI answering service</small></th><td>$79, $129 or $299 a month, priced by unique callers rather than minutes</td><td>Yes</td><td>Answers calls, about 150, 750 or 3,000 a month by plan, with no charge for minutes.</td></tr>
<tr><th scope="row">Jobber Receptionist<small>Add-on for Jobber users</small></th><td>$99 a month for 100 conversations, then $0.79 each. Included on Jobber Plus.</td><td>Yes</td><td>Calls, texts and website chat. Books jobs into your Jobber schedule and creates follow-up tasks.</td></tr>
<tr><th scope="row">Otherworlds AI<small>HVAC AI answering service</small></th><td>$297, $497 or $997 a month. Setup waived on the first two, $899 on the third.</td><td>Yes</td><td>Emergency triage by your rules, booking into ServiceTitan, Jobber or Housecall Pro, and outbound reminders and follow-ups from $497.</td></tr>
<tr><th scope="row">Smith.ai<small>AI receptionist with live backup</small></th><td>Free for 25 calls, $150 a month for 75 calls, $500 for 300</td><td>Yes</td><td>Answers, qualifies and routes calls, and can transfer to live receptionists.</td></tr>
<tr><th scope="row">Avoca<small>AI front office for home services</small></th><td>Quote only</td><td>Yes</td><td>Call answering for larger home service teams.</td></tr>
<tr><th scope="row">Bookdzilla<small>Done-for-you agency</small></th><td>$1,000 a month plus $300 to $400 setup, no contract</td><td>Yes</td><td>Missed calls texted back in seconds, an AI receptionist that books onto the dispatch calendar, quote follow-up, tune-up campaigns, and Meta and Google ads traced to jobs.</td></tr>
</tbody>
</table></div>
<p>Prices are monthly in US dollars. Rosie, Goodcall, Jobber and Otherworlds AI come from their own pricing and help pages, checked November 26, 2026. Smith.ai is from eesel's November 4, 2026 check of its pricing page, and Avoca from Carly's October 2026 comparison. Confirm the current price before you buy. Bookdzilla wrote this guide and is one of the options in it.</p>
</section>
<section id="check">
<h2>What to check before you pay.</h2>
<ol>
<li><b>Emergency rules.</b> Decide what counts as an emergency, such as no heat in freezing weather, and who gets the transfer at 2am. Everything else should book the next open slot.</li>
<li><b>Booking onto the dispatch board.</b> Ask whether the visit lands in ServiceTitan, Housecall Pro or Jobber, or arrives as a message your dispatcher has to re-enter.</li>
<li><b>Peak-season load.</b> On the first heat wave, calls double. Check how many calls it can take at once and what a minute cap costs in July.</li>
<li><b>Service area and job types.</b> It should know your ZIP codes, the brands you service and the work you do not take, so it does not book a job you will cancel.</li>
<li><b>Missed calls and web leads.</b> Callers who hang up and forms filled in at night need a text within a minute, not only an answered phone.</li>
<li><b>Quote follow-up.</b> A replacement quote is the biggest ticket you write. Ask who follows it up, with what, and when it stops.</li>
<li><b>Your number stays yours.</b> If you cancel, your business number and call history should leave with you.</li>
</ol>
</section>
<section id="which">
<h2>Which one fits your company.</h2>
<ul>
<li><b>Small shop missing calls on jobs.</b> A $49 to $149 AI answering service with missed-call text back covers the basics.</li>
<li><b>Running on Jobber.</b> Try its receptionist first, because it books where your schedule already lives.</li>
<li><b>On ServiceTitan or Housecall Pro with dispatch rules.</b> Pick a service that writes the booking back and follows your emergency rules.</li>
<li><b>Calls are answered but quotes and ads do not turn into jobs.</b> You need someone who fixes the follow-up and the ads, not another phone line.</li>
</ul>
</section>
<section id="fit">
<h2>Where Bookdzilla fits.</h2>
<p>Bookdzilla is an AI marketing agency for high-ticket local businesses in the United States, including HVAC and home service companies. It builds missed-call text back, the <a href="/services/ai-receptionist/">AI receptionist</a>, quote follow-up and tune-up campaigns in GoHighLevel, booking straight into your field service software where it allows and handing off cleanly where it does not. It also runs the Meta and Google ads and traces each job to its campaign. It costs $1,000 a month plus a one-time setup fee of $300 to $400, month to month. See <a href="/pricing/">pricing</a> and <a href="/industries/hvac/">marketing for HVAC companies</a>.</p>
<p>If you only need the phone answered, an answering service from the table costs less. Start with a <a href="/free-leak-check/">free leak check</a> to see where jobs are being lost before you buy anything.</p>
</section>`,
    faqs: [
      ['How much does an AI receptionist cost for an HVAC company?', 'Published prices in 2026 run from $49 a month for basic AI answering to $997 a month for HVAC-specific services that book into dispatch software. Jobber\'s add-on is $99 a month for 100 conversations. Live answering services cost roughly $777 to $1,965 a month at 200 calls. Bookdzilla, which also follows up quotes and runs ads, is $1,000 a month plus a one-time setup fee of $300 to $400.'],
      ['Can an AI receptionist book into ServiceTitan or Housecall Pro?', 'Some can. Otherworlds AI lists ServiceTitan, Jobber and Housecall Pro, and Jobber\'s receptionist books inside Jobber. Many general tools only take a message or text a link, so your dispatcher re-enters the job.'],
      ['What happens with emergency calls at night?', 'You set the rules: which problems count as emergencies, who gets the transfer and what the after-hours fee is. Everything else is booked for the next open slot and confirmed by text.'],
    ],
    sources: [ROSIE_PRICING, GOODCALL_PRICING, JOBBER_RECEPTIONIST, OTHERWORLDS_PRICING, EESEL_DENTAL, CARLY_HVAC],
    services: ['ai-receptionist', 'lead-follow-up', 'database-reactivation'],
    industries: ['hvac'],
    related: ['missed-call-text-back', 'ai-receptionist-vs-answering-service', 'speed-to-lead'],
  },
  {
    slug: 'missed-call-text-back',
    title: 'What is missed-call text back?',
    seoTitle: 'Missed-Call Text Back: What It Is and How It Works',
    desc: 'Missed-call text back sends an automatic text within seconds to callers your business could not answer. How it works and what to write.',
    card: 'An automatic text within seconds to every caller you could not answer. How it works and what to write.',
    answer: 'Missed-call text back is an automatic text message sent within seconds to anyone whose call your business did not answer. It keeps the caller talking to you by text, so they book with you and do not call the next business on the list.',
    read: 4,
    toc: [['how', 'How it works'], ['who', 'Who needs it'], ['write', 'What the text should say'], ['next', 'What happens next'], ['setup', 'What it takes to set up']],
    body: `
<section id="how">
<h2>How it works.</h2>
<ol>
<li>A customer calls your business number.</li>
<li>Nobody can answer: the team is on a job, on another line or closed for the day.</li>
<li>Within seconds the caller gets a text from your number.</li>
<li>They reply by text, and the conversation carries on until an appointment is booked or someone calls them back.</li>
</ol>
<p>Your phone number stays the same. The text comes from a line connected to it, and every conversation is saved against the caller.</p>
</section>
<section id="who">
<h2>Who needs it.</h2>
<p>Any business where the phone rings while the people who could answer it are working:</p>
<ul>
<li><a href="/industries/roofing/">Roofers</a> and <a href="/industries/hvac/">HVAC companies</a>, where the caller needs help today and will call the next company on the list.</li>
<li><a href="/industries/dental-practices/">Dental practices</a> and <a href="/industries/med-spas/">med spas</a>, where the front desk is with a patient.</li>
<li><a href="/industries/wedding-venues/">Venues</a> and <a href="/industries/senior-living/">senior living communities</a>, where calls arrive during tours and after hours.</li>
</ul>
<p>A caller who reaches voicemail often hangs up without leaving a message. A text gives them an easy way to keep going.</p>
</section>
<section id="write">
<h2>What the text should say.</h2>
<p>Keep it short, name the business and ask one question:</p>
<blockquote><p>Hi, this is Ridgeline Roofing. Sorry we missed your call. How can we help?</p></blockquote>
<p>Avoid links, long greetings and anything that reads like a notice. The aim is a reply.</p>
</section>
<section id="next">
<h2>What happens next.</h2>
<p>The first text only opens the door. What follows decides whether it becomes a booking. A good setup answers the caller's question from your real prices and service area, offers two times, books the one they pick and passes the conversation to a person when they ask for one.</p>
<p>This is the same standard as any other inquiry: a useful answer within a minute. See <a href="/guides/speed-to-lead/">how fast you should respond to a new lead</a>.</p>
</section>
<section id="setup">
<h2>What it takes to set up.</h2>
<p>Missed-call text back runs on a CRM with texting, such as GoHighLevel, connected to your business line. Before it goes live you need a registered texting number, an approved message and a rule for who takes over the conversation.</p>
<p>Texting in the United States has consent and registration rules, so the wording and the opt-out need to be right from the start. Bookdzilla includes this in its <a href="/services/lead-follow-up/">speed to lead and follow-up service</a>.</p>
</section>`,
    faqs: [
      ['Does missed-call text back work with a landline?', 'In most cases, yes. The business number is connected or forwarded to a system that can detect the missed call and send the text.'],
      ['Will customers find an automatic text annoying?', 'Not when it is short, comes from the business they just called and asks how you can help. It reads as good service.'],
      ['What if the caller does not reply to the text?', 'Your team still sees the missed call and can ring back. The text simply gives the caller an easier way to continue.'],
    ],
    sources: [],
    services: ['lead-follow-up', 'ai-receptionist'],
    industries: ['roofing', 'hvac', 'dental-practices'],
    related: ['ai-receptionist-vs-answering-service', 'speed-to-lead', 'five-minute-leak-check'],
  },
  {
    slug: 'ai-receptionist-vs-answering-service',
    title: 'AI receptionist or answering service: which books more?',
    seoTitle: 'AI Receptionist vs Answering Service for Small Business',
    desc: 'An answering service takes a message. An AI receptionist answers the question and books the appointment during the call. How they differ and which to choose.',
    card: 'One takes a message, the other books the appointment during the call. How to choose.',
    answer: 'An answering service has a person take a message and pass it on. An AI receptionist answers the call itself, answers questions from your own prices and policies, and books the appointment onto your calendar during the call, at any hour and on several calls at once. For calls that should turn into bookings, the AI receptionist books more. For calls that need judgement or comfort, a person is still better, so the best setups send those calls to one.',
    read: 4,
    toc: [['what', 'What each one does'], ['ai', 'Where an AI receptionist wins'], ['person', 'Where a person wins'], ['check', 'What to check before you choose'], ['setup', 'What it takes to set up']],
    body: `
<section id="what">
<h2>What each one does.</h2>
<p><b>An answering service</b> forwards your calls to a call center. An operator answers in your business name, writes down who called and why, and sends you the message. You call back later.</p>
<p><b>An AI receptionist</b> is a voice assistant connected to your phone line, calendar and CRM. It answers the call, talks with the caller in plain conversation, answers their questions from information you approve, and books the appointment while they are still on the line. You get a summary and the recording.</p>
<p>The difference that matters is what the caller leaves with. After an answering service, they have a promise of a call back. After an AI receptionist, they have a time on your calendar.</p>
</section>
<section id="ai">
<h2>Where an AI receptionist wins.</h2>
<ul>
<li><b>It books.</b> Most answering services cannot see your calendar, so every call ends in a message. A booked caller has no reason to ring the next business.</li>
<li><b>Every hour and every call.</b> It answers at night, at weekends and when five people call at once after a storm.</li>
<li><b>Your real answers.</b> It quotes the prices, service area and policies you set, the same way every time.</li>
<li><b>Everything is recorded.</b> Each call is summarized and saved against the caller in your CRM, so nothing lives on a sticky note.</li>
</ul>
</section>
<section id="person">
<h2>Where a person wins.</h2>
<ul>
<li>A caller who is upset, grieving or confused, which is common in <a href="/industries/senior-living/">senior living</a> inquiries.</li>
<li>A question nobody planned for, where the right answer depends on judgement.</li>
<li>A complaint, or a caller who simply wants to talk to someone.</li>
</ul>
<p>That is why a good AI receptionist knows when to stop. It puts these calls through to your team, or books a callback, and sends the summary so nobody has to ask the caller to repeat themselves.</p>
</section>
<section id="check">
<h2>What to check before you choose.</h2>
<ol>
<li><b>Can it book?</b> Ask whether it reads and writes to your real calendar, or only takes messages.</li>
<li><b>Can it hand over?</b> Emergencies and requests for a person should reach your on-call phone in seconds.</li>
<li><b>Does it know your business?</b> It should answer from your own services, prices and policies, and you should approve the script.</li>
<li><b>Where do the calls go?</b> Every summary and recording should land in your CRM, not in a separate inbox.</li>
<li><b>Does it say what it is?</b> Callers should hear that they are speaking with an assistant for your business, and that the call may be recorded.</li>
</ol>
</section>
<section id="setup">
<h2>What it takes to set up.</h2>
<p>An AI receptionist runs on a phone system connected to your calendar and CRM, such as GoHighLevel. Setup means writing the script from your real services and prices, deciding which calls go to a person, testing it with real questions and choosing whether it answers every call or only the ones your team misses.</p>
<p>It works best alongside <a href="/guides/missed-call-text-back/">missed-call text back</a> and a <a href="/guides/speed-to-lead/">first reply within a minute</a> on forms, so every way a buyer reaches you gets the same fast answer. Bookdzilla sets this up as its <a href="/services/ai-receptionist/">AI receptionist service</a>.</p>
</section>`,
    faqs: [
      ['Will callers know they are talking to an AI?', 'They should. A good setup introduces itself as an assistant for your business, and anyone who asks for a person is put through or offered a callback.'],
      ['Does an AI receptionist replace my front desk?', 'No. It takes the calls your team cannot get to and the ones that come in after hours, so your staff can focus on the customers in front of them.'],
      ['Can I keep my current phone number?', 'Yes. Calls are forwarded from your existing number, so nothing changes for your customers.'],
    ],
    sources: [],
    services: ['ai-receptionist', 'lead-follow-up'],
    industries: ['hvac', 'roofing', 'dental-practices', 'senior-living'],
    related: ['missed-call-text-back', 'speed-to-lead', 'five-minute-leak-check'],
  },
  {
    slug: 'how-to-choose-an-ai-marketing-agency',
    title: 'How to choose an AI marketing agency.',
    seoTitle: 'How to Choose an AI Marketing Agency: 8 Questions to Ask',
    desc: 'Eight questions to ask before you hire an AI marketing agency, what a good answer sounds like, and the red flags that mean you should walk away.',
    card: 'Eight questions to ask before you hire, what good answers sound like, and the red flags.',
    answer: 'Choose an AI marketing agency the way you would choose any contractor: by what it will change in your bookings and how it will prove it. Ask which leak it will fix first, how it measures cost per booked appointment, who owns the accounts and data, and what happens when a customer wants a person. Walk away from anyone who guarantees a top spot in Google or ChatGPT, or a fixed number of leads.',
    read: 5,
    toc: [['leak', 'Start with the leak, not the tools'], ['ask', 'Eight questions to ask'], ['flags', 'Red flags'], ['cost', 'What you pay for'], ['fit', 'Where Bookdzilla fits']],
    body: `
<section id="leak">
<h2>Start with the leak, not the tools.</h2>
<p>Most local businesses that pay for ads do not have a traffic problem. They lose buyers between the click and the booking: an ad with no clear promise, a page that does not match it, a reply that takes hours, a missed call that goes to voicemail, no follow-up. A good agency looks at your own ads, pages and replies first and tells you which of these costs you the most. A weak one opens with a chatbot demo.</p>
<p>You can check most of this yourself before any sales call. The <a href="/guides/five-minute-leak-check/">five-minute leak check</a> shows how.</p>
</section>
<section id="ask">
<h2>Eight questions to ask.</h2>
<ol>
<li><b>What will you fix first, and why?</b> A good answer names one specific leak in your current path, found by looking at your ads, pages or replies. "We will add AI everywhere" is not an answer.</li>
<li><b>How will we know it worked?</b> Ask for booked appointments and <a href="/guides/cost-per-booked-appointment/">cost per booked appointment</a>, measured against your last 30 days. Clicks, impressions and engagement do not pay the bills.</li>
<li><b>Who owns the accounts and the data?</b> You should own the ad accounts, the phone number, the CRM, the calendar and every contact. The agency works inside them, so you can leave without starting over.</li>
<li><b>What does the AI do, and what does a person do?</b> Expect specifics: it answers first inquiries, books times and follows up, and it hands the conversation to your team the moment someone asks for a person.</li>
<li><b>What happens when it gets something wrong?</b> You should approve every script and message before launch, see every conversation, and set rules for what goes straight to a person.</li>
<li><b>Which tools will you use, and what will I pay for them?</b> A credible agency names its stack, for example GoHighLevel, Calendly, Meta Ads and Google Ads, and tells you which software fees are included and which you pay directly.</li>
<li><b>How soon is the first change live?</b> Fixes to replies and follow-up work on leads you already get, so they should go live in weeks, not quarters. Ask what will be live in the first 14 days.</li>
<li><b>What are the terms?</b> Look for a clear monthly price, no long lock-in before results, and an ad budget you pay straight to Meta or Google, never marked up through the agency.</li>
</ol>
</section>
<section id="flags">
<h2>Red flags.</h2>
<ul>
<li>A guarantee that you will rank first in Google or be recommended by ChatGPT. Nobody controls those answers. Google says its AI features have no special requirements beyond normal search: indexed pages, useful content and a good page experience.</li>
<li>A guaranteed number of leads, with no word about whether they book.</li>
<li>The agency keeps your ad account, phone number or contact list in its own name.</li>
<li>Reports full of clicks and impressions, and nothing about bookings or revenue.</li>
<li>A twelve-month contract before anything has been proven.</li>
<li>"AI-powered" everywhere, but nobody can tell you what it actually does on a call or a form.</li>
<li>No plan for the customer who wants to talk to a person.</li>
</ul>
</section>
<section id="cost">
<h2>What you pay for.</h2>
<p>Most agencies charge a monthly fee, and some add a setup fee. On top of that you may pay for software, such as a CRM, texting and a calendar, and you always pay the ad budget itself. Ask for the full monthly number, software included, before you compare prices. A cheaper fee with a large software bill and no booking numbers is not cheaper.</p>
<p>Then ask how you can stop. Month-to-month terms tell you the agency expects to earn its fee every month.</p>
</section>
<section id="fit">
<h2>Where Bookdzilla fits.</h2>
<p>Bookdzilla is an AI marketing agency for high-ticket local businesses. It starts with a <a href="/free-leak-check/">free leak check</a>: a 2-minute video of where your ads, pages and replies lose people. If you want the fixes built, it is $1,000 a month plus a one-time setup fee of $300 to $400, month to month, with your ad budget paid straight to Meta or Google and every account in your name. See <a href="/pricing/">pricing</a>. Results arrive every Monday as five numbers: leads, booked appointments, cost per booked appointment, response time and revenue.</p>
</section>`,
    faqs: [
      ['Do I need an agency, or can I just buy the software?', 'If someone on your team has time to set it up, write the scripts, connect your phone and calendar and watch the numbers, software alone can work. Many owners buy the tool and never finish the setup. An agency is worth paying when it sets up, runs and measures the system for you, and ties the result to bookings.'],
      ['Can an agency guarantee I will show up in ChatGPT or Google?', 'No. Nobody controls what search engines or AI assistants show. A good agency improves what they can read about you, such as clear pages, consistent business details and real reviews, and measures the change over time.'],
      ['How long before I see results?', 'Fixes to replies and follow-up act on the inquiries you already get, so booked appointments can change within weeks. Ads take a few weeks to tune. Search and AI visibility build over months.'],
    ],
    sources: [GOOGLE_AI],
    services: ['lead-follow-up', 'ai-receptionist', 'tracking-and-reporting'],
    industries: ['wedding-venues', 'dental-practices', 'hvac', 'med-spas'],
    related: ['ai-marketing-agency-vs-traditional-agency', 'five-minute-leak-check', 'cost-per-booked-appointment'],
  },
  {
    slug: 'ai-marketing-agency-vs-traditional-agency',
    title: 'AI marketing agency or traditional agency: which do you need?',
    seoTitle: 'AI Marketing Agency vs Traditional Agency: Key Differences',
    desc: 'A traditional agency brings you leads. An AI marketing agency also builds the systems that answer, book and follow up. How they differ and which you need.',
    card: 'One brings you leads. The other also answers, books and follows up with them.',
    answer: 'A traditional marketing agency mostly brings you attention: ads, content and social posts, reported in clicks and impressions. An AI marketing agency also builds what happens next: replies within a minute, booking, follow-up and reminders that run day and night, reported in booked appointments. If you already get inquiries but lose them to slow replies, the second kind changes revenue faster. If nobody knows your business yet, ads come first.',
    read: 4,
    toc: [['table', 'Side by side'], ['traditional', 'When a traditional agency is right'], ['ai', 'When an AI marketing agency is right'], ['both', 'Using both'], ['fit', 'Where Bookdzilla fits']],
    body: `
<section id="table">
<h2>Side by side.</h2>
<div class="cmp-wrap"><table class="cmp">
<thead><tr><th scope="col"><span class="sr-only">Question</span></th><th scope="col">Traditional agency</th><th scope="col">AI marketing agency</th></tr></thead>
<tbody>
<tr><th scope="row">Main job</th><td>Bring attention: ads, content, social posts and design</td><td>Turn attention into bookings: ads and pages, plus the reply, booking and follow-up</td></tr>
<tr><th scope="row">After someone inquires</th><td>Usually your team's job</td><td>A reply within a minute, two times to book, follow-up until they book or say no</td></tr>
<tr><th scope="row">Missed calls and after hours</th><td>Voicemail, unless you add a service</td><td>Texted back in seconds or answered by an AI receptionist</td></tr>
<tr><th scope="row">How results are reported</th><td>Clicks, impressions, reach and cost per lead</td><td>Booked appointments, cost per booked appointment, response time and revenue</td></tr>
<tr><th scope="row">What your team does</th><td>Answers every lead fast enough to win it</td><td>Approves the scripts and takes the booked appointments and hand-offs</td></tr>
<tr><th scope="row">Typical tools</th><td>Ad platforms, design and social scheduling tools</td><td>Ad platforms plus a CRM with texting and booking, such as GoHighLevel, and a calendar</td></tr>
<tr><th scope="row">Best when</th><td>Nobody knows you yet, or your brand needs building</td><td>You already get inquiries and lose too many before the booking</td></tr>
</tbody>
</table></div>
<p>The labels blur in practice. Plenty of traditional agencies use AI to write ads, and some "AI agencies" only sell a chatbot. What matters is whether the agency is responsible for the step after the click.</p>
</section>
<section id="traditional">
<h2>When a traditional agency is the right call.</h2>
<ul>
<li>You are new to an area and people need to learn your name.</li>
<li>Your brand, photos or website need rebuilding before any ad can work.</li>
<li>Your team already answers every inquiry within minutes and follows up well.</li>
</ul>
</section>
<section id="ai">
<h2>When an AI marketing agency is the right call.</h2>
<ul>
<li>Inquiries arrive in the evening and at weekends and wait until the next working day.</li>
<li>Calls go to voicemail while your team is with customers.</li>
<li>You pay for ads but cannot say which ones produced booked jobs.</li>
<li>You have years of past inquiries and customers that nobody contacts.</li>
</ul>
<p>Speed is the main reason. In a Harvard Business Review study of 1.25 million sales leads, firms that tried to reach a lead within an hour were nearly seven times as likely to qualify it as firms that waited even one hour longer. See <a href="/guides/speed-to-lead/">how fast you should respond to a new lead</a>.</p>
</section>
<section id="both">
<h2>Using both.</h2>
<p>Many businesses keep the ad agency they have and add the system that answers, books and follows up. That is often the cheapest way to get more from the same ad spend, because it works on leads you already pay for. If someone else runs your ads well, a good AI marketing agency leaves them alone and fixes what happens after the click.</p>
</section>
<section id="fit">
<h2>Where Bookdzilla fits.</h2>
<p>Bookdzilla is an AI marketing agency for high-ticket local businesses in the United States, such as wedding venues, senior living communities, dental practices, med spas and home service companies. It runs ads and landing pages where they are the leak, and builds the reply, booking and follow-up with GoHighLevel, Claude and Calendly. Every engagement starts with a <a href="/free-leak-check/">free leak check</a>. Read <a href="/guides/how-to-choose-an-ai-marketing-agency/">how to choose an AI marketing agency</a> before you hire anyone, including us.</p>
</section>`,
    faqs: [
      ['Is an AI marketing agency more expensive than a traditional one?', 'Not necessarily. Compare the full monthly cost, software included, against what each one is measured on. An agency judged on booked appointments is easier to evaluate than one judged on clicks.'],
      ['Will AI replace my front desk?', 'No. It takes the inquiries your team cannot get to in time, after hours and in busy periods, and passes anyone who wants a person to your team with the conversation attached.'],
      ['Can my current agency add this?', 'Sometimes. Ask who will answer new leads within a minute, who writes and approves the follow-up, and how booked appointments will be reported. If the answers are vague, the work is probably not being done.'],
    ],
    sources: [HBR],
    services: ['lead-follow-up', 'paid-ads', 'ai-receptionist'],
    industries: ['senior-living', 'pool-builders', 'roofing', 'private-schools'],
    related: ['how-to-choose-an-ai-marketing-agency', 'speed-to-lead', 'ai-receptionist-vs-answering-service'],
  },
  {
    slug: 'five-minute-leak-check',
    title: 'Audit your own lead funnel in five minutes.',
    seoTitle: 'How to Audit Your Own Lead Funnel in Five Minutes',
    desc: 'A five-minute audit any owner can run: find your live ads, tap through on a phone, send your own business an inquiry and time the reply.',
    card: 'Find your live ads, tap through on a phone, send yourself an inquiry and time the reply.',
    answer: 'To audit your own lead funnel, find your live ads in the Meta Ad Library and the Google Ads Transparency Center, tap through each one on a phone, then send an inquiry through your own form in the evening and time the first real reply. Any broken promise, hidden proof or reply slower than an hour is a leak.',
    read: 4,
    toc: [['ads', 'Find your live ads'], ['tap', 'Tap through on a phone'], ['inquire', 'Send yourself an inquiry'], ['call', 'Call your own number'], ['read', 'Read the results']],
    body: `
<section id="ads">
<h2>Find your live ads.</h2>
<p>Two free public tools show the ads any business is running:</p>
<ul>
<li>The <a href="https://www.facebook.com/ads/library/" rel="noopener" target="_blank">Meta Ad Library</a> lists active ads on Facebook and Instagram. Search your business name.</li>
<li>The <a href="https://adstransparency.google.com/" rel="noopener" target="_blank">Google Ads Transparency Center</a> does the same for Google.</li>
</ul>
<p>For each ad, write down the one thing it promises. If you cannot say it in a sentence, neither can the person scrolling past it.</p>
</section>
<section id="tap">
<h2>Tap through on a phone.</h2>
<p>Most ad clicks happen on a phone, so use one. Open each ad and check the page it leads to:</p>
<ol>
<li>Does the first line repeat the promise of the ad?</li>
<li>Are your rating and review count on the first screen?</li>
<li>Is there a starting price or a range anywhere?</li>
<li>How many scrolls does it take to reach the form or the booking button?</li>
<li>Did the page load in under three seconds?</li>
</ol>
</section>
<section id="inquire">
<h2>Send yourself an inquiry.</h2>
<p>Pick a weekday evening, when real buyers are browsing. Use a personal email your team will not recognize, and ask what a buyer would ask: a price and a time.</p>
<p>Then write down two things. When did the first real reply arrive? Did it answer the question and offer a time? An automatic "we got your message" does not count.</p>
</section>
<section id="call">
<h2>Call your own number.</h2>
<p>Call the business line from a personal phone during the busiest hour of the day and let it ring. Note what a caller hears and what happens afterward. If the answer is voicemail and silence, see <a href="/guides/missed-call-text-back/">missed-call text back</a>.</p>
</section>
<section id="read">
<h2>Read the results.</h2>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>What you found</th><th>Where the leak is</th></tr></thead>
<tbody>
<tr><td>You could not state the promise of the ad</td><td><a href="/services/paid-ads/">The ad</a></td></tr>
<tr><td>The page did not repeat it, or hid your reviews</td><td><a href="/services/landing-pages/">The page</a></td></tr>
<tr><td>The reply took more than an hour or answered nothing</td><td><a href="/services/lead-follow-up/">The reply</a></td></tr>
<tr><td>No second message after you went quiet</td><td><a href="/services/lead-follow-up/">The follow-up</a></td></tr>
<tr><td>You could not say which ad produced last month's bookings</td><td><a href="/services/tracking-and-reporting/">The numbers</a></td></tr>
</tbody></table></div>
<p>Fix the leak closest to the booking first. It pays off on the leads you already have. The reasoning is in <a href="/guides/ads-get-clicks-but-no-bookings/">why your ads get clicks but no bookings</a>.</p>
<p>If you would like a second pair of eyes, Bookdzilla runs this same audit for free and sends the findings as a 2-minute video. <a href="/free-leak-check/">Request a free leak check</a>.</p>
</section>`,
    faqs: [
      ['How often should I audit my lead funnel?', 'Once a quarter, and whenever you launch a new ad or change your website. Staff changes and new tools often break a path that used to work.'],
      ['Can I see my competitors\' ads the same way?', 'Yes. The Meta Ad Library and the Google Ads Transparency Center are public, so you can look up any business and tap through its ads.'],
      ['What if I do not run ads?', 'Skip the first step and test the rest. The page, the reply and the phone matter for every visitor, whether they came from an ad, a search or a referral.'],
    ],
    sources: [AD_LIB, ADS_TC],
    services: ['landing-pages', 'lead-follow-up', 'tracking-and-reporting'],
    industries: ['pool-builders', 'wedding-venues', 'private-schools'],
    related: ['ads-get-clicks-but-no-bookings', 'speed-to-lead', 'cost-per-booked-appointment'],
  },
];

export const guide = (slug: string) => GUIDES.find((g) => g.slug === slug)!;
