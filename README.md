# Alex Morgan Portfolio

Static portfolio site built with Vite, React, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

The local dev server defaults to `http://localhost:5173`.

## Production Build

```bash
npm run build
```

The static output is generated in `dist/`.

## Deployment

Vercel is configured with `vercel.json`.

Recommended Vercel settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Netlify also works with zero config when using:

- Build command: `npm run build`
- Publish directory: `dist`

The Netlify SPA fallback is handled by `public/_redirects`.

## Update Formspree

Replace the placeholder Formspree endpoint in `src/App.tsx`:

```ts
const formEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

Use the form ID from your Formspree dashboard.

## Update Content

Most placeholder content lives in `src/App.tsx`:

- `projects`: selected work cards
- `clients`: client strip names
- `credentials`: degree and certifications
- `roles`: rotating hero words
- `stackItems`: tech stack icons
- `galleryItems`: bento gallery slots
- contact links inside `ContactSection`
- hero name and positioning copy inside `HomePage`

Also update `index.html` for title, description, and Open Graph copy.

Gallery placeholder SVGs live in `public/gallery-*.svg`.

## Update SEO Files

Before deploying publicly, replace `https://example.com` in:

- `public/robots.txt`
- `public/sitemap.xml`

Use the final production domain from Vercel or Netlify.
