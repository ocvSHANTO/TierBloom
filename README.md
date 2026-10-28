# TierBloom

**Rank anything. Share it in style.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-ff4d2e?style=for-the-badge)](https://ocvshanto.github.io/TierBloom/)
[![No Sign-up](https://img.shields.io/badge/Sign--up-Not%20required-8fce2e?style=for-the-badge)](https://ocvshanto.github.io/TierBloom/)
[![Offline](https://img.shields.io/badge/Works-Offline-2f9df4?style=for-the-badge)](https://ocvshanto.github.io/TierBloom/)
[![Single File](https://img.shields.io/badge/Single%20File-HTML-ffb020?style=for-the-badge)](https://ocvshanto.github.io/TierBloom/)
[![License: MIT](https://img.shields.io/badge/License-MIT-111111?style=for-the-badge)](LICENSE)

> **Open it, add photos, drag them into tiers, and export a poster-worthy image — in under a minute, on your phone, with no account and no upload.**

TierBloom is a free, mobile-first tier list maker. Everything runs in your browser. Your photos never leave your device. There is no server, no build step, and no API key — just one lightweight HTML file you can open anywhere.

---

## Table of contents

- [Why TierBloom](#why-tierbloom)
- [Screenshots](#screenshots)
- [How it works](#how-it-works)
- [Export themes](#export-themes)
- [Aspect ratios](#aspect-ratios)
- [Export options](#export-options)
- [App features](#app-features)
- [Touch guide](#touch-guide)
- [Privacy](#privacy)
- [Run it yourself](#run-it-yourself)
- [Project structure](#project-structure)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Why TierBloom

Most tier list makers give you one board and one flat export. TierBloom was rebuilt around the **result**:

| What you get | Why it matters |
|---|---|
| **12 completely different themes** | Each theme is its own canvas renderer — its own layout, frames, fonts, background and structure. Not a colour swap. |
| **Visual-first hero** | An animated workflow shows photo → tier → poster before you read a word. |
| **Mobile-first touch** | Long-press drag plus tap-to-place, so scrolling and dragging never fight. |
| **Frozen, real-time export preview** | Change a theme, ratio or setting and the preview at the top updates instantly. No scrolling up to check. |
| **Transparent PNG** | Export with no background, ready for thumbnails, overlays and social posts. |
| **Aspect-ratio choice** | Square, story, post, desktop, ultrawide and tall phone — one ranking, every format. |
| **Private by design** | No accounts, no analytics, no uploads, no tracking. |
| **One file, offline** | Open `index.html` and it works. Upload the same file to GitHub Pages or Netlify and it is live. |

---

## Screenshots

> Preview graphics showing the layout of the landing page, board and export studio. Replace these with live screenshots after the site is deployed if you want pixel-perfect captures — the app itself is the single `index.html` file in this repository.

### Landing — visual hero

![TierBloom landing hero](docs/screenshots/hero-desktop.png)

*The hero shows the workflow visually: photos come in, cards settle into tiers, and an export poster cycles through themes.*

### Landing — mobile

![TierBloom on mobile](docs/screenshots/hero-mobile.png)

*The same hero, reflowed for a phone: big type, generous spacing, and only two clear buttons.*

### The board

![TierBloom board](docs/screenshots/app.png)

*An empty board on open. Add photos, drag them into S, A, B, C and D tiers, or tap a card and then tap a tier.*

### Export studio

![TierBloom export studio](docs/screenshots/export.png)

*The preview stays pinned at the top while settings scroll below. Change anything and the preview updates in real time.*

---

## How it works

### 1. Add photos

Tap **Add Photos** and pick as many images as you like from your gallery, or tap **Text Card** and type a name instead of a photo. Nothing is uploaded.

### 2. Rank them

Drag a card into a tier — on a phone, press and hold for a moment until it lifts, then drag. Or tap a card to select it, then tap the tier where it belongs. Rename a tier, change its colour, move it up or down, or add a new tier in the middle.

### 3. Pick a theme, ratio and background — then export

Open **Export Image — Pick a Theme & Download**, choose a theme and an aspect ratio, turn on **Transparent Background** if you want a PNG with no background, check the pinned preview, and download as PNG or JPG up to 4K.

---

## Export themes

Every theme below is drawn by its own renderer. Switching themes changes the whole design, not just the colours.

| # | Theme | What it looks like | Best for |
|---|---|---|---|
| 1 | **Football Stadium** | Grass pitch lines, centre circle, goalposts, scoreboard-style header, tiers labelled `S TIER`, `A TIER` and so on | Football teams, players, matches |
| 2 | **Cinema Poster** | Film strip, golden marquee lights, large serif title | Films, series, actors |
| 3 | **Newspaper** | Masthead, column rules, black-and-white images, serif headline | Books, news, classic rankings |
| 4 | **Polaroid Wall** | Taped, slightly tilted frames, handwritten-style captions | Travel, memories, friends |
| 5 | **Neon Arcade** | Dark background, glowing neon sign, grid lines | Games, music, retro lists |
| 6 | **Classic Board** | Clean, professional ranking board where only the ranking matters | Any serious ranking |
| 7 | **Trophy Hall** | Burgundy, crown, gold plaques | Winners, awards, best-of lists |
| 8 | **Blueprint** | Drafting grid, dashed technical frames | Design, tech, plans |
| 9 | **Comic Pop** | Bold comic shapes, punchy colour, pop-art energy | Comics, anime, fun lists |
| 10 | **Botanical** | Soft leaves, organic shapes, calm natural palette | Food, plants, lifestyle |
| 11 | **Galaxy** | Deep space, stars, cosmic glow | Sci-fi, space, dreamy lists |
| 12 | **Retro Diner** | Vintage diner signs, warm retro colours | Food, music, nostalgia |

---

## Aspect ratios

Pick the format before you download — the preview reshapes to match, so what you see is what you get.

| Ratio | Name in the app | Use it for |
|---|---|---|
| Auto | Auto | Let the theme decide its natural shape |
| 1:1 | Square | Feed posts, profile grids, thumbnails |
| 4:5 | Post | Portrait feed posts |
| 9:16 | Story | Stories, Reels, TikTok, Shorts |
| 16:9 | Desktop | YouTube thumbnails, presentations, desktop posts |
| 21:9 | Ultrawide | Banners, wide headers, cinematic posts |
| 9:19.5 | Phone Tall | Tall phone wallpapers and full-screen stories |

---

## Export options

| Setting | Options |
|---|---|
| Theme | 12 separate worlds (see above) |
| Aspect ratio | Auto, Square 1:1, Post 4:5, Story 9:16, Desktop 16:9, Ultrawide 21:9, Phone Tall 9:19.5 |
| Format | PNG, JPG |
| Transparent background | PNG only — the image has no background. JPG always falls back to a solid background, and the app says so in plain words. |
| Size | Up to 4K, with the true pixel size shown before download |
| Preview | Pinned at the top of the studio, updating in real time |
| Download animation | A clear “Rendering your image…” state while the export is drawn |

**Tip:** Transparent PNG is perfect for thumbnails and overlays. If a theme draws its own background art (for example the football pitch), transparency removes the background layer so the ranking can sit on any design of your own.

---

## App features

- **Empty board on open** — no demo photos pretending to be yours. Demo items are only behind a separate “Try with demo” button.
- **Photo import with animation** — an animated overlay with a spinner and progress bar, then cards pop in one by one. No sudden jumps.
- **Text cards** — rank a name even when you have no photo for it.
- **Editable tiers** — rename, recolour, reorder, add above or below, clear or delete. Colours appear only in edit mode, so the board stays clean.
- **Sticky pool dock** — unranked items live in a collapsible dock at the bottom. It never scrolls away, and it never permanently eats the screen.
- **Save and open boards** — save a board as a `.tierbloom` file on your device and open it later to continue exactly where you left off.
- **Bottom Export bar** — the main action is always within thumb reach: **Export Image — Pick a Theme & Download**.
- **System fonts, no external dependencies** — the file works offline and loads fast, even on a low-end phone.

---

## Touch guide

| You want to… | Do this |
|---|---|
| Scroll the page | Swipe normally — cards do not lift |
| Drag a card | Press and hold for about 250 ms until it lifts, then drag |
| Place without dragging | Tap the card to select it, then tap the tier |
| Rename a tier | Tap the tier name, edit, confirm |
| Change a tier colour | Enter edit mode for that tier, pick a colour dot |
| See unranked items | Tap the pool dock at the bottom to expand it |

---

## Privacy

- Photos are read and resized **in your browser** and never uploaded.
- No accounts, no analytics, no cookies, no third-party requests.
- Boards and imported images exist only in memory. Closing the page clears them unless you saved a `.tierbloom` file yourself.
- Exports are created on your device by your browser. TierBloom never receives a copy.

---

## Run it yourself

### Option 1 — Just open it (fastest)

1. Download `index.html` from this repository.
2. Open it in any modern browser on your phone or computer.
3. That is it. No install, no server.

### Option 2 — GitHub Pages

1. Fork or clone this repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**.
4. Save. Your site will be live at `https://<your-username>.github.io/TierBloom/`.

### Option 3 — Netlify drag-and-drop

1. Download this repository as a ZIP, or just take `index.html`.
2. Drag the folder or file into Netlify Drop.
3. Netlify gives you a live link instantly. No build command is needed.

### Option 4 — Local server (optional)

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Project structure

```text
TierBloom/
├── index.html              # The whole app — landing, board, export studio
├── README.md               # This file
├── LICENSE                 # MIT License
└── docs/
    └── screenshots/        # Landing, mobile, board and export captures
        ├── hero-desktop.png
        ├── hero-mobile.png
        ├── app.png
        └── export.png
```

The app itself is intentionally one file. That keeps it fast, portable and easy to host: copy `index.html` anywhere and it works.

---

## FAQ

**Are my photos uploaded anywhere?**
No. Everything happens inside your browser. Nothing is sent to a server.

**Why does the board start empty?**
Because it is your board. Demo items are available on purpose behind a separate button, so they never get mixed up with your own ranking.

**Dragging scrolls the page on my phone.**
Press and hold the card for a moment until it lifts, then drag. Moving first scrolls on purpose. You can also tap a card, then tap a tier.

**What is the difference between themes?**
Each theme redraws the layout, frames, fonts and background. Football looks like a stadium, Cinema looks like a poster, Newspaper looks like a front page. It is not a palette change.

**What happens with Transparent Background and JPG?**
Transparency only works in PNG. If you choose JPG, the app falls back to a solid background and tells you so clearly before download.

**Why is my 4K export smaller than expected?**
Browsers limit canvas size, especially on phones. TierBloom shows the true pixel size before download and steps down only when your device cannot render more.

**Can I save a board and finish later?**
Yes. Save it as a `.tierbloom` file, then open that file later. All tiers, colours and images come back.

**Can I use exported images commercially?**
Yes, provided you own or are licensed to use the images you imported. The app itself is MIT licensed.

---

## Roadmap

- [x] Visual-first animated hero
- [x] 12 separate export themes
- [x] Aspect-ratio selector
- [x] Transparent PNG export
- [x] Frozen, real-time export preview
- [x] Mobile-first long-press drag + tap-to-place
- [ ] Undo / redo
- [ ] Board templates (films, food, games, football)
- [ ] Captions on exported cards
- [ ] More languages
- [ ] Custom theme builder

Have an idea? Open an issue — the best next features come from people actually ranking things.

---

## Contributing

Contributions are welcome.

1. Fork this repository.
2. Make your change in `index.html` (keep it one file, no new dependencies).
3. Test on a phone-sized screen as well as on desktop.
4. Open a pull request with a short description and, if you changed the look, a screenshot.

Please keep the app fast, private and dependency-free. That is the whole point of TierBloom.

---

## License

MIT License. See [LICENSE](LICENSE) for the full text. You are free to use, copy, modify and share TierBloom, including for commercial projects, as long as the license notice is kept.

---

## Author

**Junayed Islam Shanto (Shanto), Blackso Studio, Bangladesh.**

Independent Web Developer, Android App Developer, UI/UX Designer and AI Enthusiast.

- GitHub: [@ocvSHANTO](https://github.com/ocvSHANTO)
- Project: [ocvSHANTO/TierBloom](https://github.com/ocvSHANTO/TierBloom)
- Live demo: [ocvshanto.github.io/TierBloom](https://ocvshanto.github.io/TierBloom/)

> Made for people who love ranking things — and want the result to look as good as the argument about it.
