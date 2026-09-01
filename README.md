# Suyash Kelkar — Work Catalogue

A single-page portfolio website for **Suyash Kelkar**, music composer & producer.
Built as a clean, fast, dependency-free static site (HTML / CSS / vanilla JS) so it
can be shared with clients and hosted anywhere.

## Highlights

- **Cinematic dark theme** with warm gold accent, ambient gradient glow and film grain.
- **Video thumbnails everywhere** — every YouTube project shows its real thumbnail with a
  play overlay. Thumbnails fall back gracefully (maxres → hq → styled placeholder) so a
  card never looks broken.
- **Every card is a real, clickable link** that opens the actual video / track in a new tab
  (YouTube, Spotify, Apple Music, Prime, Netflix, Hotstar, ZEE5, SonyLIV, Instagram,
  Bandcamp, SoundCloud).
- **Smooth scroll-reveal animations**, sticky glass navigation, and a responsive layout
  that works down to mobile.
- **One source of truth** — all projects and links live in `assets/js/data.js`, so updates
  are a one-file edit.

## Structure

```
index.html            # page markup
assets/css/style.css  # all styling + animations
assets/js/data.js     # catalogue data (edit here to add/update work)
assets/js/main.js     # rendering + interactions
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push this branch and open **Settings → Pages**.
2. Set **Source** to the branch and root (`/`).
3. The site publishes at `https://<user>.github.io/<repo>/`.

Works equally well on Netlify, Vercel, or Cloudflare Pages (drag-and-drop the folder).

## Editing content

Open `assets/js/data.js`. To add a video, add an entry with a YouTube ID (`yt`) — the
thumbnail is generated automatically. For streaming-only tracks, provide a `url` and a
`platform` label.

## Note on one source link

The **KRA Jewellers** entry in the original catalogue PDF has a YouTube link whose video ID
(`E1tiGuHaHT`) is only 10 characters — YouTube IDs are 11 — so it appears to have been
truncated when the PDF was exported. The card is included and links to that URL as given; if
it doesn't resolve, replace the URL in `assets/js/data.js` (search for `KRA Jewellers`) with
the full link.
