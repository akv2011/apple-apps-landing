# apple-apps-landing

Portfolio landing page for Apple Developer Academy @ BINUS application.
Showcases two native macOS apps: **Humanizer** and **Voice_**.

Built with Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript. Exports as
a fully static site — no server required.

---

## Getting started

### Prerequisites

- Node.js 18+ (or 20+)
- pnpm (preferred) or npm

### Install dependencies

```bash
pnpm install
# or
npm install
```

### Development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
pnpm build
# or
npm run build
```

The static site is emitted to `out/`. Open `out/index.html` in any browser or
serve with:

```bash
npx serve out
```

---

## Deploy to Vercel

### One-click (recommended)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. No environment variables
   needed.

### Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## What to replace / fill in

| Location | Placeholder | Action |
|---|---|---|
| `components/AppCards.tsx` — app icon divs | Letter placeholder (`H`, `V_`) | Drop `humanizer-icon.png` and `voice-icon.png` into `public/` and swap the `<div>` for `<Image>` |
| `components/AppCards.tsx` — video area | No video embed yet | Add a `<video>` or `<iframe>` once demo recordings are ready |
| `app/layout.tsx` — openGraph.images | Missing | Add `/og-image.png` to `public/` and reference it |
| Download URLs | `https://github.com/akv2011/Humanizer/releases/latest/download/Humanizer.dmg` | Update once real releases are published |

See `public/ASSETS_README.md` for full asset guidance.

---

## Tech stack

- **Next.js 15** — App Router, static export
- **Tailwind CSS v4** — `@tailwindcss/postcss` plugin, new `@import "tailwindcss"` syntax
- **TypeScript** — strict mode
- **Lucide React** — icon library
- **Google Fonts** — Fraunces (display) + Inter Tight (body), loaded via CSS import

---

## Design system

| Token | Value |
|---|---|
| Background | `#0d0c0a` |
| Surface | `#161411` / `#1f1d19` |
| Accent | Jade `#4d8c6f` |
| Display font | Fraunces (variable, optical sizing) |
| Body font | Inter Tight |
| Base spacing | 8px grid |

---

## License

Source code: MIT. App binaries distributed under respective app licenses.
