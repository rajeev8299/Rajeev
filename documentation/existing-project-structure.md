# Existing Project Structure & Pre-Rebuild Layout

```
portfolio-main/
│
├── .github/
│   └── workflows/
│       └── pages.yml                # GitHub Pages static deploy workflow (deploys repo root)
│
├── assets/
│   ├── bg-360.mp4                   # 1.0 MB video background (old space theme)
│   ├── bg-720.mp4                   # 4.6 MB video background (old space theme)
│   ├── photo.jpg                    # 107 KB genuine profile photo of Rajeev Yadav
│   ├── resume.pdf                   # 153 KB genuine resume of Rajeev Yadav
│   └── solar-system.mp4             # 3.4 MB video background (old space theme)
│
├── next-portfolio/                  # Incomplete, unbuilt Next.js experiment
│   ├── public/
│   │   └── assets/
│   │       ├── photo.jpg
│   │       └── resume.pdf
│   ├── src/
│   │   ├── app/
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css          # 64 KB legacy CSS styles
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── components/              # 15 component files mirroring index.html sections
│   ├── next.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
│
├── .gitignore
├── index.html                       # 2,584 lines monolithic static page (live site)
└── README.md                        # Documentation for legacy site
```

---

## Technical Debt & Obsolete Files in Old Layout
1. `index.html` holds entire markup, styles, animations, canvas scripts, and editor sandbox in a single unmaintainable file.
2. `next-portfolio/` was an unintegrated clone with heavy 64KB CSS and duplicate code.
3. Heavy background video files (`solar-system.mp4`, `bg-720.mp4`, `bg-360.mp4`) add unnecessary weight and distract from the developer portfolio.
4. Lacks a standalone Vite build pipeline, modular React component hierarchy, automated test suite, and backend service.

