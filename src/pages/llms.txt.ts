import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { INDUSTRIES } from '../data/industries';
import { GUIDES } from '../data/guides';

export const GET: APIRoute = ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const out = [
    `# ${SITE.name}`, '',
    `> ${SITE.about}`, '',
    'Key facts:',
    '- What it is: an AI marketing agency for high-ticket local businesses.',
    '- What it does: finds and fixes the places a local business loses buyers between an ad click and a booked appointment (the ad, the landing page, the phone, the first reply, the follow-up, local search and tracking). This includes an AI receptionist that answers calls day and night and books appointments, and an AI appointment setter that replies to new inquiries within a minute.',
    '- Who it serves: high-ticket local businesses in the United States, such as wedding venues, senior living communities, private schools, dental implant and cosmetic practices, med spas, pool builders, roofers and HVAC companies.',
    '- How it starts: a free leak check. The business sends its website and receives a 2-minute video within a day showing where its ads, pages and replies lose buyers.',
    '- Terms: one fixed monthly price set after the leak check, month to month with no contract. Ad budget is paid by the client directly to Meta or Google. The client owns the ad accounts, pages and contacts.',
    '- Timeline: fixes are usually live in about 14 days. Results are reported every Monday as five numbers: leads, booked appointments, cost per booked appointment, response time and revenue.',
    '- Built with: GoHighLevel, Clay, Claude, Meta Ads, Google Ads, Calendly and Cloudflare.',
    `- Contact: ${SITE.email}. Free leak check: ${u('/free-leak-check/')}`, '',
    '## Services',
    ...SERVICES.map((s) => `- [${s.name}](${u(`/services/${s.slug}/`)}): ${s.short}`), '',
    '## Industries',
    ...INDUSTRIES.map((i) => `- [${i.kw.charAt(0).toUpperCase() + i.kw.slice(1)}](${u(`/industries/${i.slug}/`)}): ${i.desc}`), '',
    '## Guides',
    ...GUIDES.map((g) => `- [${g.title}](${u(`/guides/${g.slug}/`)}): ${g.answer}`),
    `- [Glossary](${u('/glossary/')}): plain definitions of speed to lead, message match, cost per booked appointment and related terms.`, '',
    '## Company',
    `- [How it works](${u('/how-it-works/')}): the seven steps from free leak check to weekly report, and the terms.`,
    `- [Free leak check](${u('/free-leak-check/')}): what is checked and what the business receives.`,
    `- [Questions and answers](${u('/faq/')}): price, contract, ownership, setup time and reporting.`,
    `- [About](${u('/about/')}): what Bookdzilla is and the rules it works by.`,
    `- [Contact](${u('/contact/')}): email, a 30-minute call or a leak check request.`, '',
  ];
  return new Response(out.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
