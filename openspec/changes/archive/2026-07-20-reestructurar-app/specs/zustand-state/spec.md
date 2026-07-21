## ADDED Requirements

### Requirement: Zustand store manages all form state
The application SHALL use a Zustand store (`useAppStore`) as the single source of truth for all form fields: URL, process type, media type, quality, folder name, and command results.

#### Scenario: Store initializes with default values
- **WHEN** the application loads
- **THEN** the store SHALL have `url` as empty string, `process` as `'single'`, `type` as `'video'`, `quality` as `'normal'`, `folderName` as empty string, and `results` as empty string

#### Scenario: Form fields read from store
- **WHEN** the App component renders
- **THEN** each form input SHALL display the current value from the Zustand store

### Requirement: Form inputs update store state
Each form input SHALL be two-way bound to the Zustand store via `value` and `onChange` handlers.

#### Scenario: User types URL
- **WHEN** the user types a URL into the URL input field
- **THEN** the store's `url` field SHALL update to match the typed text

#### Scenario: User selects process type
- **WHEN** the user clicks a process radio button (single or playlist)
- **THEN** the store's `process` field SHALL update to the selected value

#### Scenario: User selects media type
- **WHEN** the user clicks a media type radio button (video or audio)
- **THEN** the store's `type` field SHALL update to the selected value

#### Scenario: User selects quality
- **WHEN** the user clicks a quality radio button (normal or high)
- **THEN** the store's `quality` field SHALL update to the selected value

#### Scenario: User types folder name
- **WHEN** the user types a folder name into the folder input field
- **THEN** the store's `folderName` field SHALL update to match the typed text

### Requirement: Command generation uses store values
When the user clicks the "Add it" button, the system SHALL read all form values from the Zustand store and pass them to `CommandBuilder.buildCommand()`.

#### Scenario: Command generated from store state
- **WHEN** the user clicks the "Add it" button
- **THEN** the system SHALL read `url`, `process`, `type`, `quality`, and `folderName` from the store and generate a yt-dlp command

#### Scenario: Generated command appended to results
- **WHEN** a command is successfully generated
- **THEN** the store's `results` field SHALL be updated with the new command appended on a new line

### Requirement: UIManager.ts is removed
The `UIManager` class SHALL be deleted. No code SHALL reference `document.getElementById()` or `document.getElementsByName()` for reading form state.

#### Scenario: No direct DOM reads for state
- **WHEN** the codebase is inspected
- **THEN** there SHALL be no `document.getElementById()` or `document.getElementsByName()` calls in `src/App.tsx` or any store files

### Requirement: Electron is removed
All Electron-related files, configurations, and dependencies SHALL be removed from the project.

#### Scenario: No Electron dependencies
- **WHEN** `package.json` is inspected
- **THEN** it SHALL NOT contain `electron`, `electron-builder`, `vite-plugin-electron`, or `vite-plugin-electron-renderer` in dependencies or devDependencies

#### Scenario: No Electron files
- **WHEN** the project root is inspected
- **THEN** there SHALL be no `electron/` directory, `electron-builder.json5`, or `dist-electron/` directory

#### Scenario: Vite config has no Electron plugin
- **WHEN** `vite.config.ts` is inspected
- **THEN** it SHALL only import and use `@vitejs/plugin-react`, with no Electron-related imports or plugins

### Requirement: Dead Jest configuration is removed
Jest configuration files and dependencies SHALL be removed since the test suite uses Vitest.

#### Scenario: No Jest files
- **WHEN** the project root is inspected
- **THEN** there SHALL be no `jest.config.ts`, `jest.setup.ts`, or `.babelrc` files

#### Scenario: No Jest dependencies
- **WHEN** `package.json` is inspected
- **THEN** it SHALL NOT contain `jest`, `jest-environment-jsdom`, `ts-jest`, or `@types/jest` in devDependencies

### Requirement: Existing tests remain functional
All existing test files in `tests/` SHALL continue to pass without modification.

#### Scenario: Vitest runs all tests successfully
- **WHEN** `pnpm run test` is executed
- **THEN** all existing test files (`App.test.tsx`, `CommandBuilder.test.ts`, `ParamBuilder.test.ts`, `StringUtils.test.ts`) SHALL pass
