import { SITE, abs } from './site';

type Crumb = [string, string];
const ORG = () => abs('/#organization');

export const org = () => ({
  '@type': 'Organization',
  '@id': ORG(),
  name: SITE.name,
  url: abs('/'),
  logo: { '@type': 'ImageObject', url: abs('/logo.png'), width: 512, height: 512 },
  image: abs('/og.png'),
  sameAs: ['https://www.trustpilot.com/review/bookdzilla.com'],
  slogan: SITE.line,
  description: SITE.about,
  email: SITE.email,
  areaServed: { '@type': 'Country', name: 'United States' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: SITE.email, areaServed: 'US', availableLanguage: 'English' },
  knowsAbout: ['Lead generation', 'Meta ads', 'Google Ads', 'Landing pages', 'Speed to lead', 'Lead follow-up', 'AI receptionist', 'AI appointment setting', 'Missed-call text back', 'Marketing automation', 'Database reactivation', 'Local SEO', 'Google Business Profile', 'Lead tracking'],
});

export const website = () => ({ '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: SITE.name, description: SITE.about, publisher: { '@id': ORG() }, inLanguage: 'en-US' });

export const webpage = (path: string, name: string, description: string, type = 'WebPage') => ({
  '@type': type, '@id': abs(path) + '#webpage', url: abs(path), name, description,
  isPartOf: { '@id': abs('/#website') }, about: { '@id': ORG() }, dateModified: SITE.updated, inLanguage: 'en-US',
});

export const breadcrumbs = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
});

export const faqPage = (faqs: [string, string][]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export const priceOffers = () => [
  {
    '@type': 'Offer', name: 'Monthly retainer', price: '1000', priceCurrency: 'USD', url: abs('/pricing/'),
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '1000', priceCurrency: 'USD', unitText: 'MONTH', billingDuration: 'P1M' },
    description: 'Month to month, no contract. Ad budget is paid by the client directly to Meta or Google.',
  },
  {
    '@type': 'Offer', name: 'One-time setup fee', priceCurrency: 'USD', url: abs('/pricing/'),
    priceSpecification: { '@type': 'PriceSpecification', minPrice: '300', maxPrice: '400', priceCurrency: 'USD' },
    description: 'Connecting phone, calendar, forms and ad accounts, writing scripts and recording a 30-day baseline.',
  },
];

export const serviceNode = (path: string, name: string, description: string, serviceType: string | string[], audience?: string) => ({
  '@type': 'Service', '@id': abs(path) + '#service', name, description, serviceType, url: abs(path),
  provider: { '@id': ORG() }, areaServed: { '@type': 'Country', name: 'United States' },
  ...(audience ? { audience: { '@type': 'BusinessAudience', audienceType: audience } } : {}),
  offers: priceOffers(),
});

export const article = (path: string, headline: string, description: string) => ({
  '@type': 'Article', '@id': abs(path) + '#article', headline, description, url: abs(path), mainEntityOfPage: abs(path),
  image: abs('/og.png'), datePublished: SITE.updated, dateModified: SITE.updated, inLanguage: 'en-US',
  author: { '@id': ORG() }, publisher: { '@id': ORG() },
});
