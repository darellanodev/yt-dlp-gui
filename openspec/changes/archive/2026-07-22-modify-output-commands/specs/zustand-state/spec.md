## MODIFIED Requirements

### Requirement: Zustand store manages all form state
The application SHALL use a Zustand store (`useAppStore`) as the single source of truth for all form fields: URL, process type, media type, quality, cookies, and command results.

#### Scenario: Store initializes with default values
- **WHEN** the application loads
- **THEN** the store SHALL have `url` as empty string, `process` as `'single'`, `type` as `'video'`, `quality` as `'1080'`, `cookies` as `false`, and `results` as empty string

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
- **WHEN** the user clicks a quality radio button (1080p, 720p, or 480p)
- **THEN** the store's `quality` field SHALL update to the selected value as a string ('1080', '720', or '480')

#### Scenario: User toggles cookies checkbox
- **WHEN** the user clicks the cookies checkbox
- **THEN** the store's `cookies` field SHALL update to the checkbox's checked state

### Requirement: Command generation uses store values
When the user clicks the "Add it" button, the system SHALL read all form values from the Zustand store and pass them to `CommandBuilder.buildCommand()`.

#### Scenario: Command generated from store state
- **WHEN** the user clicks the "Add it" button
- **THEN** the system SHALL read `url`, `process`, `type`, `quality`, and `cookies` from the store and generate a yt-dlp command

#### Scenario: Generated command appended to results
- **WHEN** a command is successfully generated
- **THEN** the store's `results` field SHALL be updated with the new command appended on a new line

## REMOVED Requirements

### Requirement: User types folder name
**Reason**: The output folder input has been removed from the UI. Playlist output is handled by yt-dlp's `%%(playlist_title)s` variable.
**Migration**: None needed. The `folderName` field is removed from the store and UI.

### Requirement: Quality uses normal/high values
**Reason**: Quality is now resolution-based (1080p, 720p, 480p) instead of vague normal/high labels.
**Migration**: Store `quality` field changes from `'normal'|'high'` to `'1080'|'720'|'480'`.
