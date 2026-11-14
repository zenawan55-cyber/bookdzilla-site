# Bookdzilla website

Astro site for Bookdzilla. Cloudflare Pages builds and deploys every commit to `main`.

## How it deploys

The built site in `dist/` is committed, and `wrangler.toml` tells Cloudflare Pages to serve that folder. So after any change: run `npm run build`, then commit both the source and `dist/`.

To let Cloudflare build it instead, set the build command to `npm run build` in the Pages project settings, then delete `dist/` from the repository and add it back to `.gitignore`.

## Working on it

```
npm install
npm run dev      # local preview
npm run build    # writes dist/
```

## Where things live

- `src/data/` holds all copy: `services.ts`, `industries.ts`, `guides.ts`, `glossary.ts`, `faqs.ts`, `site.ts`. Adding an entry to one of these creates its page, its links in the footer and hubs, its schema and its line in `llms.txt`.
- `src/pages/` holds the page templates. `src/components/` holds the shared parts (form, thread, funnel, report, closing band).
- `src/styles/` holds the design tokens (`tokens.css`) and the stylesheet (`site.css`).
- `public/_worker.js` serves the site, redirects old addresses, runs the tracked video links (`/v/<slug>`) and the demo endpoint.

## Connecting the custom domain

1. Change `SITE` in `astro.config.mjs` to the new address.
2. Set `CUSTOM_DOMAIN` in `public/_worker.js` to the bare domain.
3. Push. Canonicals, the sitemap, `robots.txt` and `llms.txt` all follow, and the pages.dev address redirects to the domain.
