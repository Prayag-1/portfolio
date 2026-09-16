# Prayag Nepal — Portfolio

Personal portfolio and freelance showcase site.
Built with Next.js, Tailwind CSS, and Framer Motion.
Deployed on Vercel.

## Getting started

```bash
npm install
cp .env.local.example .env.local
# Add your Formspree URL to .env.local
npm run dev
```

## Environment variables

`NEXT_PUBLIC_FORMSPREE_URL` — your Formspree form endpoint.

## Deployment

Push to GitHub, connect the repository to Vercel, set `NEXT_PUBLIC_FORMSPREE_URL` in Vercel environment variables, and deploy. Vercel enforces HTTPS automatically.

## Image folders

- `/public/gallery/profile/` — headshot
- `/public/gallery/clients/` — client logos
- `/public/gallery/certifications/` — certificate images
- `/public/gallery/life/` — fitness photos

Drop real images into these folders and redeploy.

## Dependency audit

No unused dependencies were found or removed in this pass. Added `@vercel/analytics` and `@vercel/speed-insights` for the requested deployment analytics.
