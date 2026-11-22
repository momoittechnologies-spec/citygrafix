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

## [Unreleased] — Premium Homepage Hero Slider & Complete Website Refinement

### Added & Redesigned
- **Premium 5-Slide Full-Width Hero Slider (`HeroSlider.tsx`):**
  - Built an accessible, high-performance photographic carousel featuring 5 custom slides:
    1. *Brand Introduction:* "Big Ideas. Bold Prints. Made in Kadapa." with cinematic commercial wide-format printing press photography.
    2. *Outdoor Advertising:* "Make Your Brand Impossible to Miss." featuring an editorial composite of authentic Kadapa installations (Busetty Jewellery roadside framed display + urban boulevard night pole kiosks).
    3. *3D LED Signboards:* "Make Your Business Shine." showcasing architectural storefront channel letters with Samsung IP67 LEDs.
    4. *Jumbo Xerox & CAD Plotting:* "Precision Printing for Every Plan." highlighting 1:100 scale blueprints and high-speed A0 engineering plotters.
    5. *Personalized Gifts:* "Personalized Gifts. Lasting Memories." displaying custom wall photo frames, ceramic mugs, and DTF apparel.
  - Dual responsive photography: $1920 \times 1080$ desktop landscape and dedicated $800 \times 1000$ portrait crops for mobile devices (no awkward cropping or distorted scaling).
  - Autoplay management: 6.5s interval with animated progress bar indicator, pause-on-hover, pause-on-focus, pause on inactive browser tabs (`visibilitychange`), and `prefers-reduced-motion` compliance.
  - Interactive touch swipe gestures on mobile and keyboard navigation (`ArrowLeft` / `ArrowRight`).
  - Preloaded first slide (`priority={true}`) with lazy-loaded subsequent slides for optimal Core Web Vitals (LCP $\le 2.5\text{s}$, CLS $\le 0.1$).
- **Header & Navigation Redesign (`Navbar.tsx`):**
  - Removed loud promotional top banner; streamlined into a single executive top bar featuring Kadapa workshop address, hours (09:30 AM – 09:30 PM), order desk phone, and WhatsApp desk.
  - Added dedicated desktop dropdowns for Services (all 6 verticals) and Products (photo frames, ceramic mugs, T-shirts, pillows, cards, rate card).
  - Replaced navigation actions with a primary high-converting "Get Quote" button.
- **Featured Outdoor Advertising Projects Section (`FeaturedOutdoorProjects.tsx`):**
  - Created a dedicated section spotlighting authentic Kadapa roadside hoardings and street pole kiosks with verified project badges, structural framework specs, and 1-tap quote requests.
- **7-Pillar Service Grid (`ServiceVerticals.tsx`):**
  - Updated service cards to cover all 7 requested pillars with uniform $16:10$ real photography, concise one-sentence descriptions, and dual "View Details" + "Get Quote" actions.
- **Dedicated EMI Finance Page (`app/emi-finance/page.tsx`):**
  - Created dedicated route for Bajaj Finance with full regulatory disclaimers, removing clutter from the main homepage conversion flow.
- **PWA Service Worker v5 (`public/sw.js`):**
  - Precaches fresh hero slider WebP assets and automatically purges older v4 cache versions.

---

## [Unreleased] — Official Brand Logo & Lockup Replacement

### Added & Replaced
- **Official Brand Logo Lockup Replacement:** Replaced website logo and text across Header (Navbar) and Footer with the client's official high-resolution logo graphic (`/brand/city-grafix-official-logo.webp`), featuring the 3D chrome "CITY", fiery gradient "GRAFIX", and "Kadapa's No #1 Printing & Branding Partner" capsule badge.
- **Official Circular CG Emblem:** Extracted the circular 3D CG swoosh emblem (`/brand/city-grafix-emblem.webp`) directly from the master logo for clean standalone usage.
- **PWA Icons & Favicon Regeneration:** Regenerated all raster icons from the official 3D emblem at full clarity using Sharp:
  - `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`
  - `apple-touch-icon.png` (180x180)
  - `icon-192x192.png` and `icon-512x512.png`
  - `icon-maskable-192x192.png` and `icon-maskable-512x512.png`
- **PWA Service Worker Cache Management (v4):** Bumped cache to `citygrafix-pwa-v4` in `public/sw.js` with instant client claiming to auto-purge older logo caches and immediately serve fresh assets.
- **Official Tagline Alignment:** Updated `tagline` in `data/business.ts` to *"Kadapa's No #1 Printing & Branding Partner"*.

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
