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
const KNOT: [string, string] = ['The Knot, average cost of a wedding venue (2026 Real Weddings Study, weddings held in 2025)', 'https://www.theknot.com/content/average-cost-reception-venue'];

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
    services: ['lead-follow-up'],
    industries: ['roofing', 'hvac', 'dental-practices'],
    related: ['speed-to-lead', 'five-minute-leak-check', 'ads-get-clicks-but-no-bookings'],
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
