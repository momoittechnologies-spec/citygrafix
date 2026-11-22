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

## [Unreleased] — Brand Identity Activation (Concept A - Precision Monogram)

### Added & Activated
- **Brand Identity Concept A (Modern Precision Monogram):** Activated Concept A across the entire website as the primary brand identity, featuring the vector interlocking C and G ribbons, precision print registration eye, and Royal Navy / Royal Blue / Electric Coral / Golden Yellow brand colors.
- **BrandLogo Component Update:** Updated default `concept = "concept-1"` in `components/ui/BrandLogo.tsx`, displaying the crisp vector monogram emblem alongside the bold `CITY GRAFIX` wordmark and `PRINTING • SIGNAGE • ADVERTISING • KADAPA` tagline across Header and Footer.
- **Multi-Resolution Vector-Generated Brand Icons:** Created automated generator (`scripts/generate-brand-icons.js`) and produced high-fidelity PNG raster icons for all standard and maskable Android/iOS/web sizes:
  - `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`
  - `apple-touch-icon.png` (180x180)
  - `icon-192x192.png` and `icon-512x512.png`
  - `icon-maskable-192x192.png` and `icon-maskable-512x512.png` (with safe area circle margin)
  - `favicon.ico` in both `public/` and `app/`
  - `public/brand-logo.svg` updated to the official Concept 1 vector horizontal lockup
- **PWA Service Worker Cache Management (v3):** Bumped service worker cache to `citygrafix-pwa-v3` in `public/sw.js` with auto-purge of stale `citygrafix-pwa-v2` assets and client claim to immediately serve fresh vector brand assets.
- **PWA Manifest & Theme Alignment:** Synchronized `background_color` and `theme_color` to `#101B38` (Royal Navy) in both `app/manifest.ts` and `public/manifest.json`.

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
