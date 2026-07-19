# Personal Dashboard Astro Starter

A minimal personal website inspired by the idea of a public home base: projects, thoughts, reading, and automatically generated activity statistics.

## Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Customize first

1. Replace `Your Name` in `src/layouts/BaseLayout.astro` and `src/pages/index.astro`.
2. Change the `site` URL in `astro.config.mjs`.
3. Edit colors and typography in `src/styles/global.css`.
4. Replace the example Markdown files inside `src/content/`.

## Add content

Create a Markdown file in one of:

- `src/content/projects/`
- `src/content/thoughts/`
- `src/content/readings/`

The frontmatter schema lives in `src/content.config.ts`. Statistics and activity grids update automatically at build time.

## Deploy

This starter is fully static. Run `npm run build`; the deployable output is generated in `dist/`. It works with Vercel, Netlify, Cloudflare Pages, GitHub Pages, and other static hosts.
