## ADDED Requirements

### Requirement: Tailwind config contains design system tokens
The `tailwind.config.js` file SHALL define custom theme tokens under `theme.extend` for all design system values specified in DESIGN.md.

#### Scenario: Color tokens are defined
- **WHEN** `tailwind.config.js` is inspected
- **THEN** it SHALL contain color tokens: `brand-primary` (`#00d992`), `brand-primary-soft`, `brand-primary-deep`, `brand-on-primary` (`#101010`), `brand-canvas` (`#101010`), `brand-canvas-soft` (`#1a1a1a`), `brand-ink` (`#f2f2f2`), `brand-ink-strong` (`#ffffff`), `brand-body` (`#bdbdbd`), `brand-mute` (`#8b949e`), `brand-hairline` (`#3d3a39`), `brand-hairline-soft` (`#b8b3b0`)

#### Scenario: Typography tokens are defined
- **WHEN** `tailwind.config.js` is inspected
- **THEN** it SHALL contain `fontSize` tokens for: `display-xl` (60px), `display-lg` (36px), `display-md` (24px), `display-sm` (20px), `eyebrow` (14px uppercase), `body-lg` (18px), `body-md` (16px), `body-sm` (14px), `caption` (12px), `code` (13px), `button-md` (16px)

#### Scenario: Font family tokens are defined
- **WHEN** `tailwind.config.js` is inspected
- **THEN** it SHALL contain `fontFamily.sans` set to `['Inter', 'system-ui', ...]` and `fontFamily.mono` set to `['SFMono-Regular', 'Menlo', ...]`

#### Scenario: Spacing, radius, and border width tokens are defined
- **WHEN** `tailwind.config.js` is inspected
- **THEN** it SHALL contain `borderRadius` tokens (`card: 8px`, `button: 6px`, `chip: 4px`, `pill: 9999px`), `spacing` tokens (`xxs: 2px`, `xs: 4px`), and `borderWidth` tokens (`hairline: 1px`, `card-emph: 3px`)

### Requirement: Inter font is loaded via Google Fonts
The `index.html` file SHALL load the Inter font from Google Fonts CDN with weights 400, 500, 600, and 700.

#### Scenario: Font link tags are present
- **WHEN** `index.html` `<head>` is inspected
- **THEN** it SHALL contain `<link>` tags for `fonts.googleapis.com` and `fonts.gstatic.com` with `preconnect`, and a CSS request for `Inter` with weights `400;500;600;700&display=swap`

### Requirement: Base dark styles are applied
The `src/index.css` file SHALL define base layer styles for the dark design system.

#### Scenario: Body has canvas background and Inter font
- **WHEN** `src/index.css` `@layer base` is inspected
- **THEN** it SHALL set `body` to `bg-brand-canvas text-brand-ink font-sans antialiased`

#### Scenario: Radio buttons have green accent
- **WHEN** `src/index.css` `@layer base` is inspected
- **THEN** it SHALL set `input[type="radio"]` to `accent-color: #00d992` with `width: 16px` and `height: 16px`

#### Scenario: Scrollbar is dark-styled
- **WHEN** `src/index.css` `@layer base` is inspected
- **THEN** it SHALL contain webkit scrollbar styles with `track: #101010` and `thumb: #3d3a39`

### Requirement: App.tsx uses design system tokens
All Tailwind utility classes in `src/App.tsx` SHALL use design system tokens instead of generic Tailwind colors.

#### Scenario: Container uses canvas color
- **WHEN** the outermost `<div>` in App.tsx is inspected
- **THEN** it SHALL use `bg-brand-canvas` and `text-brand-ink` instead of generic `bg-gray-900` or `text-white`

#### Scenario: Fieldsets use hairline borders and card radius
- **WHEN** any `<fieldset>` in App.tsx is inspected
- **THEN** it SHALL use `bg-brand-canvas border border-hairline rounded-card` instead of generic background colors

#### Scenario: CTA button uses primary accent
- **WHEN** the submit button in App.tsx is inspected
- **THEN** it SHALL use `bg-brand-primary text-brand-on-primary hover:opacity-90 rounded-button` instead of generic `bg-blue-500`

#### Scenario: Inputs use canvas-soft background
- **WHEN** `<input type="text">` and `<textarea>` elements in App.tsx are inspected
- **THEN** they SHALL use `bg-brand-canvas-soft border border-hairline` instead of generic background colors

#### Scenario: Section labels use eyebrow style
- **WHEN** section `<legend>` or heading elements in App.tsx are inspected
- **THEN** they SHALL use `text-eyebrow uppercase tracking-[2.52px] text-brand-primary` instead of generic `text-lg font-bold`

#### Scenario: Results textarea uses code font
- **WHEN** the results `<textarea>` in App.tsx is inspected
- **THEN** it SHALL use `font-mono` to apply the SF Mono/monospace font family

### Requirement: Existing tests pass without modification
All test files in `tests/` SHALL continue to pass after the visual redesign.

#### Scenario: App tests pass
- **WHEN** `pnpm run test` is executed
- **THEN** `tests/App.test.tsx` SHALL pass (all `getByText` assertions succeed because visible text content is unchanged)

#### Scenario: Utility tests pass
- **WHEN** `pnpm run test` is executed
- **THEN** `tests/ParamBuilder.test.ts`, `tests/CommandBuilder.test.ts`, and `tests/StringUtils.test.ts` SHALL pass (no changes to utility code)
