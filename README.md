# Rajeev Yadav — Senior Frontend Developer & UI Builder Portfolio

Official personal developer portfolio of **Rajeev Yadav** built using **Next.js 16**, **React 19**, **TypeScript**, and **Modern CSS3 Architecture**.

---

## 🎨 Architectural Color Identity System
The portfolio utilizes a refined dark off-white baseline with section-specific tinted backgrounds:

- **Main Baseline:** `#EAE8E0` (Warm Dark Off-White)
- **About:** `#E5E9F1` (Soft Slate-Blue Tint)
- **Skills:** `#E4EBE3` (Calm Sage Tint)
- **Projects:** `#F0E6DA` (Warm Earthen Beige Tint)
- **Experience:** `#EAE4ED` (Muted Lavender-Grey Tint)
- **Education:** `#E5E9E5` (Pale Green-Grey Tint)
- **Achievements:** `#EFE8DC` (Soft Sand Tint)
- **Contact:** `#F0E3DF` (Muted Rose-Grey Tint)
- **Footer:** `#252D3B` (Sophisticated Deep Navy)

**Text & Accents:**
- Primary Text: `#1B2740` (High-contrast Deep Navy)
- Secondary Text: `#576175` (Readable Slate-Grey)
- Primary Blue Accent: `#3563DB`
- Secondary Teal Accent: `#159A91`
- Amber Highlights: `#E08E2B`

---

## 🏗️ Architecture & Project Organization

```
portfolio-main/
│
├── next-portfolio/                  # Canonical Next.js Application
│   ├── public/                      # Static assets
│   │   └── assets/                  # photo.jpg, resume.pdf
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css          # Comprehensive CSS3 design system
│   │   │   ├── layout.tsx           # SEO metadata & font prefetching
│   │   │   └── page.tsx             # Main composition page
│   │   ├── components/              # Verified human-crafted components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── GithubIcon.tsx
│   │   └── data/
│   │       └── portfolio.ts         # Centralized factual data source
│   ├── next.config.ts               # Static export configuration
│   ├── package.json
│   └── tsconfig.json
│
├── .github/
│   └── workflows/
│       └── pages.yml                # Automated GitHub Pages build & deploy
├── backup/                          # Complete preserved legacy archive
├── documentation/                   # Audit, inventory, and cleanup reports
├── index.html                       # Production static export entry
└── _next/                           # Production static bundles & chunks
```

---

## 🛠️ Development & Production Commands

All development and production commands run inside `next-portfolio/`:

```bash
cd next-portfolio

# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Production build (Static HTML/CSS/JS export)
npm run build
```

---

## 🚀 Deployment

The project is hosted on **GitHub Pages**:
- URL: `https://rajeev8299.github.io/portfolio/`
- Automated via `.github/workflows/pages.yml`: runs `npm ci` and `npm run build` in `next-portfolio`, then publishes `next-portfolio/out`.

---

## 👤 Contact
- **Developer:** Rajeev Yadav
- **Location:** Varanasi, Uttar Pradesh, India
- **Email:** [rajeev829927@gmail.com](mailto:rajeev829927@gmail.com)
- **Phone:** +91 82992 79529
- **GitHub:** [github.com/rajeev8299](https://github.com/rajeev8299)
