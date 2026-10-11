# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/) and the project uses [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2026-10-12

### Added
- **Save and open boards**: save your whole board (tiers, colours, images, title) to a single `.tierbloom` file on your device and open it later
- Drag a `.tierbloom` file onto the app to open it, or drag image files onto the board to import them
- Warning before closing the page when you have unsaved changes
- Strict validation of opened files (images must be data images, colours and names are sanitised)

### Changed
- Top bar is more compact on small phones

## [1.0.0] - 2026-10-11

### Added
- Landing page with a self-playing 3D hero, animated canvas background, marquee, stats, live export gallery, bento features, FAQ and legal pages
- Tier board with touch-safe drag and drop, editable tiers (name, colour, order, add, delete) and a remove-by-dropping bar
- Animated import with progress and automatic thumbnail resizing
- Export studio with a full-fit preview, 19 layouts, 26 palettes and many options
- Quality presets from 1x to Ultra (8K), including Print (A4 at 300 dpi)
- Light and dark themes
- Progressive Web App support: manifest, icons and offline service worker
- Documentation, GitHub templates and a Pages deployment workflow
