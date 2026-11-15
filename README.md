# Sadi Rabin · Portfolio

A one-page portfolio in plain HTML, CSS and JavaScript. No build step.

Live at **https://sadirabin.github.io**

## Files

| File | What it is |
| --- | --- |
| `data.js` | **All content.** Edit this to change text, add projects, fill placeholders. |
| `index.html` | Page shell (title and meta description live here). |
| `styles.css` | Design: colors, type, layout, dark mode. |
| `app.js` | Turns `data.js` into the page, plus the inventory demo. |
| `resume.html` | Resume page built from `data.js` (no phone number). |
| `assets/` | Resume PDF, prompt-engineering notes, demo video, your headshot. |

## Common edits

- **After editing `data.js`, `app.js` or `styles.css`:** bump the `?v=` number on their links in `index.html` (and `data.js` in `resume.html`) so browsers fetch the new version.

- **Add a project:** copy one `{ ... }` block in `projects` inside `data.js` and change the text.
- **Add your headshot:** put the photo in `assets/` and set `meta.headshot`, e.g. `"assets/headshot.jpg"`.
- **Fill a placeholder:** search `data.js` for `[PLACEHOLDER`. Anything still marked shows highlighted on the site.
- **Resume PDF:** `assets/Sadi_Rabin_Resume.pdf` is your own web version (no phone number, no GPA). To update it, export a new web version and save it over that file.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173

## Deploy: GitHub Pages

1. Create a new **public** repository on GitHub, for example `portfolio`.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/portfolio/`.
   Name the repository `YOUR-USERNAME.github.io` instead if you want it at the root address.

## Deploy: Vercel

1. Push the folder to GitHub as above.
2. At vercel.com choose **Add New → Project** and import the repository.
3. Framework preset: **Other**. Leave build command and output directory empty. Deploy.

## Before publishing

- Watch `assets/ai-agent-demo.mp4` once and make sure no API keys or account details are visible on screen.
- Run Lighthouse in Chrome (right-click → Inspect → Lighthouse tab) on the live URL, mobile and desktop.
