# Export guide

Open the app, rank some images, then press **Export**.

## The preview
The preview shows your **whole** image at all times. **Fit** scales it into the box so nothing is cropped; **Full** shows it at full width and lets you scroll up and down.

## Settings

| Setting | Options | Notes |
|---|---|---|
| Title / subtitle | free text | The board title at the top of the app is the default title |
| Layout | 19 layouts | See [LAYOUTS.md](LAYOUTS.md) |
| Colour palette | 26 palettes | Changes background, rows, text and tier colours |
| Image size | Compact, Regular, Large | Scales the thumbnails inside the layout |
| Title size | Small, Normal, Large, XL | |
| Corners | Layout default, Sharp, Round | Overrides rounding of rows and images |
| Spacing | Tight, Normal, Airy | Gap between images and rows |
| Background pattern | None, Dots, Grid, Diagonal | Subtle overlay |
| Quality | 1x, 2x, 3x, 4x, HD, Print, 4K, 5K, Ultra | Live pixel size shown below the chips |
| Format | PNG, JPG, WebP | |
| Extras | Watermark, palette tier colours, item counts, rank numbers, image shadow, image borders | Each is a toggle |
| Credit | free text | Appended to the watermark |

## Quality presets

| Preset | Output width |
|---|---|
| 1x to 4x | layout width multiplied |
| HD | 1920 px |
| Print | 2480 px (A4 at 300 dpi) |
| 4K | 3840 px |
| 5K | 5120 px |
| Ultra | 7680 px (8K) |

Browsers limit canvas size (about 16 million pixels on many phones). TierBloom shows the exact output size and only reduces it, with a notice, when your device cannot render more.

## Tips
- Use **PNG** for sharp text, **JPG** for the smallest files, **WebP** for a good balance.
- Turn **Palette tier colours** off to keep the colours you chose in the app.
- For print, pick **Print** quality with an Editorial, Ledger or Gazette layout.
