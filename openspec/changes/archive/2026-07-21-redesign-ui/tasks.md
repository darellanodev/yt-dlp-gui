## 1. Tailwind Config — Design Tokens

- [x] 1.1 Add color tokens (`brand-primary`, `brand-canvas`, `brand-ink`, `brand-hairline`, etc.) to `tailwind.config.js` under `theme.extend.colors`
- [x] 1.2 Add font family tokens (`fontFamily.sans` for Inter, `fontFamily.mono` for SF Mono) to `tailwind.config.js`
- [x] 1.3 Add typography scale tokens (`display-xl` through `button-md`) to `tailwind.config.js` under `theme.extend.fontSize`
- [x] 1.4 Add spacing tokens (`xxs`, `xs`), radius tokens (`card`, `button`, `chip`, `pill`), and border width tokens (`hairline`, `card-emph`) to `tailwind.config.js`

## 2. Fonts & Base Styles

- [x] 2.1 Add Google Fonts `<link>` tags for Inter (weights 400, 500, 600, 700) with preconnect in `index.html`
- [x] 2.2 Add `@layer base` styles in `src/index.css`: body background (`bg-brand-canvas`), font (`font-sans`), antialiasing
- [x] 2.3 Add native radio button styling in `src/index.css`: `accent-color: #00d992`, explicit width/height
- [x] 2.4 Add dark webkit scrollbar styles in `src/index.css`

## 3. App.tsx Visual Restyling

- [x] 3.1 Restyle outermost container: replace `bg-gray-900 text-white` with `bg-brand-canvas text-brand-ink`
- [x] 3.2 Restyle process type fieldset: replace `bg-gray-500` with `bg-brand-canvas border border-hairline rounded-card p-6`
- [x] 3.3 Restyle media type, quality, and folder name fieldsets: replace generic background colors with `bg-brand-canvas border border-hairline rounded-card p-6`
- [x] 3.4 Restyle section legend/heading labels: replace `text-lg font-bold` with `text-eyebrow uppercase tracking-[2.52px] text-brand-primary`
- [x] 3.5 Restyle text inputs (folder name): replace `bg-green-900` with `bg-brand-canvas-soft border border-hairline rounded-button`
- [x] 3.6 Restyle URL input: replace `bg-blue-900` with `bg-brand-canvas-soft border border-hairline rounded-button`
- [x] 3.7 Restyle "Add it" button: replace `bg-blue-500 hover:bg-blue-700` with `bg-brand-primary text-brand-on-primary hover:opacity-90 rounded-button font-button-md`
- [x] 3.8 Restyle results textarea: replace `bg-blue-900` with `bg-brand-canvas-soft border border-hairline rounded-card font-mono`
- [x] 3.9 Add `border-b border-hairline` divider between section eyebrows and their content

## 4. Verification

- [x] 4.1 Run `pnpm run test` and confirm all tests pass without modification
- [x] 4.2 Run `pnpm run build` (or `pnpm run dev`) and visually verify the UI renders correctly with dark theme, green accent, Inter font, and hairline borders
