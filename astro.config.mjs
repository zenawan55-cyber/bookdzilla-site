import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The one place the public address lives. When the custom domain is connected,
// change this line and CUSTOM_DOMAIN in public/_worker.js, then push.
const SITE = 'https://bookdzilla.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Keep the built CSS readable by older iPhones (no newer shorthand than Safari 13 knows).
  vite: { build: { cssTarget: ['safari13', 'chrome80', 'firefox78'] } },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
