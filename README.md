# You Care We Care Tree Service — Astro Site

Separate Astro rebuild of the React template. Design tokens, layout, and conversion structure preserved for desktop and mobile. Ready to push to a new repo.

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## What was built (Growth + decision SEO)

| Type | Routes |
|------|--------|
| Home | `/` |
| Services hub + 6 service pages | `/services`, `/services/[slug]` |
| Areas hub + 10 city pages (w/ neighborhood proof) | `/areas`, `/areas/[slug]` |
| About / Contact / Reviews | `/about`, `/contact`, `/reviews` |
| Pricing | `/pricing/tree-removal-cost-plant-city` |
| Comparison | `/compare/local-vs-national-tree-service` |
| Problem guide | `/problems/leaning-tree-vs-storm-damage` |
| Guides hub | `/resources` |

Smart internal links connect service → city → pricing → compare → problem → contact.

## Accessibility (WCAG 2.1 AA)

This site is designed to meet WCAG 2.1 Level AA:
- Skip link, landmarks, focus styles, reduced-motion
- Keyboard-operable mobile menu (Escape closes)
- Labeled quote form with announced success/error states
- `/accessibility` statement page (footer link)

See the `home-services-astro-builder` skill reference `accessibility-wcag.md` for the full checklist used on future builds.

## Technical SEO (Google-ready)

Built-in for ranking / crawlability:
- Trailing-slash URLs (`trailingSlash: always`) + redirects
- XML sitemap with priorities (`/sitemap-index.xml`)
- `robots.txt` with AI crawler policy + sitemap reference
- `/llms.txt` for AI citation systems
- LocalBusiness + WebSite + Service + FAQ + Breadcrumb JSON-LD
- Canonical, robots, Open Graph, geo meta on every page
- Security headers via `public/_headers` (Workers/Pages) and `netlify.toml`

### Post-launch Google checklist
1. Connect domain `youcarewecaretreeservice.com` to this deploy
2. Google Search Console → add property → submit `https://youcarewecaretreeservice.com/sitemap-index.xml`
3. Bing Webmaster Tools → submit same sitemap (optional IndexNow key)
4. Link Google Business Profile website URL to the live domain
5. Replace mock license/insurance + confirm exact lat/long in `src/lib/seo.ts`
6. Request indexing for Home, top services, and Plant City area page

## Before launch — replace these

1. **Logo / photos** — optimized WebP files live in `public/images/` (replace with final client assets as needed)
2. **License & insurance** — mock values in `site.credentials` (labeled as preview)
3. **GHL webhook** — set `PUBLIC_GHL_WEBHOOK_URL` in Netlify (or `.env`) to your GoHighLevel inbound webhook; the quote form POSTs JSON:
   ```json
   { "name", "phone", "zip", "service", "message", "source", "business", "submittedAt", "pageUrl" }
   ```
4. **Google Business / Maps** — already set to `https://maps.app.goo.gl/xmg8yMPmHp88rKEu6`
5. Confirm Facebook URL and review count

## Deploy (Netlify)

1. Push this folder to a new GitHub repo
2. New Netlify site → connect repo → build `npm run build`, publish `dist`
3. Add env var `PUBLIC_GHL_WEBHOOK_URL`
4. Point domain DNS to Netlify

## Design system

- Primary orange `#F15A29`, forest `#3B7543`, lime `#8ABE36`, dark `#1C1D17`, cream `#EEEDEA`
- Fonts: Anton (headings) + Inter (body)
- Mobile sticky Call / Quote bar preserved

## Project layout

```
src/
  data/site.ts          # single source of truth
  components/layout/    # Navbar, Footer, MobileCTABar
  components/forms/     # QuoteForm (webhook-ready)
  layouts/BaseLayout.astro
  pages/                # all routes
  styles/global.css
```

The original React template remains at `../Tree-services-website-tempalte` and is not mixed into this project.
