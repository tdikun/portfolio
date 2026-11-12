# timdikun.com redesign — implementation plan

Spec: `docs/superpowers/specs/2026-11-12-site-redesign-design.md`. Branch: `redesign-2026`.

## Task 1 — Remove Gatsby, set up static layout
- `git rm -r --cached` and delete: `src/`, `public/`, `node_modules/`, `gatsby-config.js`, `package.json`, `package-lock.json`, `.cache/`, `CNAME` (GitHub Pages leftover; the live domain is on Netlify).
- New layout:
  ```
  site/            publish folder
    index.html
    styles.css
    fonts/         self-hosted woff2
    og.png         1200x630
    favicon.svg
    robots.txt
  scripts/og.html  source for the OG image
  scripts/make-og.sh
  netlify.toml
  README.md
  ```
- `.gitignore`: `.DS_Store`, `node_modules`, `.netlify`.
- `netlify.toml`: `[build] publish = "site"`, no build command; long cache for `/fonts/*`, short for HTML.

## Task 2 — Fonts
Download latin woff2 from Fontsource's jsDelivr CDN into `site/fonts/`:
Inter 400, 500; Inter Tight 600; Newsreader 400 normal and 400 italic. Declare with `@font-face`, `font-display: swap`; preload the two hero fonts.

## Task 3 — Page
`site/index.html` + `site/styles.css` per the spec's structure and the P2 section of the mockup. Sections 3–5 use a two-column layout on desktop (small heading left, text right), single column on phones, separated by thin rules. Colors as CSS custom properties with a `prefers-color-scheme: dark` override.

## Task 4 — Meta and OG image
Title, description, canonical, OG/Twitter tags, `theme-color` for both schemes. Render `scripts/og.html` to `site/og.png` with headless Chrome via `scripts/make-og.sh`. SVG favicon "TD" monogram.

## Task 5 — Verify
Serve `site/` locally; screenshot 1280px and 375px in light and dark; check no horizontal scroll, contrast, all links, no third-party requests.

## Task 6 — Deploy notes
README: connect the Netlify site to the GitHub repo (production branch `master`), then deploy = merge + `git push`.
