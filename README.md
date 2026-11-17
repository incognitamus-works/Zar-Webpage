# Nargila Bar Žar — Menu

Static menu website for Nargila Bar Žar, Sarajevo: drinks, hookah flavours and contact info.

## Run locally

No build step. Serve the folder with any static server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Files

- `index.html`, `styles.css`, `script.js` — the current site
- `index_v2.html`, `index_v1.html`, `index_template.html` — earlier versions
- `app/`, `components/` — an earlier Next.js version (needs Node.js)

When you change `styles.css` or `script.js`, bump the `?v=` number on their links in `index.html` so browsers load the new file.
