# CITY GRAFIX WEBSITE TRANSFORMATION — MASTER IMPLEMENTATION PLAN

**Target Outcome:** Premium, high-converting commercial printing and signage web platform for City Grafix Kadapa.  
**Version:** 2.0.0  
**Status:** In Execution (Phases P0 & P1 Active)  

---

## Roadmap & Execution Priority Matrix

| Phase | Description | Priority | Target Timeline | Status |
|---|---|---|---|---|
| **Phase 0** | Discovery, Audit, Baseline Tag & Rollback Strategy | **P0** | Immediate | **Completed** |
| **Phase 1** | Design System, Typography & Component Library | **P1** | Immediate | **Active** |
| **Phase 2** | Homepage Reconstruction (Focused Hero + Concise Order) | **P1** | Immediate | **Active** |
| **Phase 3** | Service & Product Architecture Taxonomy | **P1** | Sprint 1 | **Active** |
| **Phase 4** | Interactive Quote Calculator Refinement | **P2** | Sprint 1 | Ready |
| **Phase 5** | Artwork Upload & Secure Submission Architecture | **P3** | Sprint 2 | Architecture Ready |
| **Phase 6** | Gift Personalization Workflow | **P3** | Sprint 2 | Ready |
| **Phase 7 & 8** | Order Management & Content Management System Design | **P4** | Sprint 3 | Architecture Ready |
| **Phase 9** | Trust, Factual Accuracy & Regulatory Disclaimers | **P0** | Immediate | **Active** |
| **Phase 10** | Local SEO, Structured Data & Metadata | **P2** | Sprint 1 | Ready |
| **Phase 11** | Performance (LCP < 2.5s) & Accessibility (WCAG 2.1 AA) | **P0 / P1** | Immediate | **Active** |
| **Phase 12** | Conversion Tracking & Event Architecture | **P2** | Sprint 2 | Ready |
| **Phase 13** | End-to-End Quality Assurance & Multi-Device Validation | **All** | Ongoing | In Progress |

---

## Detailed Phase Breakdown

### Phase 0 — Baseline & Rollback (P0)
- [x] Create rollback Git tag: `v1.0.0-baseline` and branch `backup-baseline`.
- [x] Audit dependencies, TypeScript types, and ESLint configurations.
- [x] Compile comprehensive `AUDIT.md`.
- [x] Create tracking artifacts: `IMPLEMENTATION_PLAN.md`, `CHANGELOG.md`, `TEST_RESULTS.md`, `OWNER_APPROVALS.md`.

### Phase 1 — Design System & Visual Foundation (P1)
- [x] Eliminate render-blocking `@import` from `app/globals.css`. Rely on optimized `next/font/google`.
- [ ] Refine typography tokens: Manrope (headings), Inter (body), Plus Jakarta Sans (branding & numbers).
- [ ] Establish strict 8px spacing rhythm (`space-y-4`, `space-y-8`, `gap-6`, `py-16`).
- [ ] Standardize color palette:
  - Primary Background: `#FFFFFF`
  - Secondary Background: `#F8FAFC` / `#F4F5F7`
  - Dark Surface / Header: `#0B132B` / `#151923`
  - Brand Accent: `#F97316` (CTA Orange) & `#E50914` (Brand Red)
  - Success: `#10B981` (WhatsApp Green)
  - Borders: `#E2E8F0` / `#E5E7EB`
- [ ] Add `@media (prefers-reduced-motion: reduce)` fallbacks in CSS utilities.

### Phase 2 — Homepage Reconstruction (P1)
- [ ] **Focused, High-Converting Hero Section:**
  - Headline: *"Kadapa's Complete Printing & Signage Solutions"*
  - Telugu/Badge: *"10+ Years Trusted In-House Workshop (Since 2014)"*
  - Supporting Copy: *"From Star Flex Banners and Jumbo Xerox to 3D LED Signboards and Personalized Gifts — Professional Quality Under One Roof."*
  - Primary CTA: **Get WhatsApp Quote** (`https://wa.me/917287867584`)
  - Secondary CTA: **Explore Services** (`/services`)
  - High-impact workshop photography showcase with quick category chips (Star Flex, Jumbo Xerox, 3D Signs, Gifts).
