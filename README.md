<div align="center">

<img src="assets/logo.svg" width="96" alt="TierBloom logo">

# TierBloom

**Rank anything. Export it like a pro.**

A free, offline tier list maker with touch-friendly drag and drop, **19 export layouts**, **26 colour palettes** and output up to **8K**. No sign-up. No uploads. Zero dependencies.

[![Live demo](https://img.shields.io/badge/Live%20demo-open%20app-4da3ff?style=for-the-badge)](https://ocvshanto.github.io/TierBloom/)
[![License: MIT](https://img.shields.io/badge/License-MIT-19c3a8?style=for-the-badge)](LICENSE)
[![PWA ready](https://img.shields.io/badge/PWA-offline%20ready-ffb347?style=for-the-badge)](#install-as-an-app)

![No dependencies](https://img.shields.io/badge/dependencies-0-success)
![Single file](https://img.shields.io/badge/app-single%20file-blue)
![Privacy](https://img.shields.io/badge/uploads-none-brightgreen)
![Layouts](https://img.shields.io/badge/layouts-19-4da3ff)
![Palettes](https://img.shields.io/badge/palettes-26-19c3a8)
![Max export](https://img.shields.io/badge/max%20export-8K-ffb347)
![Version](https://img.shields.io/badge/version-1.0.0-informational)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

<br>

<img src="assets/og-image.png" alt="TierBloom preview" width="860">

</div>

---

## Table of contents

- [Why TierBloom](#why-tierbloom)
- [Screenshots](#screenshots)
- [Features](#features)
- [Export layouts](#export-layouts)
- [Colour palettes](#colour-palettes)
- [How to use](#how-to-use)
- [Export options](#export-options)
- [Install as an app](#install-as-an-app)
- [Privacy](#privacy)
- [Browser support](#browser-support)
- [Run locally](#run-locally)
- [Deploy to GitHub Pages](#deploy-to-github-pages)
- [Customise](#customise)
- [Project structure](#project-structure)
- [How it works](#how-it-works)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [Author](#author)
- [License](#license)
- [বাংলা সারসংক্ষেপ](#বাংলা-সারসংক্ষেপ)

## Why TierBloom

Most tier list makers give you one look and one export size. TierBloom was built around the **result**: a ranking you are proud to post.

- **Beautiful exports.** 19 genuinely different layouts, not colour swaps.
- **Made for phones.** Press and hold to drag, swipe to scroll. The two never fight.
- **Private by design.** Your images never leave your device.
- **Sharp at any size.** From a chat-friendly 1x to 8K, with the exact pixel size shown before you download.
- **Nothing to install.** One HTML file, no build step, works offline.

## Screenshots

<table>
<tr>
<td width="50%"><img src="docs/screenshots/01-landing-hero.png" alt="Landing page hero"><br><sub><b>Landing hero</b> with animated background and 3D board</sub></td>
<td width="50%"><img src="docs/screenshots/02-hero-export-reveal.png" alt="Hero export reveal"><br><sub><b>Ranking becomes exports</b>: real renders fan out behind the board</sub></td>
</tr>
<tr>
<td><img src="docs/screenshots/03-export-gallery.png" alt="Export gallery"><br><sub><b>Live export gallery</b> with palette picker and filters</sub></td>
<td><img src="docs/screenshots/04-app-desktop.png" alt="App on desktop"><br><sub><b>The board</b> with editable tiers and image tray</sub></td>
</tr>
<tr>
<td colspan="2"><img src="docs/screenshots/05-export-studio.png" alt="Export studio"><br><sub><b>Export studio</b>: full preview, layouts, palettes, quality and options</sub></td>
</tr>
</table>

### On mobile

<p align="center">
<img src="docs/screenshots/06-mobile-landing.png" width="230" alt="Mobile landing">
&nbsp;
<img src="docs/screenshots/07-mobile-app.png" width="230" alt="Mobile app">
&nbsp;
<img src="docs/screenshots/08-mobile-export.png" width="230" alt="Mobile export">
</p>

## Features

### Landing page
- Self-playing 3D hero: a cursor drags cards into tiers, then the board turns into real exports in several palettes
- Animated canvas background with flowing ribbons and a constellation of particles
- Scroll animations, card spotlight and tilt, ripple on touch, magnetic buttons and a scroll progress bar
- Live export gallery rendered by the real export engine, filterable by category and palette
- Bento feature grid, FAQ, stats counters and detailed legal pages
- Light and dark themes, reduced-motion support

### Board
- **Touch-safe drag and drop** using Pointer Events with a long-press on touch screens
- Auto-scroll while dragging near the screen edges
- **Editable tiers**: rename, recolour (presets or any colour), reorder with up and down buttons, add above or below, clear or delete
- Per-tier image counts
- Drop an image on the red bar to remove it
- Editable board title that becomes the export title
- Animated import with progress, and automatic thumbnail resizing for speed

### Export studio
- Preview that always shows the **whole** image (Fit) or full width with scrolling (Full)
- **19 layouts**, **26 palettes**, three image sizes, four title sizes
- Corner style, spacing, background pattern, item counts, rank numbers, image shadow and borders
- Quality from 1x to **Ultra (8K)** including **Print** (A4 at 300 dpi)
- PNG, JPG and WebP output with a live pixel-size readout

### Engineering
- Zero dependencies, zero network requests, one file
- Installable PWA with an offline service worker
- Accessible focus styles, `prefers-reduced-motion` support, semantic labels

## Export layouts

Every layout redraws labels, shapes, backgrounds and typography. See the full gallery with categories in [docs/LAYOUTS.md](docs/LAYOUTS.md).

<table>
<tr>
<td align="center"><img src="docs/examples/story.png" width="170" alt="story layout"><br><sub>Story 9:16</sub></td>
<td align="center"><img src="docs/examples/polaroid.png" width="250" alt="polaroid layout"><br><sub>Polaroid Wall</sub></td>
<td align="center"><img src="docs/examples/neon.png" width="250" alt="neon layout"><br><sub>Neon Arcade</sub></td>
<td align="center"><img src="docs/examples/cinema.png" width="250" alt="cinema layout"><br><sub>Cinema</sub></td>
</tr>
<tr>
<td align="center"><img src="docs/examples/aurora.png" width="170" alt="aurora layout"><br><sub>Aurora 4:5</sub></td>
<td align="center"><img src="docs/examples/news.png" width="200" alt="news layout"><br><sub>Gazette</sub></td>
<td align="center"><img src="docs/examples/blueprint.png" width="250" alt="blueprint layout"><br><sub>Blueprint</sub></td>
<td align="center"><img src="docs/examples/scoreboard.png" width="250" alt="scoreboard layout"><br><sub>Scoreboard</sub></td>
</tr>
<tr>
<td colspan="2" align="center"><img src="docs/examples/split.png" width="420" alt="split layout"><br><sub>Widescreen Split</sub></td>
<td colspan="2" align="center"><img src="docs/examples/desktop.png" width="420" alt="desktop layout"><br><sub>Desktop HD</sub></td>
</tr>
</table>

| Category | Layouts |
|---|---|
| Desktop | Editorial, Desktop HD, Widescreen Split, Landscape 16:9 |
| Social | Story 9:16, Square Block, Poster, Glass, Aurora 4:5 |
| Mobile | Mobile |
| Text | Ledger, Magazine, Typeset, Gazette |
| Artistic | Blueprint, Scoreboard, Cinema, Polaroid Wall, Neon Arcade |

## Colour palettes

26 palettes change the background, rows, text and **tier colours**, so the whole design transforms.

<img src="docs/screenshots/palettes.png" alt="All 26 palettes">

Ocean Deep, Ember, Forest, Royal Indigo, Sand, Sky, Mint, Slate, Teal Night, Crimson Night, Gold Noir, Lavender, Citrus, Mono Paper, Cobalt, Deep Space, Merlot, Midnight Gold, Sage, Steel, Copper, Ice, Volcano, Matcha, Dusk, Arctic Night.

Prefer your own tier colours? Turn **Palette tier colours** off in the export studio.

## How to use

1. **Open the app** and tap **Add images**. Pick as many as you like.
2. **Press and hold** an image until it lifts, then drag it into a tier. A normal swipe scrolls the page.
3. **Edit tiers**: tap a label to rename or recolour it, or use the arrows beside it to move it up or down.
4. **Name your list** at the top of the board.
5. Press **Export**, choose a layout, palette and quality, check the preview, then **Download**.

> Tip: drag an image onto the red bar at the top to remove it.

## Export options

| Setting | Options |
|---|---|
| Layout | 19 layouts |
| Colour palette | 26 palettes |
| Image size | Compact, Regular, Large |
| Title size | Small, Normal, Large, XL |
| Corners | Layout default, Sharp, Round |
| Spacing | Tight, Normal, Airy |
| Pattern | None, Dots, Grid, Diagonal |
| Quality | 1x, 2x, 3x, 4x, HD (1920), Print (2480), 4K (3840), 5K (5120), Ultra (7680) |
| Format | PNG, JPG, WebP |
| Extras | Watermark, palette tier colours, item counts, rank numbers, image shadow, image borders |
| Text | Title, subtitle, credit |

Details: [docs/EXPORT_GUIDE.md](docs/EXPORT_GUIDE.md).

## Install as an app

TierBloom is a Progressive Web App. In Chrome or Edge choose **Install app** from the address bar or menu. On Android use **Add to Home screen**. After the first visit it works fully offline.

## Privacy

- Images are read and resized **in your browser** and never uploaded
- No accounts, no analytics, no cookies, no third-party requests
- Only your light or dark theme choice is stored locally
- Closing the page clears your board

Full policies are in the app footer and in [docs/PRIVACY.md](docs/PRIVACY.md).

## Browser support

| Browser | Support |
|---|---|
| Chrome, Edge, Brave, Opera (desktop and Android) | Full |
| Safari (macOS and iOS 16+) | Full |
| Firefox | Full |

Requires Canvas 2D, Pointer Events and CSS `color-mix()` (all evergreen browsers).

## Run locally

No build step is needed.

```bash
git clone https://github.com/ocvSHANTO/TierBloom.git
cd TierBloom
npm start          # serves the folder (or: python3 -m http.server 8000)
npm run check      # sanity check
```

You can also just open `index.html` in a browser (the offline cache needs `http://` or `https://`).

## Deploy to GitHub Pages

1. Create a public repository named **TierBloom**
2. Upload all files, keeping the folder structure
3. **Settings > Pages > Source: GitHub Actions**
4. Push to `main`

Your site will be live at **https://ocvshanto.github.io/TierBloom/**. Full steps and custom domains: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Customise

Open `index.html` and search for these:

| What | Where |
|---|---|
| Brand name | `const BRAND` |
| Support button link | `const SUPPORT_URL` |
| Social links | `const SOC` |
| Developer info window | `$('#dev').onclick` |
| Colours | CSS variables in `:root` and `[data-t=light]` |
| Layouts and palettes | `LY` and `PAL`, see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Legal texts | `const LEG` |

## Project structure

```text
TierBloom/
├── index.html              # The whole app (markup, CSS, JS)
├── 404.html                # Friendly not-found page
├── manifest.webmanifest    # PWA manifest
├── sw.js                   # Offline service worker
├── assets/                 # Logo, favicons, PWA icons, social preview
├── docs/                   # Guides, architecture, screenshots, layout examples
├── scripts/check.js        # Sanity check used by CI
├── .github/                # Issue and PR templates, Pages and CI workflows
├── CHANGELOG.md  CONTRIBUTING.md  CODE_OF_CONDUCT.md  SECURITY.md
├── LICENSE  CITATION.cff  package.json
└── robots.txt  sitemap.xml  humans.txt  .nojekyll
```

## How it works

TierBloom is a single HTML file. The board lives in memory, images are center-cropped to 480 px thumbnails on import, and one Canvas 2D renderer draws every export, the landing gallery and the hero reveal. Layouts and palettes are plain data, so adding one takes a few lines. Read the full design in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## FAQ

<details><summary><b>Are my images uploaded anywhere?</b></summary>
No. Everything happens inside your browser and nothing is sent over the network.
</details>

<details><summary><b>Why is my 4K or Ultra export smaller than expected?</b></summary>
Browsers limit canvas size, especially on phones. TierBloom shows the exact output size and reduces it only when your device cannot render more.
</details>

<details><summary><b>Can I use exported images commercially?</b></summary>
Yes, provided you own or are licensed to use the images you imported. The app itself is MIT licensed.
</details>

<details><summary><b>Can I save my board and continue later?</b></summary>
Not yet, because nothing is stored. Saving boards to a local file is on the [roadmap](docs/ROADMAP.md).
</details>

<details><summary><b>Dragging scrolls the page on my phone.</b></summary>
Press and hold the image for a moment until it lifts before you move your finger. Moving first scrolls the page on purpose.
</details>

## Roadmap

Save and load boards, undo and redo, more languages, a custom layout builder and more. See [docs/ROADMAP.md](docs/ROADMAP.md).

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md), then open an issue or a pull request.

## Security

Please report vulnerabilities privately. See [SECURITY.md](SECURITY.md).

## Author

**Junayed Islam Shanto** (Shanto), Blackso Studio, Bangladesh.
Independent Web Developer, Android App Developer, UI/UX Designer and AI Enthusiast.

[![GitHub](https://img.shields.io/badge/GitHub-ocvSHANTO-181717?logo=github)](https://github.com/ocvSHANTO)
[![Facebook](https://img.shields.io/badge/Facebook-profile-1877f2?logo=facebook&logoColor=white)](https://www.facebook.com/share/1FJzrKEALE/)
[![Instagram](https://img.shields.io/badge/Instagram-ocb__shanto-e4405f?logo=instagram&logoColor=white)](https://www.instagram.com/ocb__shanto?igsh=MXAwM3BvaTVhMXhkbA==)
[![X](https://img.shields.io/badge/X-Junayed__SHANTO__-000000?logo=x&logoColor=white)](https://x.com/Junayed_SHANTO_)
[![YouTube](https://img.shields.io/badge/YouTube-vortexinbloom-ff0000?logo=youtube&logoColor=white)](https://youtube.com/@vortexinbloom?si=WUHhDs4oy8OFb66y)
[![Email](https://img.shields.io/badge/Email-Junayed.I.Shanto%40gmail.com-ea4335?logo=gmail&logoColor=white)](mailto:Junayed.I.Shanto@gmail.com)

More projects: [Password Forge](https://ocvshanto.github.io/PasswordForge/) · [Rank Forge](https://ocvshanto.github.io/rank-forge/) · [Portfolio](https://github.com/ocvSHANTO/blackso-studio)

If TierBloom helps you, please give the repository a star and share it.

## License

Released under the [MIT License](LICENSE). Copyright (c) 2026 Junayed Islam Shanto (Blackso Studio).

---

## বাংলা সারসংক্ষেপ

**TierBloom** একটা বিনামূল্যের, অফলাইন tier list বানানোর টুল। ছবি আঙুল দিয়ে ধরে tier-এ ছাড়ুন, তারপর ১৯টা layout আর ২৬টা রঙের palette-এ সুন্দর ছবি হিসেবে export করুন, ৮K পর্যন্ত। আপনার কোনো ছবি কোথাও আপলোড হয় না, সবকিছু আপনার ব্রাউজারেই চলে।

<div align="center"><sub>Designed &amp; Developed by Shanto · Blackso Studio</sub></div>
