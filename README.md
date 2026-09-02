# InnoVend — Milk Vending Machine Website

A marketing website for the InnoVend fresh milk vending machine, designed and built by C. Balamurugan in Namakkal, Tamil Nadu. The site showcases the machine's origin, how it works, the two available models, farmer and household benefits, press coverage, and a business enquiry form.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + Vite 8)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **UI Components:** shadcn/ui + Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod

## Prerequisites

- **Node.js 20+** or **Bun 1.1+**
- A package manager: `npm`, `yarn`, `pnpm`, or `bun`

> This repo includes a `bun.lock` file, so **Bun** is the recommended package manager.

## Install Dependencies

```bash
# Using Bun (recommended)
bun install

# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install
```

## Run Locally

Start the development server on the default Vite port (`http://localhost:8080`):

```bash
# Using Bun
bun run dev

# Using npm
npm run dev

# Using pnpm
pnpm dev

# Using yarn
yarn dev
```

The dev server supports hot module replacement (HMR). Most edits in `src/` will update in the browser automatically.

## Build for Production

Create an optimized production build:

```bash
# Using Bun
bun run build

# Using npm
npm run build

# Using pnpm
pnpm build

# Using yarn
yarn build
```

The build output is written to `dist/`.

### Preview the Production Build Locally

```bash
# Using Bun
bun run preview

# Using npm
npm run preview

# Using pnpm
pnpm preview

# Using yarn
yarn preview
```

This serves the contents of `dist/` so you can verify the production build before deploying.

### Development Mode Build

To build in development mode (useful for debugging SSR or server functions):

```bash
bun run build:dev
# or
npm run build:dev
```

## Lint & Format

```bash
# Lint the entire project
bun run lint

# Auto-format all files with Prettier
bun run format
```

## Project Structure

```
src/
  routes/           # TanStack Router file-based routes
    __root.tsx      # Root layout (header, fonts, metadata)
    index.tsx       # Homepage (hero, models, story, press, enquiry form)
  components/ui/    # shadcn/ui components
  assets/           # Images (hero, models, founder)
  styles.css        # Tailwind v4 theme + custom design tokens
  router.tsx        # Router configuration
  start.ts          # TanStack Start app entry
public/             # Static assets (favicon, robots.txt)
```

## Deploy

This project is configured for Lovable deployment:

1. Open the project in the [Lovable editor](https://lovable.dev).
2. Click **Publish** (top right on desktop, bottom-right in Preview on mobile).
3. In the publish dialog, click **Update** to push the latest frontend build live.

> Backend changes (server functions, database migrations, edge logic) deploy automatically. Frontend UI changes require clicking **Update** in the publish dialog to go live.

## Learn More

- [TanStack Start docs](https://tanstack.com/start/latest/docs/framework/react/overview)
- [TanStack Router docs](https://tanstack.com/router/latest/docs/framework/react/overview)
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs/v4-beta)
