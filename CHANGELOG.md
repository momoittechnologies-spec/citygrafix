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

## [v1.0.0-baseline] — 2026-11-18
- Initial baseline production state with Next.js 14, PWA service worker, 68% compressed MozJPEG image assets, and 24 SSG static routes.
