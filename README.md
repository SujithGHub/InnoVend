# InnoVend — Milk Vending Machine Website

Official website for the InnoVend fresh milk vending machine, designed and built by C. Balamurugan in Namakkal, Tamil Nadu. The site showcases the machine's origin, how it works, the two available models, farmer and household benefits, press coverage, and a business enquiry form.

**Live Demo:** [https://sujithghub.github.io/InnoVend/](https://sujithghub.github.io/InnoVend/)

## Tech Stack

- **Framework:** React 19 + Vite 6 (SPA)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Deployment:** GitHub Pages (via GitHub Actions)

## Prerequisites

- **Node.js 20+**
- **npm** (or yarn/pnpm)

## Install Dependencies

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

The dev server will be accessible at `http://localhost:5173/InnoVend/`.

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output is written to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Lint & Format

```bash
npm run lint
npm run format
```

## Project Structure

```
src/
  pages/            # Page components (Index.tsx)
  components/ui/    # UI component library
  assets/           # Images (hero, models, founder)
  styles.css        # Tailwind v4 theme + custom design tokens
  App.tsx           # Main App wrapper
  main.tsx          # Application entry point
public/             # Static assets (favicon.svg, favicon.ico, robots.txt)
.github/workflows/  # CI/CD deployment workflow
```

## Deployment

The website is deployed automatically to GitHub Pages using GitHub Actions upon pushing to the `main` branch.
