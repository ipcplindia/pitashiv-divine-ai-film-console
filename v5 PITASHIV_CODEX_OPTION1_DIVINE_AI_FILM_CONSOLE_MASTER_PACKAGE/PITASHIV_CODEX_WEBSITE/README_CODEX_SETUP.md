# PITASHIV.COM — Codex Build Package

This ZIP is for Codex/developer work. It includes:

- Next.js App Router scaffold
- Tailwind design system
- Component architecture
- Data files for releases, services and navigation
- Locked homepage reference images
- Generated release thumbnails/background assets
- Static prototype backup
- Master Codex prompt
- Design system and negative prompt documents

## Quick start
```bash
npm install
npm run dev
```

Open local site:
```bash
http://localhost:3000
```

## Important files
- `CODEX_MASTER_PROMPT.md` — paste this into Codex first.
- `public/assets/reference/OPTION_1_FULL_HOMEPAGE_LOCK.png` — main visual target.
- `site.config.ts` — edit YouTube, Instagram and domain links here.
- `data/releases.ts` — edit music/video cards here.
- `app/globals.css` — black-gold console design system.
- `static-prototype/` — no-build static backup.

## Deployment
For Vercel/Next.js:
```bash
npm run build
```
Then deploy the project root.

For Netlify Next.js, set:
```toml
[build]
  command = "npm run build"
  publish = ".next"
```

If Netlify gives plugin issues, use the `static-prototype/` folder as direct manual drag-and-drop backup.
