import { SITE, abs } from './site';

type Crumb = [string, string];
const ORG = () => abs('/#organization');

export const org = () => ({
  '@type': 'Organization',
  '@id': ORG(),
  name: SITE.name,
  url: abs('/'),
  logo: abs('/favicon.svg'),
  image: abs('/og.png'),
  slogan: SITE.line,
  description: SITE.about,
  email: SITE.email,
  areaServed: { '@type': 'Country', name: 'United States' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: SITE.email, areaServed: 'US', availableLanguage: 'English' },
  knowsAbout: ['Lead generation', 'Meta ads', 'Google Ads', 'Landing pages', 'Speed to lead', 'Lead follow-up', 'Database reactivation', 'Local SEO', 'Google Business Profile', 'Lead tracking'],
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

export const serviceNode = (path: string, name: string, description: string, serviceType: string | string[], audience?: string) => ({
  '@type': 'Service', '@id': abs(path) + '#service', name, description, serviceType, url: abs(path),
  provider: { '@id': ORG() }, areaServed: { '@type': 'Country', name: 'United States' },
  ...(audience ? { audience: { '@type': 'BusinessAudience', audienceType: audience } } : {}),
  offers: { '@type': 'Offer', description: 'Fixed monthly price set after a free leak check. Month to month. Ad budget paid directly to Meta or Google.' },
});

export const article = (path: string, headline: string, description: string) => ({
  '@type': 'Article', '@id': abs(path) + '#article', headline, description, url: abs(path), mainEntityOfPage: abs(path),
  image: abs('/og.png'), datePublished: SITE.updated, dateModified: SITE.updated, inLanguage: 'en-US',
  author: { '@id': ORG() }, publisher: { '@id': ORG() },
});
