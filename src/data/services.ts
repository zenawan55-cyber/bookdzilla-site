export interface Service {
  slug: string;
  name: string;
  where: string; // the place in the path, used on the home rows
  rowLeak: string;
  rowFix: string;
  title: string;
  desc: string;
  h1: string;
  lead: string;
  short: string; // one line for cards
  leakHead: string;
  leaks: string[];
  doesHead: string;
  does: [string, string][];
  kv: [string, string][];
  tools: string[];
  faqs: [string, string][];
  industries: string[];
  guides: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'paid-ads',
    name: 'Meta and Google ads',
    where: 'The ad',
    rowLeak: 'A vague promise, or creative that has gone stale and costs more every week.',
    rowFix: 'New angles and creative, one clear offer per ad and budget moved to the ads that book.',
    title: 'Meta and Google Ads for Local Businesses',
    desc: 'Bookdzilla writes and runs Meta ads and manages Google Ads for high-ticket local businesses. One promise per ad, judged by cost per booked appointment.',
    h1: 'Ads that make one clear promise.',
    lead: 'Bookdzilla writes, designs and runs Meta ads, and manages or tidies Google Ads, for high-ticket local businesses. Every ad makes one promise, opens a page built for it and is judged by what a booked appointment costs, not by clicks.',
    short: 'Meta ads written, designed and run for you, and Google Ads cleaned up. Judged by cost per booking.',
    leakHead: 'Signs your ads are the leak.',
    leaks: [
      'The ad lists everything you do, so nobody has a reason to click today.',
      'The same photo and headline have run for months and each lead costs more than it did.',
      'Every ad sends people to your homepage.',
      'Nobody can say which ad produced a booked job last month.',
    ],
    doesHead: 'What we do with your ads.',
    does: [
      ['One offer per ad', 'A free design visit, a tour, a consult or a price guide. One promise a buyer can say yes to.'],
      ['Fresh creative every month', 'New angles, photos and short videos made from your real work, so the ad never goes stale.'],
      ['Tight local targeting', 'Your service area and your buyer, not the whole state.'],
      ['Budget follows bookings', 'Each week, spend moves toward the ads that produced booked appointments.'],
      ['Google Ads cleaned up', 'Wasted search terms cut, call and form tracking fixed, and each ad group pointed at its own page.'],
    ],
    kv: [
      ['Who it is for', 'Businesses already running Meta or Google ads, and businesses with strong reviews that are ready to fund an ad budget.'],
      ['Ad budget', 'Paid by you, directly to Meta or Google. It never passes through us.'],
      ['Judged by', 'Cost per booked appointment and revenue from booked jobs.'],
      ['You own', 'The ad accounts, the pixel, the audiences and every creative.'],
    ],
    tools: ['Meta Ads', 'Google Ads', 'Claude'],
    faqs: [
      ['Do I need to be running ads already?', 'No. If you have good reviews and a real website, we can start campaigns from zero. You fund the ad budget and it goes straight to Meta or Google.'],
      ['Is Meta or Google better for a local business?', 'They do different jobs. Google Ads reaches people already searching for what you sell. Meta ads reach people before they search, with a visual offer. Most high-ticket local businesses do best with both: Google to catch demand, Meta to create it.'],
      ['Someone already manages our Google Ads. Do we have to switch?', 'No. If the account is run well we leave it alone and fix what happens after the click: the page, the reply and the follow-up.'],
      ['How much should we spend on ads?', 'It depends on what a booked job is worth and how many you want each month. We size the budget after the free leak check, starting small and raising it only when bookings follow.'],
    ],
    industries: ['wedding-venues', 'med-spas', 'pool-builders', 'dental-practices'],
    guides: ['ads-get-clicks-but-no-bookings', 'cost-per-booked-appointment'],
  },
  {
    slug: 'landing-pages',
    name: 'Landing pages',
    where: 'The page',
    rowLeak: 'It does not say what the ad said, hides your reviews or makes booking hard.',
    rowFix: 'A page for each ad that repeats the promise, shows the proof and books in one tap.',
    title: 'Landing Pages That Turn Ad Clicks Into Bookings',
    desc: 'Bookdzilla builds a landing page for each ad: the same promise, your reviews on the first screen, a realistic price and booking one tap away.',
    h1: 'A page for every ad, built to book.',
    lead: 'A landing page is a single page built for one ad and one action. Bookdzilla builds pages that repeat the promise of the ad, show your reviews on the first screen and put booking one tap away, so more of the clicks you pay for become inquiries.',
    short: 'One page per ad: the same promise, your reviews up top and booking one tap away.',
    leakHead: 'Signs your page is the leak.',
    leaks: [
      'The ad offers a free design visit and the page it opens never mentions it.',
      'You have hundreds of five-star reviews on Google and none on the page.',
      'The form sits three screens down on a phone.',
      'There is no starting price, so people leave to find one somewhere else.',
      'The page takes several seconds to load on mobile data.',
    ],
    doesHead: 'What goes on every page.',
    does: [
      ['The promise, repeated', 'The headline says what the ad said, so the visitor knows they are in the right place.'],
      ['Proof on the first screen', 'Your Google rating, the review count and one short review beside the button.'],
      ['A realistic price', 'A starting price or a range you are comfortable sharing. It filters and reassures.'],
      ['One action', 'A short form or two open times, visible without scrolling on a phone.'],
      ['A second offer', 'A price guide or an open-dates check for people who are not ready to book today.'],
    ],
    kv: [
      ['Who it is for', 'Any business sending paid traffic to its homepage or to a page that was not built for the ad.'],
      ['Your website', 'Stays as it is. Landing pages sit alongside it on your own domain.'],
      ['Speed', 'Built on Cloudflare, pages load in about a second on a phone.'],
      ['You own', 'Every page, the domain and the copy.'],
    ],
    tools: ['Cloudflare', 'Claude', 'Calendly'],
    faqs: [
      ['What is the difference between a landing page and a homepage?', 'A homepage serves every visitor and links everywhere. A landing page serves one ad and asks for one action. Because it repeats the promise of the ad and removes other choices, more visitors take that action.'],
      ['Do we have to rebuild our website?', 'No. Your site stays. We add landing pages next to it and connect them to your form, phone and calendar.'],
      ['We do not publish prices. Is that a problem?', 'No. A starting price or a range such as "most projects land between" is enough. Full pricing can wait for the visit or the call.'],
      ['How many pages do we need?', 'One for each distinct promise you advertise. Most businesses start with two or three.'],
    ],
    industries: ['pool-builders', 'med-spas', 'wedding-venues', 'private-schools'],
    guides: ['ads-get-clicks-but-no-bookings', 'five-minute-leak-check'],
  },
  {
    slug: 'lead-follow-up',
    name: 'Speed to lead and follow-up',
    where: 'The inquiry',
    rowLeak: 'The reply is slow or never comes. Buyers ask two or three businesses and book whoever answers first.',
    rowFix: 'A real answer within a minute, then follow-up that fits how your buyers decide.',
    title: 'Speed to Lead and Follow-Up for Local Businesses',
    desc: 'Every form, call and ad lead answered within a minute with a real answer and two times to book, then followed up until they book. Set up and run by Bookdzilla.',
    h1: 'Every inquiry answered within a minute.',
    lead: 'Speed to lead is how fast a business replies to a new inquiry. Bookdzilla sets up a first reply that goes out within a minute, by text or email, with a real answer and two times to book. Then it follows up until the person books or says no.',
    short: 'A real first reply within a minute, missed calls texted back and follow-up until they book.',
    leakHead: 'Signs the reply is the leak.',
    leaks: [
      'Inquiries sent in the evening or on a weekend wait until the next working day.',
      'The first reply is "thanks for your interest, please call us" with no answer in it.',
      'A missed call gets a voicemail and nothing else.',
      'After one unanswered call back, nobody tries again.',
      'Booked appointments do not show up, and nobody reschedules them.',
    ],
    doesHead: 'What we set up.',
    does: [
      ['A first reply within a minute', 'Written from your real prices, service area, policies and calendar, in your tone, and approved by you before it goes live.'],
      ['Missed-call text back', 'A call you cannot take gets a text in seconds, so the caller keeps talking to you and not the next business.'],
      ['Follow-up that stops when they reply', 'Short, personal messages over the next two weeks by text and email.'],
      ['Reminders and rescheduling', 'Every booking gets reminders and a link to move it, so fewer people fail to show.'],
      ['A clean hand-off', 'Anyone who asks for a person gets you or your team, with the whole conversation attached.'],
    ],
    kv: [
      ['Who it is for', 'Any business where inquiries arrive faster than the team can answer them, or after hours.'],
      ['Works with', 'Website forms, phone calls, Meta and Google lead forms, listing sites and direct messages.'],
      ['Your tools', 'Kept. We connect to the phone, calendar and CRM you already use.'],
      ['You approve', 'Every message template before anything is sent.'],
    ],
    tools: ['GoHighLevel', 'Claude', 'Calendly'],
    faqs: [
      ['How fast should a business respond to a new lead?', 'Within five minutes, and within one minute if you can. A Harvard Business Review study found that firms which tried to reach a lead within an hour were nearly seven times as likely to qualify it as firms that waited even an hour longer.'],
      ['What happens to inquiries that arrive at night?', 'They get the same reply, within a minute, with two times to book. That is when most competitors are closed, so it is when a fast answer wins the most.'],
      ['Will the replies sound like us?', 'Yes. They are written from your own prices, policies and past messages, and you approve the wording before launch.'],
      ['Do we need to change our CRM or phone system?', 'No. We set everything up and connect it to what you already use.'],
    ],
    industries: ['wedding-venues', 'senior-living', 'private-schools', 'dental-practices', 'roofing', 'hvac'],
    guides: ['speed-to-lead', 'missed-call-text-back', 'wedding-venue-inquiry-response'],
  },
  {
    slug: 'database-reactivation',
    name: 'Database reactivation',
    where: 'The quiet list',
    rowLeak: 'Years of past inquiries and customers sit in a spreadsheet nobody contacts.',
    rowFix: 'The list cleaned, segmented and sent an offer that books straight onto your calendar.',
    title: 'Database Reactivation: Book Jobs From Old Leads',
    desc: 'Bookdzilla cleans and segments your list of past inquiries and customers, sends a relevant offer by text and email, and books the replies onto your calendar.',
    h1: 'Revenue from leads you already paid for.',
    lead: 'Database reactivation is a campaign that contacts your past inquiries and customers with a relevant offer and books the ones who are ready. Bookdzilla cleans and segments the list, writes the offer and books the replies straight onto your calendar.',
    short: 'Past inquiries and customers contacted with a relevant offer and booked onto your calendar.',
    leakHead: 'Signs you are sitting on a quiet list.',
    leaks: [
      'Quotes and treatment plans that were sent and never followed up.',
      'Past customers who are due for a service and have not heard from you.',
      'People who inquired last season and went quiet.',
      'A CRM or spreadsheet with thousands of contacts and no campaign in the last year.',
    ],
    doesHead: 'How a reactivation campaign runs.',
    does: [
      ['Clean the list', 'Duplicates, dead numbers and bad emails removed, missing details filled in.'],
      ['Segment it', 'By last service, last inquiry and how long ago, so each person gets a message that fits.'],
      ['Write the offer', 'A reason to reply now: a tune-up, an open date, a seasonal price or a simple check-in.'],
      ['Send and answer', 'Short texts and emails, with every reply answered and booked.'],
      ['Respect the no', 'Every opt-out is honored at once and stays honored.'],
    ],
    kv: [
      ['Who it is for', 'Businesses with at least a few hundred past inquiries or customers on file.'],
      ['List format', 'A CRM export, a spreadsheet or your booking software. We work from what you have.'],
      ['Consent', 'We message only people who gave you their details, and we review how the list was collected before anything is sent.'],
      ['Result is measured in', 'Booked appointments and revenue, reported on the Monday report.'],
    ],
    tools: ['Clay', 'GoHighLevel', 'Claude'],
    faqs: [
      ['What is database reactivation?', 'It is a campaign to past inquiries and customers who already know your business. Because you paid to acquire them once, any booking that comes back costs far less than a new lead.'],
      ['How old can the leads be?', 'Leads from the last two or three years respond best, but older customers often come back for repeat services such as tune-ups, maintenance or refresh treatments.'],
      ['Are we allowed to text old leads?', 'Texting rules in the United States depend on the consent each person gave. We review how the list was collected, message only the people you are permitted to contact and honor every opt-out.'],
      ['How big does the list need to be?', 'A spreadsheet of a few hundred names is enough to run a first campaign. Larger lists are split into segments and sent in stages.'],
    ],
    industries: ['hvac', 'med-spas', 'dental-practices', 'senior-living'],
    guides: ['cost-per-booked-appointment', 'speed-to-lead'],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO and Google Business Profile',
    where: 'The search',
    rowLeak: 'Buyers searching nearby find three competitors on the map before they find you.',
    rowFix: 'A tuned Google Business Profile, steady reviews and pages that answer what buyers ask.',
    title: 'Local SEO and Google Business Profile Management',
    desc: 'Bookdzilla tunes your Google Business Profile, keeps reviews coming in and builds fast pages that answer what local buyers search for, in Google and in AI answers.',
    h1: 'Be the first name they find nearby.',
    lead: 'Local SEO is the work that makes a business appear when someone nearby searches for what it sells, in Google Search, Google Maps and AI answers. Bookdzilla tunes your Google Business Profile, keeps reviews coming in and builds the pages buyers are searching for.',
    short: 'Your Google Business Profile tuned, reviews kept flowing and pages built for local searches.',
    leakHead: 'Signs search is the leak.',
    leaks: [
      'You are missing from the map results for your main service in your own city.',
      'Your Google Business Profile has old photos, wrong hours or no services listed.',
      'Happy customers are never asked for a review.',
      'Your website has one page for everything you do.',
      'AI assistants name your competitors when asked who to call.',
    ],
    doesHead: 'What we work on.',
    does: [
      ['Google Business Profile', 'Categories, services, service area, photos and weekly posts kept accurate and current.'],
      ['Reviews', 'A request sent after every finished job, and a reply to every review.'],
      ['Service and area pages', 'A clear page for each service and each area you cover, written to answer real questions.'],
      ['A fast, readable site', 'Quick to load, easy for Google to read and marked up so search engines understand it.'],
      ['AI answers', 'Plain answers, consistent business details and structured data, so assistants can find and quote you.'],
    ],
    kv: [
      ['Who it is for', 'Businesses that depend on local searches and want leads that do not rely on ad spend alone.'],
      ['Timeline', 'Local SEO builds over months. Ads bring leads this week, and search lowers what each lead costs over time.'],
      ['Your website', 'Improved where it leaks. Rebuilt only if it has to be.'],
      ['You own', 'The profile, the reviews, the site and the content.'],
    ],
    tools: ['Google Business Profile', 'Cloudflare', 'Claude'],
    faqs: [
      ['How long does local SEO take to work?', 'Expect months, not days. Profile fixes and new reviews can lift map visibility within weeks, while new pages usually take a few months to rank. That is why we pair it with ads.'],
      ['What is a Google Business Profile?', 'It is the free listing that shows your business in Google Maps and in the local results box, with your reviews, hours, photos and services. For most local searches it is seen before your website.'],
      ['Can AI assistants like ChatGPT recommend my business?', 'Yes. Assistants draw on your website, your Google profile, your reviews and mentions elsewhere on the web. Clear answers and consistent details make you easier to find and quote.'],
      ['Do you rebuild our website?', 'Only if the site itself is the leak. Often a few new pages and a faster load are enough.'],
    ],
    industries: ['roofing', 'hvac', 'dental-practices', 'senior-living'],
    guides: ['five-minute-leak-check', 'ads-get-clicks-but-no-bookings'],
  },
  {
    slug: 'tracking-and-reporting',
    name: 'Lead tracking and the Monday report',
    where: 'The numbers',
    rowLeak: 'Nobody can say which ads became booked jobs, so budget keeps going to the ones that do not.',
    rowFix: 'Every lead tracked to a booking, and five numbers sent to you every Monday.',
    title: 'Lead Tracking and Reporting for Local Businesses',
    desc: 'Bookdzilla tracks every lead from the ad to the booked appointment and sends five numbers every Monday: leads, bookings, cost per booking, response time and revenue.',
    h1: 'Know which ads became booked jobs.',
    lead: 'Lead tracking connects every inquiry to the ad, page or search that produced it and follows it through to a booked appointment. Bookdzilla sets up the tracking and sends you five numbers every Monday: leads, bookings, cost per booking, response time and revenue.',
    short: 'Every lead traced from ad to booking, and five numbers in your inbox every Monday.',
    leakHead: 'Signs the numbers are the leak.',
    leaks: [
      'Your reports show clicks and impressions, and nothing about bookings.',
      'Phone calls from ads are not tracked at all.',
      'You cannot name your cost per booked appointment.',
      'Nobody knows how long a new lead waits for a first reply.',
    ],
    doesHead: 'What we put in place.',
    does: [
      ['A baseline first', 'Before anything changes, we write down your last 30 days of leads, bookings and response time.'],
      ['A source on every lead', 'Forms, calls and ad leads each carry the ad or search that produced them.'],
      ['Bookings and revenue', 'Each lead is followed to the calendar and to the job it became.'],
      ['The Monday report', 'Five numbers, one change we made and the next thing we will test. No login needed.'],
    ],
    kv: [
      ['Who it is for', 'Any owner who pays for marketing and wants to see what it books.'],
      ['The five numbers', 'Leads, booked appointments, cost per booked appointment, response time and revenue from booked jobs.'],
      ['Where it arrives', 'In your email every Monday morning.'],
      ['You own', 'The tracking, the data and every report.'],
    ],
    tools: ['GoHighLevel', 'Google Ads', 'Meta Ads'],
    faqs: [
      ['What is cost per booked appointment?', 'It is ad spend divided by the number of appointments booked from that spend. If $640 of ads produced 9 booked tours, each booked tour cost about $71. It is the number to judge every ad by.'],
      ['Why not just track cost per lead?', 'Because cheap leads that never book are not cheap. Cost per lead can fall while bookings stay flat. Cost per booked appointment only improves when real appointments do.'],
      ['Do I have to log in to a dashboard?', 'No. The report is a short email. A dashboard is there if you want the detail.'],
      ['What if our bookings live in a spreadsheet?', 'That works. We connect to what you use, or record bookings for you from the calendar.'],
    ],
    industries: ['wedding-venues', 'pool-builders', 'private-schools', 'senior-living'],
    guides: ['cost-per-booked-appointment', 'five-minute-leak-check'],
  },
];

export const service = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
