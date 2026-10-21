# Paperbark Air Co. (demo)

Demo website for a **fictional** Australian split-system air conditioning business in Strathpine QLD, built by [AirLeads Builder](https://airleads-builder.glenn-b84.workers.dev) from a Penpot design. All business details, licence numbers, reviews, team members and photos are samples/placeholders.

- Stack: Astro (static output) + Tailwind CSS 4 + TypeScript
- Hosting: Cloudflare Worker with static assets (`wrangler.jsonc`, `worker/index.js`)
- Pages: `/`, `/services`, `/about`, `/gallery`, `/contact`
- The quote form is front-end only: it does not submit anywhere.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # outputs ./dist
npx wrangler deploy   # deploy (needs Cloudflare credentials)
```

Images are Pexels stock photos embedded in the Penpot source file. Fonts: Barlow Condensed + Archivo (via Fontsource).
