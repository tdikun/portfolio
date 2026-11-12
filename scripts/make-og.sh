#!/bin/sh
# Render scripts/og.html to site/og.png (1200x630) with headless Chrome.
set -e
cd "$(dirname "$0")/.."
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --screenshot=site/og.png "file://$PWD/scripts/og.html"
sips -g pixelWidth -g pixelHeight site/og.png
