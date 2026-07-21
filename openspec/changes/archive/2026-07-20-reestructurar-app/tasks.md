## 1. Remove Electron and dead config

- [x] 1.1 Delete `electron/` directory (main.ts, preload.ts, electron-env.d.ts)
- [x] 1.2 Delete `electron-builder.json5` and `dist-electron/`
- [x] 1.3 Delete `.babelrc`, `jest.config.ts`, `jest.setup.ts`
- [x] 1.4 Delete `src/App.css` (empty file)

## 2. Clean up package.json

- [x] 2.1 Remove Electron dependencies: `electron`, `electron-builder`, `vite-plugin-electron`, `vite-plugin-electron-renderer`
- [x] 2.2 Remove Jest dependencies: `jest`, `jest-environment-jsdom`, `ts-jest`, `@types/jest`
- [x] 2.3 Add `zustand` dependency
- [x] 2.4 Update build script from `"tsc && vite build && electron-builder"` to `"tsc && vite build"`

## 3. Simplify Vite and TypeScript config

- [x] 3.1 Rewrite `vite.config.ts` to remove Electron plugin imports and configuration
- [x] 3.2 Update `tsconfig.json` to remove `"electron"` from the `include` array
- [x] 3.3 Update `.gitignore` to remove `dist-electron/` and add `dist/`

## 4. Create Zustand store

- [x] 4.1 Create `src/store/useAppStore.ts` with form state (url, process, type, quality, folderName, results) and actions (setUrl, setProcess, setType, setQuality, setFolderName, addResult)

## 5. Refactor App.tsx and remove UIManager

- [x] 5.1 Remove `window.ipcRenderer` usage from `src/main.tsx`
- [x] 5.2 Refactor `src/App.tsx` to use Zustand store instead of UIManager
- [x] 5.3 Delete `src/utils/UIManager.ts`

## 6. Verify

- [x] 6.1 Run `pnpm run test` and confirm all existing tests pass
- [x] 6.2 Run `pnpm run build` and confirm build succeeds
