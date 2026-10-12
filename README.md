# coffee-candy-global

Astro + TypeScript static site (English) for global wholesale / OEM inquiries for Ruiji Food Group sugar-free coffee candy, run by icerao, authorized export representative of Ruiji Food Group (contact: raolh2004@gmail.com).

## Scripts
- `npm install`
- `npm run dev` – local dev server
- `npm run build` – type-check + static build to `dist/`
- `npm run preview` – serve the build

## Configuration (optional)
All inquiries go to raolh2004@gmail.com by default. Optional env vars (Vercel → Settings → Environment Variables):

| Var | Purpose |
|---|---|
| `PUBLIC_CONTACT_EMAIL` | Override contact email |
| `PUBLIC_FORM_ENDPOINT` | Formspree (`https://formspree.io/f/xxxx`) or Web3Forms (`https://api.web3forms.com/submit`) |
| `PUBLIC_WEB3FORMS_KEY` | Web3Forms access key |
| `SITE_URL` | Your domain, for canonical tags |

If no form endpoint is set, the inquiry form opens the visitor's email app with a pre-filled message (mailto fallback). Redeploy after changing env vars.

## Deploy to Vercel
Push to GitHub, then "Import Project" in Vercel. Astro is auto-detected (build `npm run build`, output `dist`) — zero config.

## Edit content
All text is in `src/i18n/content.ts`. Page layout: `src/components/Page.astro`.
Content comes from the 2026 company profile; see doc section 4 for claims to verify (e.g. "No.1" claims, certificate validity) before publishing.
