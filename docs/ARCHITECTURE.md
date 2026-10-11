# Architecture

TierBloom is a **zero-dependency, single-file web app**: `index.html` contains the markup, CSS and JavaScript. There is no build step, no framework and no server.

## Why one file?
- Deploys anywhere (GitHub Pages, Netlify, a USB stick).
- Easy to audit: nothing is loaded from a third party, so nothing can leak your images.
- Works offline through a tiny service worker (`sw.js`).

## Main parts

| Part | Where in `index.html` | Responsibility |
|---|---|---|
| Design tokens | `:root` and `[data-t=light]` CSS | Dark (default) and light themes via CSS variables |
| Landing page | `#landing` | Hero, marquee, stats, gallery, features, FAQ, footer |
| Hero stage | `hero()`, `skin()` | Self-playing demo that moves cards into tiers and re-skins with real palettes |
| Background FX | `fx()` | Canvas ribbons and constellation particles |
| Board | `draw()` | Renders tiers and the image tray from state |
| Drag and drop | `begin()`, `end()` | Pointer Events with a touch long-press, so scrolling never fights dragging |
| Import | `thumb()` | Centre-crops and resizes images to 480 px thumbnails |
| Export engine | `render()` | Canvas 2D renderer shared by the app, the gallery and the hero |
| Layouts | `LY` | Data-driven layout definitions |
| Palettes | `PAL`, `tcol()` | 26 palettes and tier colour ramps |
| Export studio | `$('#exp').onclick` | Preview, options and download |

## State
All state lives in memory: `tiers` (id, name, colour, item ids), `pool` (unplaced ids) and `imgs` (id to `Image`). Nothing is persisted except the light/dark choice in `localStorage`.

## Drag and drop on touch screens
1. `pointerdown` on an image starts a 220 ms timer.
2. If the finger moves more than 8 px first, the timer is cancelled and the browser scrolls normally.
3. If the timer fires, a ghost image follows the finger and a non-passive `touchmove` handler blocks scrolling only for that drag.
4. While dragging near the top or bottom edge, the page auto-scrolls.

## Export engine
`render(layoutKey, scale, options, tiers, images)` returns a canvas. A layout is a plain object describing size, paddings, label style, row style, background and optional features (split panel, polaroid items, film strip and so on). Output size is `layoutWidth x scale`, clamped to browser canvas limits.

## Adding a layout
```js
LY.myLayout = {
  n: 'My Layout',            // display name
  W: 1000, t: 110,           // base width, thumbnail size
  p: 40, lw: 140,            // padding, label width
  g: 8, hh: 110, gap: 10,    // gap, header height, row gap
  ta: 'left', tf: 48,        // title alignment and size
  rr: 12, ls: 'sq', ir: 8,   // row radius, label style, image radius
  rf: P => P[3],             // row fill from palette
  bg: (c, w, h, P) => grad(c, w, h, P[1], P[2])
};
CAT.myLayout = 'Desktop';    // gallery category
```
Label styles: `sq`, `circle`, `pill`, `ribbon`, `slant`, `out`, `bar`, `dot`, `big`, `brut`, `neon`.

## Adding a palette
```js
PAL.push(['Name', bgA, bgB, surface, ink, accent, mode]);
// mode 1 = vivid tier colours, mode 2 = tints of the accent
```
