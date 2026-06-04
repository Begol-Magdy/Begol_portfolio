# Asset Manifest

## Local Assets

- `public/assets/portrait-bebo.png`: hero portrait supplied by the user.
- `public/assets/project-commerce-flow.png`: generated project cover image.
- `public/assets/project-shopify-store.png`: generated project cover image.
- `public/assets/project-insight-admin.png`: generated project cover image.
- `public/assets/decor/moon-icon.png`: downloaded decorative PNG.
- `public/assets/decor/p59-object.png`: downloaded decorative PNG.
- `public/assets/decor/lego-icon.png`: downloaded decorative PNG.
- `public/assets/decor/group-134.png`: downloaded decorative PNG.
- `public/assets/marquee/*.gif`: local marquee GIFs used by the parallax strip above the About section.
- `src/assets/fonts/kanit.css` and `src/assets/fonts/kanit-*.woff2`: self-hosted Kanit font files.

## Marquee Note

The marquee/parallax strip above About uses local GIF files from `public/assets/marquee/`.

These GIFs were copied from `M:/gif tem/motionsites_public_gifs.zip` plus the previously downloaded `hero-space-voyage.gif`. The site no longer depends on remote GIF URLs at runtime.

## Intentional External Links

These are outbound links, not downloaded assets:

- `mailto:begol.m.ayoub@gmail.com`
- `https://wa.me/201204203545`
- Placeholder project links under `https://example.com/...`

Replace the placeholder project links in `src/App.tsx` when real project deployments are available.
