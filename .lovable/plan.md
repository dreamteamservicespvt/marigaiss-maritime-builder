## 1. Mobile menu — remove duplicate close icon

In `src/components/site/Header.tsx` the header already renders the hamburger/X toggle button in the top bar. The mobile menu panel ALSO renders a second X inside a "MENU" row, producing two close icons (one in the header, one below).

Fix:
- Keep the header's toggle (top-right X) as the single close affordance, aligned with the logo — same position as the menu icon was.
- Remove the inner "MENU / X" row from the panel entirely so there is only one X, at the same spot the hamburger was.
- Keep the panel starting below the header (top-[72px]) and the nav list flush at the top.

## 2. Capabilities — real 3D coverflow carousel

Replace the current CSS perspective auto-marquee in `src/routes/index.tsx` + `src/styles.css` with a proper coverflow-style 3D carousel:

- One large center card, neighboring cards visibly rotated and pushed back in Z (Swiper-style "coverflow"), side cards dimmed/scaled.
- Left/right arrow buttons (circular, brand-styled) for manual control.
- Auto-advances every ~4s; pauses on hover, focus-within, or touch interaction; resumes after.
- Click a side card to bring it to center; dots indicator below.
- Keyboard arrows when focused; respects `prefers-reduced-motion` (disables auto-advance + heavy 3D transforms).
- Built with a small custom component (no new dependency) using transforms computed from the active index — looks the best across breakpoints. Mobile: cards smaller, only 1 neighbor visible each side.

Files:
- New `src/components/site/CapabilityCarousel.tsx`
- Use existing capability images already in `src/assets/`
- Remove old `.cap-stage / .cap-track / .cap-card` rules and the corresponding JSX block in `src/routes/index.tsx`.

## 3. Marquees — allow manual scroll, pause while interacting

The `.card-marquee` and `.logo-marquee` tracks animate via CSS `transform`, which blocks native scrolling. Convert them so users can drag/swipe and the auto-scroll pauses during interaction, then resumes.

Approach (lightweight, no library):
- Make the track container `overflow-x: auto; scroll-snap-type: x proximity;` with hidden scrollbar.
- Drive the auto-scroll by incrementing `scrollLeft` in a `requestAnimationFrame` loop via a small `useAutoScroll` hook.
- On `pointerdown` / `touchstart` / `wheel` / user scroll → pause; on `pointerup` + 1.5s idle → resume seamlessly from current scrollLeft.
- Duplicate the items once so looping wraps by resetting `scrollLeft` when reaching the midpoint (infinite feel preserved).
- Apply to "What we do" and "Why Marigaiss" tracks on the home page and the logo marquee on Clients.

Files:
- New `src/hooks/useAutoScroll.ts`
- Update `src/routes/index.tsx` (two tracks) and `src/routes/clients.tsx` (logos) to use the hook + new markup
- Update `src/styles.css`: remove keyframe-driven `.card-marquee__track` / `.logo-marquee__track` animations; keep the gradient mask utility.

## Verification

After build, open `/` and `/clients` in the browser at 390×844 and 1536×864:
- Confirm only one X in the mobile menu, aligned with where the hamburger was.
- Confirm Capabilities shows coverflow with arrows, auto-advance, and pause-on-hover.
- Confirm marquees can be dragged/swiped and auto-resume after release.
