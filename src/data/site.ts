export const SITE = {
  name: 'Bookdzilla',
  email: 'bookdzilla@gmail.com',
  calendly: 'https://calendly.com/bookdzilla/30min',
  // Google Apps Script endpoint that records leak check requests. Same payload as before the redesign.
  endpoint: 'https://script.google.com/macros/s/AKfycbxgRU7A6FFlK5hpU8ZWPDFjpdBvRaGwFZEVVUK79ax2-U8PHLCDt2acywV8KnCJJk9Hww/exec',
  line: 'More bookings from the same ad spend.',
  about:
    'Bookdzilla is a marketing agency for high-ticket local businesses in the United States. It finds where ads, pages and follow-up lose buyers between the click and the booking, then fixes it, so the same ad spend books more appointments.',
  updated: '2026-11-14',
  updatedText: 'November 14, 2026',
};

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/guides/', label: 'Guides' },
];

export const TOOLS = [
  { name: 'GoHighLevel', does: 'CRM, texting, follow-up sequences, booking and missed-call text back, in one place.' },
  { name: 'Clay', does: 'Finds, cleans and enriches your customer list so old leads can be segmented and brought back.' },
  { name: 'Claude', does: 'Writes first replies, follow-ups, ads and pages in your voice, from your prices and policies.' },
  { name: 'Meta Ads and Google Ads', does: 'Campaigns, creative and tracking, so every booking traces back to the ad that paid for it.' },
  { name: 'Calendly', does: 'Bookings land on your real calendar, with reminders before every appointment.' },
  { name: 'Cloudflare', does: 'Landing pages that load in about a second on a phone.' },
];

export const abs = (path: string) => new URL(path, import.meta.env.SITE).href;

// Short labels for menus and the footer.
export const SHORT: Record<string, string> = {
  'paid-ads': 'Meta and Google ads', 'landing-pages': 'Landing pages', 'lead-follow-up': 'Speed to lead', 'database-reactivation': 'Reactivation', 'local-seo': 'Local SEO', 'tracking-and-reporting': 'Lead tracking',
  'wedding-venues': 'Wedding venues', 'senior-living': 'Senior living', 'private-schools': 'Private schools', 'dental-practices': 'Dental practices', 'med-spas': 'Med spas', 'pool-builders': 'Pool builders', roofing: 'Roofing', hvac: 'HVAC',
  'speed-to-lead': 'Lead response time', 'ads-get-clicks-but-no-bookings': 'Clicks, no bookings', 'cost-per-booked-appointment': 'Cost per booking', 'wedding-venue-inquiry-response': 'Venue inquiry replies', 'missed-call-text-back': 'Missed-call text back', 'five-minute-leak-check': 'Five-minute audit',
};
export const TONES = ['blue', 'orange', 'green', 'pink', 'sun'] as const;
