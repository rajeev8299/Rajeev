# Deployment Audit

**Target Hosting:** GitHub Pages  
**Target Repository:** `https://github.com/rajeev8299/Rajeev.git` / `portfolio`  
**Live URL:** `https://rajeev8299.github.io/portfolio/`  

## Workflow Specification (`.github/workflows/pages.yml`)
- Trigger: Push to branch `main` and `workflow_dispatch`.
- Steps:
  1. Checks out repository (`actions/checkout@v4`).
  2. Sets up Node.js 20 with npm caching on `next-portfolio/package.json`.
  3. Configures GitHub Pages integration (`actions/configure-pages@v5`).
  4. Runs `npm ci` in `next-portfolio`.
  5. Executes `npm run build` in `next-portfolio`, generating output in `next-portfolio/out`.
  6. Uploads `next-portfolio/out` as the deployment artifact (`actions/upload-pages-artifact@v3`).
  7. Deploys to GitHub Pages (`actions/deploy-pages@v4`).

## Local Root Static Fallback
- For immediate root hosting compatibility, `next-portfolio/out/index.html` and `next-portfolio/out/_next/` are mirrored at the root directory (`/`).
- This dual guarantee ensures that whether GitHub Pages is configured to serve from the `gh-pages` / Pages Action or from the root directory `/`, the live portfolio always renders the exact same verified Next.js 16 build.
