## Context

The yt-dlp GUI is a React 18 + TypeScript + Vite + Tailwind CSS 3.4 single-component app (`src/App.tsx`, 168 lines) that builds yt-dlp commands via a form UI. It uses Zustand for state and has a utility layer for command building.

The current UI uses generic Tailwind color classes (`bg-gray-900`, `bg-yellow-500`, `bg-blue-500`, `bg-green-500`, `bg-blue-900`) with no coherent visual identity. The project root contains a `DESIGN.md` that defines a complete Voltagent-inspired dark-only design system — canvas colors, accent colors, typography scales, spacing, radii, and component patterns — none of which is currently applied.

The goal is to apply the DESIGN.md design system to the existing UI without changing layout, component hierarchy, logic, or visible text content.

## Goals / Non-Goals

**Goals:**
- Inject the DESIGN.md design system into Tailwind as custom theme tokens
- Load Inter font (display/body) and set up SF Mono for code contexts
- Restyle `App.tsx` to use design system tokens instead of generic Tailwind colors
- Add base dark styles (body bg, radio accent-color, scrollbar)
- Maintain all existing functionality and test compatibility

**Non-Goals:**
- Restructuring the component hierarchy or layout
- Adding new UI sections (nav-bar, hero-band, footer) from DESIGN.md
- Changing any store logic, utility functions, or command building
- Implementing light mode or theme toggling
- Modifying or adding tests
- Installing new npm packages (fonts loaded via CDN)

## Decisions

### D1: Tailwind config as the token injection layer

**Decision:** Add all DESIGN.md tokens as Tailwind `theme.extend` entries in `tailwind.config.js`.

**Rationale:** Tailwind's config is the idiomatic place for design tokens. Using `extend` preserves all default utilities while adding custom ones (`bg-brand-canvas`, `text-brand-primary`, `font-sans`, etc.). This keeps the design system maintainable and avoids hardcoding hex values in class names.

**Alternatives considered:**
- CSS custom properties in `index.css` — works but bypasses Tailwind's utility generation
- `@theme` directive (Tailwind v4) — not available in v3.4

### D2: Google Fonts CDN for Inter

**Decision:** Load Inter via `<link>` tags in `index.html` pointing to Google Fonts CDN.

**Rationale:** Simplest approach with no build step. Inter is the only web font needed (SF Mono is a system font with fallbacks to Menlo/Monaco/Consolas). Preconnect hints minimize latency.

**Alternatives considered:**
- `@fontsource/inter` npm package — adds bundle size and build step, unnecessary for a single font
- Self-hosted fonts — more control but higher maintenance

### D3: Native radio buttons with accent-color

**Decision:** Keep native `<input type="radio">` elements styled with `accent-color: #00d992` and explicit `width`/`height`.

**Rationale:** User preference. Native radios are accessible by default, require zero JS, and work with keyboard navigation. The `accent-color` property provides the green branding with a single CSS rule.

**Alternatives considered:**
- Custom pill/tag radio buttons (DESIGN.md `button-pill-tag`) — more visual polish but significantly more CSS/JS work

### D4: App.tsx restyling via utility class replacement

**Decision:** Replace Tailwind utility classes in-place in `App.tsx`, mapping generic colors to design tokens.

**Rationale:** Since we're keeping the same structure, a direct class swap is the most efficient approach. Each mapping is mechanical (e.g., `bg-gray-900` → `bg-brand-canvas`, `bg-blue-500` → `bg-brand-primary`). No JSX restructuring needed.

**Mapping table (key replacements):**

| Current class | New class |
|---|---|
| `bg-gray-900` (container) | `bg-brand-canvas` |
| `bg-gray-500` (process fieldset) | `bg-brand-canvas border border-hairline rounded-card` |
| `bg-yellow-500` (media type fieldset) | `bg-brand-canvas border border-hairline rounded-card` |
| `bg-blue-500` (quality fieldset) | `bg-brand-canvas border border-hairline rounded-card` |
| `bg-green-500` (folder fieldset) | `bg-brand-canvas border border-hairline rounded-card` |
| `bg-blue-900` (URL input) | `bg-brand-canvas-soft border-hairline rounded-button` |
| `bg-blue-500` (Add button) | `bg-brand-primary text-brand-on-primary rounded-button` |
| `bg-blue-900` (results textarea) | `bg-brand-canvas-soft border-hairline rounded-card font-mono` |
| `text-lg font-bold` (section titles) | `text-eyebrow uppercase text-brand-primary tracking-[2.52px]` |

### D5: Add section dividers with hairline borders

**Decision:** Add `border-b border-hairline` dividers between section eyebrows and content.

**Rationale:** DESIGN.md specifies dashed/hairline dividers between sections. This adds visual separation without shadows or heavy borders.

## Risks / Trade-offs

- **[Risk] Inter font FOUT** → Mitigated by `display=swap` in Google Fonts URL and system font fallback stack
- **[Risk] Generic class replacement may miss edge cases** → Mitigated by visual review after implementation and running existing tests
- **[Risk] Native radio accent-color not supported in old browsers** → Low risk; `accent-color` has 95%+ browser support. Fallback is default browser radio styling.
- **[Trade-off] No new UI sections** → The nav-bar, hero-band, and footer from DESIGN.md are excluded. Can be added in a follow-up change.
