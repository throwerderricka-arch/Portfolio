# Personal Portfolio

A modern, minimal developer portfolio built with **React**, **TypeScript**, and **Vite**.

## Prerequisites

You need **Node.js** (which includes npm) installed on your computer:

1. Download from [https://nodejs.org](https://nodejs.org) — choose the **LTS** version
2. Run the installer (keep default options)
3. **Restart Cursor** after installing so it picks up the new PATH

Verify installation in a terminal:

```bash
node --version
npm --version
```

Both commands should print version numbers.

## Getting started

Open a terminal in this folder (`portfolio`) and run:

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

```
portfolio/
├── index.html          # The single HTML page React mounts into
├── public/             # Static assets (favicon, images)
├── src/
│   ├── main.tsx        # Entry point — starts React
│   ├── App.tsx         # Root component — assembles the page
│   ├── index.css       # Global styles & dark theme variables
│   └── components/     # Reusable UI pieces (Header, Hero, About…)
├── package.json        # Dependencies and scripts
└── vite.config.ts      # Vite bundler configuration
```

## Customize

Edit these files with your own info:

- `src/components/Hero.tsx` — your name, tagline, bio
- `src/components/About.tsx` — your story and quick facts
- `index.html` — page title in the browser tab

## Scripts

| Command         | What it does                          |
|-----------------|---------------------------------------|
| `npm run dev`   | Start local dev server with hot reload |
| `npm run build` | Create production build in `dist/`    |
| `npm run preview` | Preview the production build locally |
