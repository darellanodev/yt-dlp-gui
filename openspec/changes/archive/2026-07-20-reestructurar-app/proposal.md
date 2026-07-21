## Why

The project currently wraps a pure web app (React + Vite + Tailwind) inside Electron, but the Electron layer adds unnecessary complexity: no IPC communication is actually used beyond a startup log, no native APIs are leveraged, and the build/package step depends on `electron-builder`. Meanwhile, Jest config exists but is dead code — tests already run on Vitest. Removing Electron and dead config simplifies the stack, speeds up dev/build, and reduces dependencies.

## What Changes

- **BREAKING**: Remove Electron entirely — no more desktop app wrapper, the app runs as a regular web app in the browser
- Remove `electron/` directory (main.ts, preload.ts, electron-env.d.ts)
- Remove `electron-builder.json5` and `dist-electron/` build output
- Remove dead Jest configuration (`jest.config.ts`, `jest.setup.ts`, `.babelrc`)
- Remove empty `App.css`
- Simplify `vite.config.ts` by removing `vite-plugin-electron` and `vite-plugin-electron-renderer`
- Remove `ipcRenderer` usage from `src/main.tsx`
- Clean up `package.json`: remove Electron/Jest dependencies, add Zustand, simplify build script
- Refactor `App.tsx` to use Zustand store instead of DOM manipulation via `UIManager.ts`
- Delete `UIManager.ts` (replaced by Zustand state management)
- Update `tsconfig.json` and `.gitignore` to remove Electron references

## Capabilities

### New Capabilities
- `zustand-state`: Centralized form state management using Zustand, replacing direct DOM manipulation in UIManager.ts

### Modified Capabilities

## Impact

- **Dependencies removed**: `electron`, `electron-builder`, `vite-plugin-electron`, `vite-plugin-electron-renderer`, `jest`, `jest-environment-jsdom`, `ts-jest`, `@types/jest`, `.babelrc`
- **Dependencies added**: `zustand`
- **Files deleted**: `electron/`, `electron-builder.json5`, `.babelrc`, `jest.config.ts`, `jest.setup.ts`, `src/App.css`, `dist-electron/`
- **Files modified**: `package.json`, `vite.config.ts`, `tsconfig.json`, `src/main.tsx`, `.gitignore`, `src/App.tsx`
- **Files created**: `src/store/useAppStore.ts`
- **Files deleted**: `src/utils/UIManager.ts`
- **No changes**: `postcss.config.js`, `tailwind.config.js`, `vitest.config.ts`, `tests/*`, `src/utils/CommandBuilder.ts`, `src/utils/ParamBuilder.ts`, `src/utils/StringUtils.ts`, `run.sh`, `run_tests.sh`
