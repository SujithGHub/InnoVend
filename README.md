# InnoVend — Milk Vending Machine Website (Plain Vite + CSR)

Marketing site for the InnoVend fresh milk vending machine built by C. Balamurugan in Namakkal, Tamil Nadu.

## Tech Stack

- Vite 7 (client-side rendering only — no SSR, no Nitro, no TanStack Start)
- React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)

## Run Locally

```bash
npm install
npm run dev
```

Opens on http://localhost:8080

## Build for Deployment

```bash
npm run build     # outputs static files to dist/
npm run preview   # serve dist/ locally
```

`dist/` is a fully static bundle — deploy to Netlify, Vercel, GitHub Pages, S3, Nginx, or any static host. No Node server required.

## Structure

```
index.html        # HTML shell + SEO meta + Google Fonts
src/
  main.tsx        # CSR entry (createRoot)
  App.tsx         # full one-page site
  styles.css      # Tailwind v4 theme + design tokens
  assets/         # images
public/           # favicon, robots.txt
```
