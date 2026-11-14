import type { APIRoute } from 'astro';

// Search and AI crawlers are welcome: the site is written to be read and quoted.
const AI = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'CCBot', 'meta-externalagent', 'DuckAssistBot', 'MistralAI-User'];

export const GET: APIRoute = ({ site }) => {
  const lines = [
    'User-agent: *', 'Allow: /', 'Disallow: /v/', 'Disallow: /api/', '',
    ...AI.flatMap((a) => [`User-agent: ${a}`, 'Allow: /', 'Disallow: /v/', 'Disallow: /api/', '']),
    `Sitemap: ${new URL('/sitemap-index.xml', site).href}`, '',
  ];
  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
