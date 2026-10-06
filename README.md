# Move Fits — Landing Page

Pixel-matched build of the Move Fits Figma design (1440px desktop frame).

- **frontend/** — Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- **backend/** — Django 6.1 + Django REST Framework (walkthrough request API + admin)

## Run the backend

```bash
cd backend
.venv\Scripts\activate          # Windows (python -m venv .venv && pip install -r requirements.txt on a fresh clone)
python manage.py migrate
python manage.py createsuperuser  # to view submissions at /admin
python manage.py runserver 8000
```

API:

| Method | URL | Purpose |
| --- | --- | --- |
| GET | `/api/health/` | Health check |
| POST | `/api/walkthrough-requests/` | "Request Private Walkthrough" form submissions |

Submissions are listed in the Django admin under **Walkthrough requests**.

## Run the frontend

```bash
cd frontend
copy .env.example .env.local     # set NEXT_PUBLIC_API_URL to your Django URL
npm install
npm run dev
```

## Animations (GSAP)

All motion lives in `frontend/src/components/Motion.tsx` (GSAP + ScrollTrigger, ScrollSmoother, SplitText).
Components opt in with data attributes, so layout code stays untouched:

| Attribute | Effect |
| --- | --- |
| `data-hero="…"` | Hero intro timeline on page load (header, tags, word-by-word title, stats wipe + count-up, image card unveil) |
| `data-section-head` / `data-pill` / `data-lead` | Section pill slides in, heading rises line by line, lead fades up |
| `data-stagger` | Direct children fade up one after another |
| `data-reveal` | Single element fades up |
| `data-clip` | Image unveils top-to-bottom |
| `data-parallax` | Image drifts gently while scrolling |
| `data-float` | Illustration floats softly |
| `data-count="450"` | Number counts up |

Smooth scrolling, nav-link gliding and the hide-on-scroll header are also handled there.
Everything is switched off for visitors with *reduce motion* enabled in their OS.

## Design notes

- Fonts: **Syne** (display headings), **Space Grotesk** (body), **Archivo** semi-condensed (uppercase labels) — loaded via `next/font/google`.
- Colour tokens sampled from the Figma live in `frontend/src/app/globals.css`.
- All copy is reproduced exactly as in the design, including its spellings
  ("View Altelier", "Mornng Light", "SANTUARY", "KINNETIC", "AUTONNOMOUS", "Longetivity", "NAVIGATiON").
- Images live in `frontend/public/images/`; `hero-bg.jpg` was extracted from the Figma PDF export.