- [ ] **Streamlined 10-Section Homepage Flow:**
  1. Header & Navigation (Logo, Services dropdown, Pricing, Our Work, About, Contact, Call Desk).
  2. Hero Section (Focused headline, 2 primary CTAs, authentic production imagery).
  3. Credibility Strip (In-house workshop, Established 2014, Fast turnaround, Direct rates).
  4. 6 Core Service Verticals (Distinct, rich cards with pricing and WhatsApp links).
  5. Interactive Price Estimator (2-column layout for instant area calculation).
  6. Featured Real Projects (High-resolution portfolio masonry).
  7. Why Choose City Grafix (Core competitive differentiators).
  8. Personalized Gifts Studio (Frames with 10% IG discount, Mugs, Badges, Pillows).
  9. Simple 4-Step Order Process (Inquiry $\rightarrow$ Design Proof $\rightarrow$ Fast Print $\rightarrow$ Pickup/Delivery).
  10. Verified Customer Reviews & Kadapa Workshop Location / Contact.

### Phase 3 — Service & Product Architecture (P1)
- [ ] Maintain consistent 6-category taxonomy across mega menu, services index, and homepage:
  1. Flex Printing & Outdoor Advertising
  2. Jumbo Xerox & CAD Engineering Blueprints
  3. Architectural 3D Acrylic & LED Signage
  4. Personalized Gifts, Photo Frames & DTF Printing
  5. Commercial Offset Printing & Visiting Cards
  6. Auto Publicity & Vehicle Branding
- [ ] Audit all 12 individual service detail pages for canonical URLs, technical specs, and FAQs.

### Phase 4 — Quote Calculator Enhancement (P2)
- [ ] Verify area conversion formulas (sq ft calculation, minimum charge thresholds).
- [ ] Ensure all 9 materials and 4 finishing add-ons pull dynamically from `data/pricing.ts`.
- [ ] Format WhatsApp inquiry message with explicit breakdown (Dimensions, Material, Addons, Estimated Price).

### Phase 5 & 6 — Artwork Submission & Gift Personalization (P3)
- [ ] Design lightweight, client-safe file drop workflow specifying accepted formats (.CDR, .PSD, .PDF, .DWG, .JPG).
- [ ] Provide clear artwork submission checklist (300 DPI, CMYK color space, converted curves).
- [ ] Clarify visual mockup previews as illustrative until production proof is signed off.

### Phase 7 & 8 — Order Tracking & Admin Architecture (P4)
- [ ] Document order status lifecycle (Enquiry Received $\rightarrow$ Proof Pending $\rightarrow$ In Production $\rightarrow$ Ready for Collection).
- [ ] Design lightweight internal status lookup architecture avoiding exposure of customer data.

### Phase 9 — Trust, Accuracy & Disclaimers (P0)
- [ ] Unify all Google review claims across components to a verified, consistent metric.
- [ ] Append mandatory financing disclaimers to all Bajaj Finance EMI mentions.
- [ ] Verify Telugu spelling and typographic rendering across all banners and cards.

### Phase 10 & 11 — SEO, Performance & Accessibility (P1 / P2)
- [ ] Eliminate duplicate font CSS `@import`.
- [ ] Add explicit `<label htmlFor="...">` to all input fields in `LocationContact.tsx`.
- [ ] Ensure contrast ratio $\ge 4.5:1$ across all text elements.
- [ ] Generate comprehensive JSON-LD schemas (`LocalBusiness`, `Service`, `BreadcrumbList`).

### Phase 12 & 13 — Analytics, QA & Validation
- [ ] Validate responsive behavior at 360px, 390px, 768px, 1024px, 1440px.
- [ ] Execute `next build` and confirm all 24 static pages prerender with 0 errors.
- [ ] Confirm PWA manifest and service worker register cleanly.
