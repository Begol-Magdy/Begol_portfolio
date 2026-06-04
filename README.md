# Begol Portfolio

Dark, animated React portfolio landing page for Begol, a full stack web designer.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run Locally

```bash
npm install
npm run dev
```

The local site runs at `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## GitHub Pages

This project uses `base: './'` in `vite.config.ts`, so the built files are friendly to GitHub Pages project URLs.

For a simple GitHub Pages deploy:

1. Upload this project to a GitHub repository.
2. Install dependencies with `npm install`.
3. Build with `npm run build`.
4. Deploy the `dist/` folder using your preferred GitHub Pages workflow.

## Assets

All website visual assets are stored locally in `public/assets/`.

The Kanit font is self-hosted in `src/assets/fonts/`, so the page does not need Google Fonts at runtime.

See `ASSET_MANIFEST.md` for asset notes.
