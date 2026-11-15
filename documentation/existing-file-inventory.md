# Existing File Inventory

**Timestamp:** November 2026

## 1. Root Directory (`/`)
- `.git/`: Version control directory.
- `.github/workflows/pages.yml`: GitHub Actions workflow deploying `next-portfolio/out` to GitHub Pages.
- `.gitattributes`: Line-ending normalization rules.
- `.gitignore`: Ignoring build outputs, node_modules, and environment files.
- `index.html`: Production static HTML export (served at GitHub Pages root if targeted).
- `_next/`: Production Next.js static chunks and assets.
- `README.md`: Project documentation and live link description.
- `assets/`:
  - `photo.jpg` (109.9 KB): Authentic photo of Rajeev Yadav [CRITICAL ASSET].
  - `resume.pdf` (157.4 KB): Official resume of Rajeev Yadav [CRITICAL ASSET].
  - `index-*.js`, `index-*.css`: 6 legacy bundle artifacts.
- `backup/`: Previous archival snapshot (`legacy-next`, `legacy-root`, `assets`).
- `documentation/`: Project specifications and audit reports.

## 2. Canonical Application (`next-portfolio/`)
- `package.json`: Dependencies (`next@16.4.2`, `react@19.3.0`, `react-dom@19.3.0`, `lucide-react@^1.59.0`).
- `next.config.ts`: Static export configured (`output: 'export'`, `images: { unoptimized: true }`).
- `tsconfig.json`: TypeScript configuration.
- `eslint.config.mjs`: ESLint setup with Next.js lint plugin.
- `public/assets/`:
  - `photo.jpg` (109.9 KB)
  - `resume.pdf` (157.4 KB)
- `src/app/`:
  - `globals.css`: Primary application design tokens and CSS architecture.
  - `layout.tsx`: HTML shell, typography fonts, metadata.
  - `page.tsx`: Single-page layout assembling all section components.
- `src/components/`:
  - `Navbar.tsx`
  - `Hero.tsx`
  - `About.tsx`
  - `Skills.tsx`
  - `Experience.tsx`
  - `Education.tsx`
  - `Projects.tsx`
  - `Achievements.tsx`
  - `Contact.tsx`
  - `Footer.tsx`
  - `GithubIcon.tsx`
- `src/data/`:
  - `portfolio.ts`: Complete structured content model containing all genuine data.
