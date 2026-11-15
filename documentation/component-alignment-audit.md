# Component Alignment & Equal Card Sizing Audit

## 1. Principles of Equal Sizing
1. **Grid Stretch Alignment:** Every grid parent enforcing equal card sizing must declare `align-items: stretch` and `grid-auto-rows: 1fr` (or explicit column template).
2. **Flex Height Inheritance:** All child cards inside equal-sized grids must declare `height: 100%` and `display: flex; flex-direction: column`.
3. **Card Body Expansion:** Content wrappers inside cards must declare `flex: 1 1 auto` so footer actions automatically align to the identical baseline at the bottom.

---

## 2. Component Group Alignments

### A. Skills Categories (4 Categories)
- **Grid:** `repeat(4, minmax(0, 1fr))` on desktop.
- **Card:** `.skills-category-panel` has `height: 100%`, `display: flex; flex-direction: column; justify-content: space-between`.
- **Consistency:** All 4 panels share identical border-radius, background, header height, and chip distribution.

### B. Standard Projects (5 Projects)
- **Grid:** `repeat(3, minmax(0, 1fr))` on desktop, `repeat(2, minmax(0, 1fr))` on tablet, `1fr` on mobile.
- **Preview Canvas:** Fixed aspect ratio mockup header (`130px`) for consistent top boundary.
- **Action Footer:** Pushed to bottom with `margin-top: auto` ensuring all Live Demo / Source Code buttons align horizontally across columns.

### C. Education Cards (2 Cards)
- **Grid:** `repeat(2, minmax(0, 1fr))` with `align-items: stretch`.
- **Consistency:** MCA and BCA cards have identical vertical height, header badges, and structured notes.

### D. Contact Section Panels (2 Panels)
- **Grid:** 50:50 equal width (`repeat(2, minmax(0, 1fr))`).
- **Equal Height:** Left panel (*Direct Connection*) and right panel (*Send a Message*) have matching `2.25rem` padding and align from top to bottom.
