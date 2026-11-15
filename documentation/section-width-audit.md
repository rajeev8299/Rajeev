# Section Width & Horizontal Alignment Audit

## 1. Problem Statement
Certain portfolio sections suffered from visual asymmetry due to arbitrary `max-width` restrictions on inner card elements (specifically the About card having `max-width: 980px`), causing noticeable right-side gaps while adjacent sections (Projects, Skills, Contact) utilized the full container width.

---

## 2. Container Architecture
- **Global Container Definition:**
  ```css
  .container {
    width: min(calc(100% - 48px), 1400px);
    margin-inline: auto;
    padding: 0 1.5rem;
  }
  @media (max-width: 768px) {
    .container {
      width: calc(100% - 32px);
      padding: 0 1rem;
    }
  }
  ```
- **Full Viewport Backgrounds:** Section wrappers (`.hero-section`, `.about-section`, `.skills-section`, `.experience-section`, `.education-section`, `.projects-section`, `.achievements-section`, `.contact-section`, `.footer-site`) retain `100%` viewport width, establishing clear visual boundary colors without clipping or horizontal overflow.

---

## 3. Section Alignment Corrections
- **About Section:**
  - Removed artificial `max-width: 980px`.
  - Introduced balanced 2-column editorial grid:
    - Left column (`1.3fr`): Narrative, bio, and career focus.
    - Right column (`0.85fr`): Verified quick facts (Location, Primary Stack, Availability, Education credential highlights) in an aligned key-value info deck.
- **Hero Grid:**
  - Matched width to `1400px` max fluid container, with `1.15fr 0.85fr` proportion ensuring balanced portrait presentation.
- **Contact Editorial Grid:**
  - Enforced 50:50 equal-width and equal-height layout (`repeat(2, minmax(0, 1fr))`) stretching across full container.
