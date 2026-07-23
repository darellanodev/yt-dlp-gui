## Context

The media-magnet project is a command builder UI for yt-dlp. It currently runs inside Electron (desktop wrapper), but the actual application logic is entirely browser-based: React renders a form, the user fills it in, and a yt-dlp CLI command is generated as text output. No IPC, no native APIs, no filesystem access.

The Electron layer was scaffolded by `create-electron-vite` but never meaningfully used. Meanwhile, `UIManager.ts` bypasses React state entirely by calling `document.getElementById()` — an anti-pattern that makes the app harder to test and maintain.

The test suite already runs on Vitest (Jest config is dead code). Tailwind CSS is used for styling via PostCSS.

## Goals / Non-Goals

**Goals:**

- Remove Electron and all its dependencies from the project
- Remove dead Jest configuration
- Introduce Zustand for centralized form state management
- Refactor App.tsx to use Zustand store instead of DOM manipulation
- Keep existing functionality (command building) unchanged
- Keep existing test files working (they use Vitest already)
- Clean up empty/unnecessary config files

**Non-Goals:**

- Refactoring the command-building logic (ParamBuilder, CommandBuilder, StringUtils)
- Changing the visual design or layout
- Adding routing or multi-page navigation
- Converting to a different styling framework
- Adding new features beyond state management

## Decisions

### 1. Zustand over React Context or Redux

**Choice**: Zustand

**Rationale**: Zustand provides minimal boilerplate, no providers wrapping the app, and simple `set`/`get` semantics. The user has prior experience with it. For a form with ~5 state fields, Redux would be overkill, and React Context + useReducer adds unnecessary nesting.

**Alternatives considered**:

- React Context + useReducer: More verbose, requires context providers, harder to test in isolation
- Redux Toolkit: Too heavy for this scope, steep boilerplate for 5 fields
- No state library (just props): Would require lifting state to App and threading it down — works but doesn't solve the UIManager DOM-coupling problem cleanly

### 2. Zustand store shape

Single flat store with all form fields and actions:

```ts
interface AppState {
  url: string
  process: 'single' | 'playlist'
  type: 'video' | 'audio'
  quality: 'normal' | 'high'
  folderName: string
  results: string
  setUrl: (url: string) => void
  setProcess: (process: 'single' | 'playlist') => void
  setType: (type: 'video' | 'audio') => void
  setQuality: (quality: 'normal' | 'high') => void
  setFolderName: (name: string) => void
  addResult: (command: string) => void
}
```

**Rationale**: One store keeps it simple. No need for slices or middleware. The `addResult` action appends to `results` with a newline, matching current behavior.

### 3. Keep CommandBuilder/ParamBuilder/StringUtils as classes

**Choice**: Leave existing utility classes unchanged.

**Rationale**: These are pure functions with no DOM or framework coupling. They're already well-tested. Converting to standalone functions or a Zustand middleware would add churn with no benefit.

### 4. Delete UIManager.ts entirely

**Choice**: Remove UIManager.ts and replace all its usages with Zustand store reads/writes.

**Rationale**: UIManager is 100% DOM-coupled (`document.getElementById`, `document.getElementsByName`). With Zustand holding state, every getter maps to a store selector and every setter maps to a store action. There is no reason to keep the intermediate abstraction.

### 5. PostCSS config stays

**Choice**: Keep `postcss.config.js` and `autoprefixer`.

**Rationale**: Tailwind CSS requires PostCSS to process `@tailwind` directives. Vite detects `postcss.config.js` automatically. Removing it would break Tailwind.

## Risks / Trade-offs

- **[Risk]** Existing tests reference DOM elements by ID (e.g., `screen.getByLabelText`) → **Mitigation**: Tests use `@testing-library/react` which renders into jsdom. The refactor changes how state flows (store vs DOM reads) but the rendered HTML output stays identical, so existing tests pass without changes.

- **[Risk]** Removing Electron means the app can only run in a browser, not as a desktop app → **Mitigation**: This is intentional. If desktop packaging is needed later, Tauri is a lighter alternative.

- **[Risk]** Zustand store creates a new file structure (`src/store/`) → **Mitigation**: Minimal addition, conventional location for Zustand stores.

- **[Trade-off]** We lose the ability to build a standalone desktop app → **Accepted**: The app never used Electron capabilities anyway.
