## Why

The current UI uses generic Tailwind colors (`bg-gray-900`, `bg-yellow-500`, `bg-blue-500`, `bg-green-500`) with no coherent visual identity. The project has a complete DESIGN.md defining a Voltagent-inspired dark-only design system (canvas `#101010`, accent `#00d992`, Inter font, hairline borders) that is not applied. Applying it will make the app look professional and polished while keeping the existing functional structure intact.

## What Changes

- **Tailwind config**: Inject ~30 custom design tokens (colors, typography, spacing, radii, border widths) from DESIGN.md into `tailwind.config.js`
- **Fonts**: Load Inter via Google Fonts in `index.html`; define font family tokens in Tailwind config
- **Base styles**: Add body background (`#101010`), dark scrollbar, and native radio button `accent-color: #00d992` in `index.css`
- **App.tsx restyling**: Replace all generic Tailwind color/utility classes with design system tokens — containers become `bg-brand-canvas`, cards get `border border-hairline rounded-card`, inputs get `bg-brand-canvas-soft border-hairline`, the CTA button becomes `bg-brand-primary text-brand-on-primary`, sections use `text-eyebrow uppercase` labels, and dividers use `border-hairline`
- **No structural changes**: Layout, component hierarchy, and visible text remain identical
- **No logic changes**: Store, utils, commands, and tests are untouched

## Capabilities

### New Capabilities
- `design-system`: Tailwind config tokens, font loading, base CSS styles, and App.tsx visual restyling applying the DESIGN.md design system

### Modified Capabilities

_(none — zustand-state requirements are unaffected)_

## Impact

- **Files modified**: `tailwind.config.js`, `index.html`, `src/index.css`, `src/App.tsx`
- **Files NOT modified**: `src/store/useAppStore.ts`, `src/utils/*`, `tests/*`, `package.json`
- **Dependencies**: No new npm packages — only a Google Fonts CDN link in `index.html`
- **Tests**: All existing tests pass unchanged (visible text content is preserved)
- **Breaking changes**: None — purely visual
