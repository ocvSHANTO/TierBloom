# Contributing to TierBloom

Thank you for helping! TierBloom is a zero-dependency single-file app, so contributing is simple.

## Ways to help
- Report bugs or suggest features through issues
- Add a layout or palette (see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md))
- Improve accessibility, performance or translations
- Improve documentation

## Getting set up
```bash
git clone https://github.com/ocvSHANTO/TierBloom.git
cd TierBloom
npm start        # or: python3 -m http.server 8000
npm run check    # verifies the inline script parses and key files exist
```
Open the printed address. There is nothing to install or build.

## Guidelines
- Keep it dependency-free and offline. No external scripts, fonts, analytics or network requests.
- Keep images local. Never upload user content anywhere.
- Match the existing style: 2-space indentation, compact but readable code, CSS variables for colours.
- Test on a phone-sized screen and with touch dragging.
- Keep exports crisp. Test a layout at 1x and 4x.
- One topic per pull request, with a clear description and screenshots for visual changes.

## Pull request checklist
- [ ] `npm run check` passes
- [ ] Tested in Chrome and one other browser
- [ ] Tested on a narrow mobile viewport
- [ ] Updated `CHANGELOG.md` and docs when behaviour changed
- [ ] Bumped `VERSION` in `sw.js` for user-visible changes

## Commit messages
Short, imperative, present tense: `Add Gazette layout`, `Fix preview cropping on tall layouts`.
