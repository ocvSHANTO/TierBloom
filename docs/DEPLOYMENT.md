# Deployment

## GitHub Pages (recommended)

1. Create a repository named **TierBloom** on GitHub (public).
2. Upload every file from this folder (keep the folder structure, including `.github`).
3. Open **Settings > Pages**.
4. Under **Build and deployment > Source**, choose **GitHub Actions**.
5. Push to `main`. The workflow in `.github/workflows/pages.yml` publishes the site.
6. Your app is live at `https://ocvshanto.github.io/TierBloom/` after about a minute.

If you prefer not to use Actions, choose **Deploy from a branch**, select `main` and `/ (root)`. The `.nojekyll` file is already included.

## Custom domain
Add a `CNAME` file containing your domain, then create a DNS record pointing to `ocvshanto.github.io`, and set the domain under Settings > Pages.

## Other hosts
Netlify, Cloudflare Pages and Vercel work by pointing at the repository with no build command and `.` as the publish directory.

## After you rename the repository
Search for `TierBloom` and `ocvshanto.github.io` in `index.html`, `README.md`, `sitemap.xml`, `robots.txt` and `package.json`, and update the URLs.

## Releasing an update
1. Edit `index.html`.
2. Bump `VERSION` in `sw.js` so returning visitors get the new files.
3. Add an entry to `CHANGELOG.md`.
4. Commit and push.
