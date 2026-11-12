# timdikun.com

Source for timdikun.com: a single static page (plain HTML and CSS, no build step, no JavaScript). Everything that gets published lives in `site/`.

## Preview locally

```sh
python3 -m http.server -d site 8000
```

Then open http://localhost:8000.

## Regenerate the social image

`site/og.png` (1200x630) is rendered from `scripts/og.html` with headless Chrome:

```sh
./scripts/make-og.sh
```

Edit `scripts/og.html` if the hero text or numbers change, then rerun the script and commit the new `og.png`.

## Deploy

The live domain is served by Netlify. `netlify.toml` sets the publish folder (`site`) and cache headers; there is no build command.

One-time setup: in Netlify, connect the existing site to the GitHub repo `tdikun/portfolio`, with production branch `master`, publish directory `site`, and an empty build command.

After that, deploying is: merge into `master` and `git push`.

Alternative one-command deploy without the GitHub connection:

```sh
npx netlify-cli deploy --prod --dir site
```
