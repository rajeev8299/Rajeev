# Deployment & Hosting Guide: Rajeev Yadav Portfolio

## 1. Overview

The new portfolio uses a clean, decoupled architecture:
1. **Frontend:** React Single Page Application built with Vite. The static production build (`dist/`) is deployed to **GitHub Pages** at `https://rajeev8299.github.io/portfolio/`.
2. **Backend:** Node.js Express REST API (`backend/`) offering structured contact inquiry processing, schema validation, and rate limiting.

---

## 2. GitHub Pages Deployment (Frontend)

The repository includes an active GitHub Actions workflow at [pages.yml](file:///d:/project%20web%20dev/portfolio-main/.github/workflows/pages.yml).

### Workflow Mechanism:
- Deploys upon push to `main` branch.
- Uploads the root repository files (`path: .`).
- The root `index.html` references `./assets/index-[hash].js` and `./assets/index-[hash].css`, along with `./assets/photo.jpg` and `./assets/resume.pdf`.
- All asset paths are relative (`./`), ensuring proper loading regardless of repository sub-path hosting on GitHub Pages.

### Rebuilding for Production:
```powershell
cd frontend
npm run build
Copy-Item frontend\dist\index.html index.html -Force
Copy-Item frontend\dist\assets\* assets\ -Recurse -Force
```

---

## 3. Node.js REST API Deployment (Backend)

The Node.js Express API is located in `backend/` and can be hosted on any Node-compatible cloud provider (Render, Railway, Fly.io, or AWS EC2).

### Deployment Steps (e.g. Render / Railway):
1. Point your service to the `backend/` directory as the Root Directory.
2. Build command: `npm install`
3. Start command: `node src/server.js`
4. Set Environment Variables:
   - `PORT`: (provided by host or default `5000`)
   - `NODE_ENV`: `production`
   - `ALLOWED_ORIGIN`: `https://rajeev8299.github.io`

### Frontend API URL Configuration:
In `frontend/src/sections/Contact.jsx`, configure the API endpoint to point to your live backend service URL or keep relative `/api/contact` if deploying behind a reverse proxy.

---

## 4. Verification Checklist

- [x] Profile photograph (`photo.jpg`) verified in `assets/` and `frontend/public/assets/`.
- [x] Resume document (`resume.pdf`) verified in `assets/` and `frontend/public/assets/`.
- [x] All 6 project links and GitHub URLs verified.
- [x] Vitest component tests passing.
- [x] Backend Express API route tests passing.
- [x] Root `index.html` lightweight entry point tested.

