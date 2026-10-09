# Project Ageta design system

**One rule:** every visual value lives in `styles.css`, section 0 (Design tokens).
Change a value there and all eight pages follow. Nothing below section 0 contains a raw color,
radius, shadow, font size or duration. Components only read tokens.

## How to change the look

| I want to change… | Edit this token(s) in section 0 |
|---|---|
| The brand blue | `--l-accent`, `--l-strong`, `--l-bright` (light) and `--d-accent`, `--d-strong`, `--d-bright` (dark) |
| Background or card colors | `--l-bg`, `--l-surface`, `--l-band` / `--d-bg`, `--d-surface`, `--d-band` |
| Fonts | `--font-display`, `--font-text`, `--font-mono` (and the Google Fonts link in each page's `<head>`) |
| Heading sizes | `--text-display-xl` (h1), `--text-display-lg` (h2), `--text-display-md`, `--text-display-sm` |
| How rounded things are | `--radius-sm` to `--radius-xl`, `--radius-pill` |
| Card depth and glow | `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--glow-accent` |
| Spacing between sections | `--section-y`, `--gutter`, `--container` |
| Animation speed | `--dur-fast`, `--dur-med`, `--dur-slow`, `--dur-theme` |
| The browser color bar | Automatic: `script.js` reads `--l-bg` and `--d-bg` |

## Theming

Section 0a is the palette: `--l-*` (light) and `--d-*` (dark) raw values, the only raw colors in the project.
Section 0b maps them to semantic tokens with `light-dark()`, so each token shows its light and dark value side by side.
The theme toggle sets `data-theme` on `<html>`. With no choice made, the visitor's system setting applies.
Browsers without `light-dark()` fall back to the dark palette.

## Color tokens

| Token | Role |
|---|---|
| `--color-bg` | Page background |
| `--color-band` | Alternate section background (every second section) |
| `--color-surface` / `--color-surface-2` | Cards and panels / raised or hovered surfaces |
| `--color-border` / `--color-border-strong` | Hairlines / outlined buttons |
| `--color-text` / `--color-text-muted` | Body and headings / secondary text |
| `--color-accent` | Links, highlights, numerals (text-safe on every surface) |
| `--color-accent-bright` | Focus ring, glow, hover |
| `--color-accent-strong` | Filled button background (white text on it passes AA) |
| `--color-signal` | Annotation dots and callouts (never used as text) |
| `--color-on-accent` | Text on filled accent |

Measured contrast (WCAG): text on background 18.6:1 dark and 17.5:1 light; muted text 9.5:1 and 7.5:1;
accent text 8.1:1 and 6.8:1; white on button blue 4.7:1 and 7.1:1. Body text on every surface is above 4.5:1.

## Typography

- **Display:** Bricolage Grotesque, weight 650, tight tracking (`--tracking-display`), line height `--lh-tight`.
- **Text:** Instrument Sans, 1rem on 1.6.
- **Mono:** JetBrains Mono for numerals (`01`, level steps) and small labels.
- **Scale:** `--text-xs .8rem`, `sm .9`, `md 1`, `lg 1.125`, `xl 1.375`, `2xl 1.75`, `3xl 2.25`, `--text-lead`, and four fluid display sizes.

## Space, shape, elevation, motion

- **Space:** `--space-1` to `--space-10`, in `rem` so layout scales with the visitor's text-size setting (0.25rem to 8rem). Layout: `--container 1200px`, `--gutter`, `--section-y`, `--header-h`.
- **Radius:** `xs 6`, `sm 10`, `md 16` (fields, small cards), `lg 24` (panels), `xl 32` (hero containers), `pill` (buttons, chips).
- **Elevation:** `--shadow-sm` (chips), `--shadow-md` (cards), `--shadow-lg` (featured panels, includes a soft blue glow), `--shadow-btn` (filled buttons).
- **Motion:** `--dur-press 120ms`, `--dur-fast 150ms`, `--dur-med 220ms`, `--dur-slow 400ms`, `--dur-theme 1.4s`. Curves: `--ease-out` (UI), `--ease-in-out` (things moving on screen), `--ease-drawer` (menus). See the motion rules below.
- **Layers:** `--z-nav 50`, `--z-skip 100`.
- **Breakpoints (documented, media queries cannot read variables):** 640px, 860px, 1024px.

## Icons

One stroke family (24px grid, 2px stroke, round caps) stored as CSS masks in section 0e: arrow, arrow-down, check, x, sun, moon.
Use `<span class="i i-arrow" aria-hidden="true"></span>`. They take the surrounding text color. Do not use emoji or text glyphs as icons.

## Components

| Component | Classes | States and notes |
|---|---|---|
| Header | `.site-header`, `.bar`, `.brand`, `nav`, `.tg`, `.burger` | Sticky glass bar. Hover and `aria-current` pill. Mobile menu opens inside the bar. 44px+ touch targets. |
| Button | `.btn`, `.btn.solid` | Pill, 48px high. Hover (hover devices only), pressed, focus ring, disabled. Optional `.i-arrow` that nudges on hover. |
| Chip / option | `.op`, `.ib`, `.tb`, `.ro`, `.tl2`, `.sb`, `.pn2` | Default, hover, selected (`aria-pressed="true"` or checked), focus ring. |
| Card / panel | `.panel`, `.tp2`, `.wz`, `.au`, `.tier` and others | `--color-surface`, `--radius-lg`, `--shadow-md` or `--shadow-lg`. |
| Field | `.fm`, `.pf`, `.vf` inputs | Sunk into `--color-bg`. Always inside a `<label>`. Native validation. 16px text so phones don't zoom. |
| Accordion | `details`/`summary` in `.tl`, `.cg`, `.wk`, `.cmpw` | Plus/minus indicator, keyboard native, `name` groups keep one open. |
| Callout | `.out`, `.ex`, `.able` | Amber dot marks "what comes out of it" style notes. |
| Stepper / wizard | `.stp`, `.wz` | Progress bar uses `transform`. Focus moves to each new step heading. |
| Marquee | `.mq`, `.mr` | Pause button (`.pz`), pauses on hover and focus, static under reduced motion. |
| Section | `.sec`, `.sh`, `.in` | Every second section gets `--color-band` with hairlines. |

## Naming map for the short class names

Many component classes are abbreviations from the build. Treat these as the canonical meaning when you add pages:

`.sec` section, `.sh` section heading block, `.in` inner container, `.p1` page hero, `.arc` hero atmosphere layer,
`.cta7` closing call to action, `.tier`/`.t1-t3` package cards, `.tk` check dot, `.ln` placeholder line,
`.dc` annotation dot, `.pill` annotation label, `.wr` row, `.n` numeral, `.st` step, `.sp`/`.sph`/`.spb` process step (item, header, body),
`.ms` payment milestone, `.fk`/`.fo` fork and option, `.cp`/`.cn` checkpoint line and node, `.pw`/`.pn2` path and path node,
`.ck2` estimator checklist, `.cg` checklist groups, `.vh` visually hidden, `.pz` pause button.

For new components use a plain, descriptive name (for example `.pricing-card`), and take every value from a token.

## Known gaps

- Roughly 200 short legacy class names remain. They are documented above rather than renamed, because renaming touches every page and script.
- Component spacing (padding, margins, gaps) still uses pixel values inside components. Section, container and gutter spacing is tokenized.
- Breakpoints are repeated as literals in media queries (CSS cannot read variables there).


## Motion rules

1. **Feedback is instant and small.** Every pressable has an `:active` state (scale .96 to .985, 120 ms, ease-out). Hover color changes run 150 ms and only on devices that can hover (`(hover:hover) and (pointer:fine)`).
2. **Animate to explain, never to decorate.** Allowed purposes: feedback, spatial consistency, state change, preventing a jarring swap, explanation, and delight only on rare moments (the first view of a page, a sent request, a finished checklist).
3. **Never animate what people read or compute.** Calculator results, estimator bars and checklist counts update instantly.
4. **Never animate keyboard-driven actions.** The skip link and focus changes are instant.
5. **Only transform and opacity move.** (Accordions use the browser's native `::details-content` height transition where supported.)
6. **Theme change crossfades slowly, and only while toggling.** `script.js` adds `html.theming` for 1.5 s. Normal hovers are never slowed down.
7. **Reduced motion is gentler, not zero.** Movement goes, short opacity fades stay, the marquee stops and its pause button hides.
8. **Reduced transparency and more contrast are honored.** The header turns solid, and borders strengthen.

## Where motion lives

| Moment | How | Notes |
|---|---|---|
| Hero entrance | `rise` keyframes, staggered 80 ms | Once per page view |
| Cards and sections entering | `animation-timeline: view()` reveal, `reveal` keyframes | Progressive: browsers without it show everything immediately |
| Header glass | `::before` layer fades in over the first 80 px of scroll (`animation-timeline: scroll()`) | Solid at all times without support |
| Panel and wizard content swaps | `window.__enter(el)` adds `.enter` (`swap-in`, 220 ms) | Only after the page has loaded |
| Mobile menu | `menu-in` from the top, `--ease-drawer` | |
| Accordions | `::details-content` size and opacity transition | |
| Request sent | `.rs.sent` check icon pops in (`pop-in`, 400 ms) | Rare moment |
| Home cards marquee | CSS loop with a visible pause button | Static under reduced motion |

## Mobile layer (section 5c of styles.css)

Tap highlight removed with `:active` feedback added, `touch-action: manipulation`, long-press selection off on controls only,
16px minimum input text, `100svh` hero, safe-area padding on all four sides, `interactive-widget=resizes-content` in the viewport tag,
a per-scheme `theme-color`, the nav collapsing into a menu below 960px, and full-width main buttons below 480px.
