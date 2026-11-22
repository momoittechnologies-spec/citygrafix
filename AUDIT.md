# CITY GRAFIX WEBSITE TRANSFORMATION — AUDIT REPORT (AUDIT.md)

**Project:** City Grafix Kadapa (`https://www.citygrafix.in`)  
**Date:** November 22, 2026  
**Auditor:** Senior Full-Stack Engineer, UI/UX Architect & Technical SEO Lead  
**Baseline Git Tag:** `v1.0.0-baseline` | **Branch:** `backup-baseline`  
**Framework:** Next.js 14.2.15 (App Router, Static Site Generation / Server Components)  

---

## 1. Executive Summary

This audit assesses the City Grafix website across six pillars: **Architecture & Dependencies**, **Performance & Core Web Vitals**, **User Experience & Responsiveness**, **Accessibility (a11y)**, **Technical SEO & Structured Data**, and **Factual Accuracy & Business Logic**.

The website currently possesses solid foundations (Next.js 14 App Router, native Sharp image optimization, static route prerendering, and a Progressive Web App service worker). However, several critical issues were identified that impact user conversion, page load performance, and factual consistency:

1. **Duplicate Font Loading:** An `@import` statement in `globals.css` triggers render-blocking external Google Font downloads, conflicting with Next.js self-hosted `next/font/google`.
2. **Over-Engineered Hero Slider:** An 11-slide hero carousel with heavy background images that auto-rotates every 7 seconds distracts users, increases mobile memory usage, and dilutes conversion focus.
3. **Homepage Bloat & Repetition:** 12 stacked sections with duplicated messaging across trust badges, service verticals, and highlights.
4. **Form Accessibility Deficiencies:** Quote and contact form inputs lack programmatic `<label htmlFor="...">` associations.
5. **Inconsistent Factual Claims:** Discrepancies between review numbers ("500+", "100+", "50+") and unverified financing terms without standard legal disclaimers.

---

## 2. Architecture & Technology Stack Assessment

| Component | Current Implementation | Assessment | Recommendation |
|---|---|---|---|
| **Framework** | Next.js 14.2.15 (App Router) | Excellent (SSG for 24 routes) | Retain existing architecture |
| **Styling** | Tailwind CSS 3.4.14 | Highly modular | Clean up unused utility classes |
| **Fonts** | Inter, Manrope, Plus Jakarta Sans | Dual loaded via Next Font + `@import` | **Remove `@import` in `globals.css` immediately** |
| **Images** | Sharp v0.35.5, WebP + AVIF | Optimized (total 5.3 MB) | Implement responsive `srcset` and LCP priority |
| **PWA** | Custom SW + Web App Manifest | Working, standalone display | Retain with offline fallback |
| **Icons** | Lucide React v0.453.0 | Modern and lightweight | Standardize icon sizes (16px, 20px, 24px) |
| **Animation** | Framer Motion v11.11.9 | Used heavily in hero | Add `prefers-reduced-motion` fallbacks |
| **Hosting** | Vercel (Edge Network) | Fast edge CDN caching | Configure 1-yr immutable cache headers |
| **Backend / DB** | None (Static Client-Side) | Fast, zero server maintenance | Maintain static JSON/TS data models |

---

## 3. Issues Matrix by Severity

### Critical (P0) — Immediate Action Required
| ID | Issue Description | Affected Files | Impact | Proposed Fix |
|---|---|---|---|---|
| **P0-1** | **Duplicate External Font Request:** `@import url('https://fonts.googleapis.com/...')` in `globals.css` duplicates `next/font/google` in `layout.tsx`, causing a blocking network waterfall. | `app/globals.css`, `app/layout.tsx` | FCP delayed by 180–350ms on mobile | Remove `@import` in `globals.css`; rely exclusively on Next.js zero-layout-shift font optimization. |
| **P0-2** | **Rollback & Baseline Strategy Missing:** Ongoing production deployments without an explicit rollback baseline tag. | Git repository | Deployment risk | Created Git tag `v1.0.0-baseline` and branch `backup-baseline`. |
| **P0-3** | **Unverified Review & Fact Discrepancies:** Multiple conflicting claims regarding Google review counts ("500+" in `business.ts` vs "100+" in `TrustHighlights.tsx`). | `data/business.ts`, `components/home/TrustHighlights.tsx` | User trust & Google E-E-A-T risk | Unify verified review counts and flag in `OWNER_APPROVALS.md`. |

