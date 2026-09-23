# Valentine's Ask

A tiny React app: a "Yes" button and a "No" button that runs away.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production (static files)

```bash
npm run build
```

This outputs a static site into `dist/` that you can host anywhere
(Netlify, Vercel, GitHub Pages, or just open `dist/index.html`).

## Files

- `src/ValentinesAsk.jsx` — the component with the dodging "No" button
- `src/App.jsx` — renders `ValentinesAsk`
- `src/main.jsx` — React entry point
- `index.html` — page shell, loads the fonts used by the component
