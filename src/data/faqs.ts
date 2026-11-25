export type QA = [string, string];

// The six questions shown on the home page.
export const HOME_FAQS: QA[] = [
  ['How much does it cost?', '$1,000 a month, plus a one-time setup fee of $300 to $400 depending on how much we connect. Your ad budget stays separate and goes straight to Meta or Google.'],
  ['Is there a contract?', 'No. It is month to month.'],
  ['Do I need new software or to change how my team works?', 'No. We set everything up and connect it to the phone, calendar and tools you already use.'],
  ['What about my old leads?', 'We bring them back. Past inquiries and customers get a reactivation campaign, so revenue comes from people you have already paid for.'],
  ['Who owns everything?', 'You do: the ad accounts, the pages and every contact, even if you stop.'],
  ['How long until it is live?', 'The leak check video arrives within a day. If you go ahead, the fixes are live in about 14 days.'],
];

export const FAQ_GROUPS: { id: string; head: string; items: QA[] }[] = [
  {
    id: 'what',
    head: 'What Bookdzilla does',
    items: [
      ['What is Bookdzilla?', 'Bookdzilla is an AI marketing agency for high-ticket local businesses in the United States. It finds where ads, pages and follow-up lose buyers between the click and the booking, then fixes it.'],
      ['What kinds of businesses do you work with?', 'Businesses where one booking is worth thousands of dollars: wedding and event venues, senior living communities, private schools, dental implant and cosmetic practices, med spas, pool builders, roofers and HVAC companies.'],
      ['What is a leak check?', 'A short audit of your path from ad to booking. We look at your live ads, the pages they open on a phone and how fast a new inquiry gets a real reply, then send the findings as a 2-minute video.'],
      ['Do I need to be running ads already?', 'No. Many clients do, and we make that spend book more. If you have strong reviews and a real website, we can also start campaigns from zero. You fund the ad budget.'],
    ],
  },
  {
    id: 'price',
    head: 'Price and terms',
    items: [
      HOME_FAQS[0],
      HOME_FAQS[1],
      ['Is the ad budget included in your fee?', 'No. Ad budget is paid by you directly to Meta or Google, so you always see exactly what was spent. We never mark it up or take a percentage of it.'],
      ['Is the leak check really free?', 'Yes. There is no call required and no obligation. If the video is useful and you want the fixes built, we talk about price then.'],
    ],
  },
  {
    id: 'start',
    head: 'Getting started',
    items: [
      HOME_FAQS[5],
      ['What do you need from us?', 'Your website for the leak check. If you go ahead: access to your ad accounts, your prices or price ranges, your calendar and about an hour of your time for approvals.'],
      ['Do we approve things before they go live?', 'Yes. Every ad, page and message template is approved by you first.'],
      ['What happens before you change anything?', 'We write down your last 30 days of leads, bookings and response time, so we both see what changes.'],
    ],
  },
  {
    id: 'how',
    head: 'How it works day to day',
    items: [
      HOME_FAQS[2],
      HOME_FAQS[3],
      HOME_FAQS[4],
      ['How will I know it is working?', 'Every Monday you get five numbers by email: leads, booked appointments, cost per booked appointment, response time and revenue from booked jobs. Plus one change we made and the next thing we will test.'],
      ['We already have an agency or a marketing person.', 'That is fine. Where something is run well we leave it alone and fix the parts of the path nobody owns, usually the reply, the follow-up and the tracking.'],
      ['What happens when a customer wants to talk to a person?', 'They get you or your team right away, with the whole conversation attached.'],
    ],
  },
];