### High Priority (P1) — Core UX, Conversion & Mobile Responsiveness
| ID | Issue Description | Affected Files | Impact | Proposed Fix |
|---|---|---|---|---|
| **P1-1** | **11-Slide Hero Carousel:** The auto-rotating carousel shifts focus, causes layout thrashing, and distracts customers from ordering. | `components/home/HeroSlider.tsx`, `app/page.tsx` | High bounce rate, high mobile GPU usage | Replace with a high-conversion, focused Hero section featuring authentic workshop photography and 2 primary CTAs. |
| **P1-2** | **Homepage Section Bloat:** 12 sequential sections create excessive page height (over 8,000px on mobile). | `app/page.tsx` | Friction in reaching contact details & calculator | Streamline into 10 cohesive sections following the Master Brief sequence. |
| **P1-3** | **Missing Accessible Form Labels:** Inputs in `LocationContact.tsx` use `placeholder` without `<label>` or `id`. | `components/home/LocationContact.tsx` | WCAG 2.1 AA failure (3.3.2) | Add visible, accessible `<label htmlFor="...">` and `aria-describedby` attributes. |
| **P1-4** | **Bajaj Finance Offer Missing Regulatory Disclaimers:** Mentions 0% interest without standard asterisks or T&C disclaimers. | `components/home/EmiFinanceSection.tsx`, `components/layout/Navbar.tsx` | Regulatory / legal compliance risk | Add explicit disclaimer: *"Credit approval, tenure & processing terms subject to Bajaj Finance Ltd. approval."* |

### Medium Priority (P2) — SEO, Enhancements & Polish
| ID | Issue Description | Affected Files | Impact | Proposed Fix |
|---|---|---|---|---|
| **P2-1** | **Double Jump-Bar Link on Services Page:** `#personalized-gifts` appears twice in `app/services/page.tsx`. | `app/services/page.tsx` | Minor visual defect | Remove redundant hardcoded link. |
| **P2-2** | **Missing ItemList Schema on Services Page:** Services catalog lacks structured collection schema. | `app/services/page.tsx` | Misses rich snippet opportunities | Add schema for `ItemList` linking to service URLs. |
| **P2-3** | **Color Contrast in Secondary Metadata:** Some small `text-slate-400` texts on light backgrounds fall below 4.5:1 ratio. | Multiple components | WCAG contrast ratio compliance | Darken muted text from `text-slate-400` to `text-slate-600` on light surfaces. |

---

## 4. Viewport Responsiveness Audit

| Breakpoint | Target Device | Current Behavior | Issues Observed | Resolution |
|---|---|---|---|---|
| **360px** | Budget Android (Samsung Galaxy A-series) | Sticky bottom bar is functional; navbar ribbon wraps tightly. | Announcement banner text can overflow if screen is very narrow. | Ensure `truncate` and `text-[10px]` styling on ribbon. |
| **390px** | iPhone 12/13/14/15/16 Pro | Good card scaling; touch targets $\ge 44\text{px}$. | PWA modal needs comfortable safe-area padding at bottom. | Standardize `pb-[max(1rem,env(safe-area-inset-bottom))]`. |
| **768px** | iPad / Android Tablet (Portrait) | Grids collapse to 2 columns nicely. | Trust indicators section spacing is slightly inconsistent. | Apply symmetric 2-col or 3-col grid with even padding. |
| **1024px** | iPad Pro / Small Laptops | Mega menu opens on hover; desktop navbar displays cleanly. | Clean transition from drawer to full navbar. | Verified working. |
| **1440px** | Desktop HD Displays | `site-container` limits max width to 1420px. | Excellent readability; comfortable line lengths. | Retain existing container constraints. |

---

## 5. Security & Build Validation

- **Dependencies:** 0 known vulnerabilities reported by `npm audit`.
- **TypeScript Check:** `npx tsc --noEmit` exits with **Code 0** (zero errors).
- **ESLint:** Configured with `next/core-web-vitals`; passes with **0 warnings and 0 errors**.
- **Credentials:** No private API keys or database tokens exposed in frontend bundles.

---

## 6. Conclusion & Roadmap

The codebase is technically sound and well-architected. Executing the phased plan will transform the website into an editorial-grade, ultra-fast, high-converting commercial printing portal.
