# CITY GRAFIX WEBSITE TRANSFORMATION — CHANGELOG

All notable changes to the City Grafix project are documented in this file.

---

## [Unreleased] — Transformation Sprint (Phase 0 & Phase 1)

### Added
- Created baseline Git tag `v1.0.0-baseline` and branch `backup-baseline` for instant rollback capability.
- Added comprehensive project governance documents: `AUDIT.md`, `IMPLEMENTATION_PLAN.md`, `CHANGELOG.md`, `TEST_RESULTS.md`, and `OWNER_APPROVALS.md`.
- Added `.eslintrc.json` extending `next/core-web-vitals` to ensure automated CI lint checks pass cleanly.
- Added `components/artwork/ArtworkDropzone.tsx` with client-side drag-and-drop, file type/size validation (up to 100MB), image resolution/DPI calculator, reference tracking code generator (`CG-XXXXX`), and 1-tap WhatsApp attachment flow.
- Mounted `<ArtworkDropzone />` into `app/contact/page.tsx` and all service detail pages `components/services/ServiceDetailView.tsx`.
- Added Google `Service` JSON-LD schema on all service detail pages and `ItemList` JSON-LD schema on `/services` catalog page.

### Optimized
- **PWA Service Worker Cache Management (v2):** Bumped cache version to `citygrafix-pwa-v2` in `public/sw.js`, implemented automatic deletion of stale caches, immediate client claiming (`self.clients.claim()`), and network-first navigation with `cache: 'no-cache'` to prevent browsers from getting stuck on stale cached versions.
- **Auto-Update Mechanism:** Added `controllerchange` reload listener in `components/pwa/PwaRegister.tsx` to automatically refresh views when a new service worker version is detected.
- **Font Delivery Optimization (P0):** Removed redundant `@import url('https://fonts.googleapis.com/...')` from `app/globals.css`. Next.js self-hosted `next/font/google` now handles all web fonts (Manrope, Inter, Plus Jakarta Sans) locally with zero render-blocking requests and zero layout shift.
- **Accessibility Enhancements (P1):** Added programmatic `<label htmlFor="...">` bindings and accessible focus rings to the contact inquiry form.

### Fixed
- Fixed unconfigured ESLint error that blocked non-interactive build environments.

---

## [Unreleased] — Premium Brand & Website Enhancement Sprint

### Added
- **Outdoor Advertising Verticals (Task 1):** Created dedicated comprehensive landing page at `/services/outdoor-advertising-hoardings` with 4 specialized verticals: Roadside Advertising Hoardings, Pole Kiosk Advertising, Road Median Advertising Boards, and Highway Billboards & Hoardings.
- **Outdoor Quotation Calculator (Task 7):** Built `components/services/OutdoorQuoteCalculator.tsx` with instant square-foot calculation, structural frame options (MS pipe welding, skin-only, pole clamps), and 1-tap WhatsApp quotation transmission.
- **Interactive Word Cloud (Task 4):** Built `components/home/ServiceWordCloud.tsx` titled *"One Studio. Endless Printing Possibilities."* mounted on homepage between service cards and portfolio, featuring editorial typography and category filters across outdoor, signage, CAD, commercial, gifts, and vehicle branding.
- **Outdoor Photo Gallery & Lightbox (Task 6):** Built `components/services/OutdoorGalleryLightbox.tsx` with keyboard navigation (Escape, Left, Right arrow keys), click-to-zoom modal, and factual captions for authentic Busetty Silver Jewellery roadside display (Proddatur/Kadapa) and urban night pole kiosk boulevard.
- **Brand Identity Vector Assets (Task 3):** Generated 3 vector SVG logo concepts in `public/brand/` (Concept A: Precision Monogram, Concept B: Heritage Seal Remastered, Concept C: Architectural Hex/Facet) and published interactive proposal artifact `brand-identity-proposals.md`.

### Optimized
- **Complete Color System Redesign (Task 2):** Implemented client-specified color palette across CSS tokens and Tailwind theme: Royal Navy (`#101B38`), Royal Blue (`#2255D6`), Electric Coral (`#F04446`), Golden Yellow (`#FFC83D`), Soft Ivory (`#FAFAF7`), and Slate (`#53627B`).
- **PWA Install Experience (Task 5):** Replaced full-screen backdrop modal with a compact, elegant floating bottom-left toast card (`City Grafix on Your Phone`) with zero scroll locking and no obstruction of the floating WhatsApp button.
- **Portfolio Section & Filters (Task 6):** Extended portfolio filter taxonomy with `Outdoor Hoardings`, `Pole Kiosk Advertising`, and `Road Median Signage`, and integrated keyboard navigation into the project lightbox.
- **Header Brand Architecture (Task 3):** Updated header tagline to `PRINTING • SIGNAGE • ADVERTISING • KADAPA` while safely retaining the legacy recognized emblem `/logo.png`.

---

## [v1.0.0-baseline] — 2026-11-18
- Initial baseline production state with Next.js 14, PWA service worker, 68% compressed MozJPEG image assets, and 24 SSG static routes.
