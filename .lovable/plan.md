# Premium Redesign Plan — Marigaiss India

Goal: lift the site to a world-class, awwwards-grade feel — pixel-perfect spacing, refined typography, cinematic motion, cohesive design system, and dynamic interactions. Brand identity (maritime / industrial / navy + cyan) preserved.

---

## 1. Design system foundation (`src/styles.css`)

Tighten the visual language so everything downstream feels intentional.

- **Color tokens**: extend palette with surface tiers (`--surface-1/2/3`), hairline border tokens, and oklch-based brand ramp (cyan glow, deep navy, warm amber accent).
- **Gradients & glows**: add `--gradient-aurora`, `--gradient-mesh`, `--glow-cyan`, `--glow-soft` for hero, cards, and CTA accents.
- **Shadows**: layered shadow set (`--shadow-1` flat, `--shadow-2` lifted, `--shadow-3` floating, `--shadow-glow`) — used consistently.
- **Type scale**: fluid `clamp()` scale for display/h1/h2/h3/body/caption. Pair Sora (display) + Inter (body) with tighter tracking on display, looser on caption. Add a uppercase mono eyebrow style.
- **Radii & spacing**: standardize on 8pt grid; section rhythm tokens (`--space-section-sm/md/lg`).
- **Motion tokens**: `--ease-out-expo`, `--ease-in-out-quart`, durations `--dur-fast/base/slow`. Respect `prefers-reduced-motion` everywhere.
- **Noise + grain**: subtle SVG grain overlay utility for premium texture on dark sections.

## 2. Global polish

- **Header**: glass blur with scroll-state (transparent → frosted), animated underline on active link, refined mobile drawer (single close at hamburger position, staggered link reveal, social row at bottom).
- **Footer**: tighter grid, brand mark with subtle glow, refined link hover, mobile = Navigate + Services side-by-side already shipped — re-balance spacing and add divider hairlines.
- **Floating action stack**: WhatsApp + back-to-top — refine to circular glassmorphic buttons with hover bloom + tooltip.
- **Cursor + focus**: visible focus rings using brand ring token; remove default outlines cleanly.
- **Page transitions**: subtle fade/slide-up on route change via TanStack Router.
- **Reveal-on-scroll**: tighter thresholds, stagger children, and `IntersectionObserver` already in place — extend to all sections.

## 3. Home page (`src/routes/index.tsx`)

- **Hero**: cinematic layered composition — background video/poster with navy gradient overlay, animated mesh gradient, parallax tagline, marquee of trust badges. Headline uses display clamp scale, gradient text accent on key word. Two CTAs: primary (cta gradient) + ghost. Scroll-cue micro-animation.
- **What we do**: from marquee → premium horizontal scroll-snap rail with large image cards, hover lift + image zoom, KPI chip overlays. Keep AutoScroller behavior (pause on interact).
- **Why Marigaiss**: equal-height bento grid (2x2 / 4-col responsive), iconography in cyan-glow circles, hairline borders, hover gradient sheen.
- **Capabilities (3D carousel)**: refine current coverflow — softer easing, larger center card, gradient title overlay, "0X / 0N" counter, progress bar tied to autoplay, drag-to-swipe on touch.
- **Process**: vertical timeline on desktop (animated line draw), horizontal stepper on mobile, numbered tokens with cyan rings.
- **Sectors served**: image mosaic with duotone overlay, hover reveals title.
- **Directors**: refined cards — portrait left, bio right, quote pulled out with serif accent; subtle tilt-on-hover.
- **Testimonials/Stats band**: counters animate on view (Intersection-driven), monospace numerals.
- **FAQ**: accordion with smooth height transition, plus/minus morph icon.
- **CTA band**: full-bleed gradient with grain, headline + WhatsApp + quote buttons.

## 4. Subpages

- **About**: hero with portrait grid, story timeline, values bento, leadership cards consistent with home.
- **Services**: each service as a feature row (zigzag), sticky side nav linking to sections, deliverables list with check icons, in-row CTA.
- **Clients**: refined logo wall (auto-scroll w/ manual scroll), case-study teaser cards, sector chips filter.
- **Contact**: split layout — info card (map, phone, WhatsApp, email, hours) + form. Form: floating labels, inline validation, success state animation; submits and opens WhatsApp pre-filled.

## 5. Motion & micro-interactions

- Magnetic hover on primary CTAs.
- Image cards: subtle parallax on mouse-move, scale on hover.
- Link underline draw-in, button shimmer on hover.
- Section eyebrows fade-up; headlines word-by-word reveal on hero only (perf budget).
- Number counters, progress arcs for stats.
- All motion gated by `prefers-reduced-motion`.

## 6. Imagery & assets

- Audit existing capability/sector/director images; re-crop for consistent 4:3 / 3:4 ratios.
- Apply unified duotone (navy → cyan) treatment via CSS blend for visual cohesion.
- Add SVG noise texture, mesh gradient SVG, and a hero poster image.

## 7. Performance & SEO

- Preload display font, lazy-load below-fold images, `fetchpriority="high"` on hero.
- Set explicit width/height on all images to prevent CLS.
- Per-route `head()` with unique title/description/og — verify all routes.
- Lighthouse target: Perf 95+, A11y 100, Best Practices 100, SEO 100.

## 8. Accessibility

- Color contrast AA+ on every surface.
- Keyboard focus rings, skip-to-content link, ARIA labels on icon-only buttons, carousel announces active slide.
- Forms: labels associated, error messages `aria-live`.

## 9. QA pass (mandatory)

Verify at 390, 768, 1024, 1440, 1920 viewports:
- Home, About, Services, Clients, Contact.
- Hover/focus/active states on every interactive element.
- Carousel arrows + autoplay + drag.
- Marquee auto + manual scroll.
- Mobile menu open/close, link nav, body scroll lock.
- WhatsApp button + back-to-top + quote form → WhatsApp deeplink.

---

## Technical notes

- All changes within frontend (`src/styles.css`, `src/components/site/*`, `src/routes/*`).
- New small components: `Eyebrow`, `SectionHeader`, `StatCounter`, `Magnetic`, `Marquee`, `FAQItem`, `Timeline`, `BentoCard`.
- No new heavy deps; reuse existing lucide-react, framer-motion only if already installed (otherwise use CSS + IntersectionObserver).
- Brand tokens centralized in `@theme` block — no hard-coded colors in components.

## Out of scope

- Backend / CMS integration.
- Auth, payments, database.
- New languages / i18n.

## Verification

Browser screenshots at desktop + mobile for each route, console clean, build green.
