# 大域工程顧問有限公司 | GeoField Engineering Consultants

Redesigned corporate website for Geofield Engineering Consultants Co., Ltd (大域工程顧問有限公司),
a geotechnical engineering firm based in Kaohsiung, Taiwan. Founded 1993.

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + custom brand design system
- **Routing**: react-router (SPA)
- **Icons**: lucide-react
- **Visuals**: Custom 3D isometric renders (public/images/) + real company photos
- **Hosting**: Vercel

## Getting Started
```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Deploy to Vercel
1. Push this repo to GitHub
2. In Vercel → Project Settings → General:
   - **Framework Preset: Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add `vercel.json` rewrites (already included) so SPA routes work.

## Structure
```
src/
├── data/site.ts        # All site content (services, projects, offices, stats)
├── components/         # Header, Footer, cards, Reveal animations, etc.
└── pages/              # Home, About, Services, Projects, Contact, Location, News
public/images/          # 3D renders + real company photos (CPT truck, logo)
```

## Editing content
All text content lives in `src/data/site.ts` — edit services, projects,
office addresses, phone numbers there; no component changes needed.

## TODO
- [ ] Replace 3D category visuals with real project photos when available
- [ ] Wire contact form to a backend API (currently opens pre-filled email)
