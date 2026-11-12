# timdikun.com redesign — design

## Intent
One page that tells a visitor (usually arriving from LinkedIn) who Tim is and what he has built, in about 20 seconds: two titles, then results. It replaces the old Gatsby site. Personal and neutral: built for Tim as an individual, not as a Reading.com product page.

## Source of truth for facts
Tim's LinkedIn (Profile.pdf, Nov 2026). Where the original brief and LinkedIn disagree, LinkedIn wins.

- Tim Dikun. Co-founder of Reading.com (since 2019). COO of Teaching.com.
- Teaching.com makes Typing.com, Nitro Type, and Reading.com. More than 10 million students use its products each year. Profitable, no outside capital.
- First hire at Teaching.com (2016). Revenue has grown 50x; team grew from 2 to 40, nearly all hired by Tim.
- Built six functions from scratch (product design, analytics, marketing, curriculum, people ops, legal) and hired the leaders who run them now. Runs legal in-house.
- Reading.com: phonics app a parent and child use together. 120 scripted lessons of about 15 minutes each, so a parent with no training can teach their kid to read. Top-3 grossing app in the App Store's Kids category; #2 in Kids 5 & Under. Grossing rank has improved every year since 2022 (from the brief; not contradicted by LinkedIn).
- Before Teaching.com: a decade designing software, including Code School and TrueCoach, both later acquired.
- Links: linkedin.com/in/timdikun, reading.com, teaching.com, teaching.com/manifesto. Email tdikun@gmail.com.

## Content rules (from Tim)
- Lead with "Co-founder of Reading.com. COO of Teaching.com."
- Results only. No philosophy, process, or "how I work".
- No dollar figures. "50x" and "profitable, no outside capital" are the only financial claims.
- "Co-founder" applies to Reading.com only.
- No podcasts, speaking, press, media. Nothing that reads as a job search.
- Design background: one short line near the bottom.
- Plain, direct sentences. No slogans.

## Page structure
1. Hero: name, two titles, two-sentence summary, LinkedIn + email links.
2. Numbers row: 50x revenue growth · 10M+ students a year · Top 3 grossing, App Store Kids · 40 people on the team, nearly all hired by me.
3. Reading.com: what it is, the rankings, link to the app.
4. Teaching.com: products, first hire, growth, six functions, link to the manifesto.
5. Before Teaching.com: one line.
6. Footer: links.

## Visual direction (chosen: "Paper, P2")
Mockup: `2026-11-12-chosen-direction-mockup.html`, section P2.
- Light by default: warm off-white `#f6f4ef`, ink `#16151a`, muted `#5d5a63`, rules `#dcd8cf`, accent `#4a2fe0` used only for links.
- Dark version follows the OS setting: `#141317` / `#f1eff4` / `#a19daa` / `#2d2b33` / accent `#a99bff`.
- Type: Inter Tight 600 for the name and section headings; Newsreader italic for the titles line; Newsreader 400 for the big numbers; Inter for body text.
- Large type, generous spacing, thin rules between sections. No gradients, no stock imagery, no brand logos or mascots.
- Phone first; no horizontal scroll at 375px.

## Build
- Plain static HTML + one CSS file, no build step, no JavaScript needed.
- Fonts self-hosted (woff2, latin subset) so the page makes no third-party requests.
- Semantic HTML, WCAG AA contrast in both themes, real meta description, canonical URL, Open Graph + Twitter card tags, OG image 1200×630 rendered from the page's own design, favicon.
- No analytics, cookies, or forms.
- Hosting: Netlify (the domain already points there). Repo connected to the existing Netlify site so `git push` to the production branch deploys. `netlify.toml` sets the publish folder and cache headers.

## Builder's calls (Claude)
- Hero summary in two sentences: "Teaching.com makes Typing.com, Nitro Type, and Reading.com, used by more than 10 million students a year. I was its first hire, and since then revenue has grown 50x, profitably and with no outside capital."
- "40" label reads "people on the team, nearly all hired by me" rather than "40 people hired", to match LinkedIn.
- Theme follows OS setting; no toggle.
- Location (San Juan) left off.
