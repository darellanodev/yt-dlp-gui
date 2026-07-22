## ADDED Requirements

### Requirement: Video format selection uses height-based filtering
The system SHALL generate format strings using the pattern `bv*[vcodec^=avc][height<=HEIGHT]+ba[acodec=aac]/b[ext=mp4][height<=HEIGHT]/b[height<=HEIGHT]` where HEIGHT is determined by the user's quality selection.

#### Scenario: 1080p video format
- **WHEN** the user selects video type and 1080p quality
- **THEN** the format string SHALL be `bv*[vcodec^=avc][height<=1080]+ba[acodec=aac]/b[ext=mp4][height<=1080]/b[height<=1080]`

#### Scenario: 720p video format
- **WHEN** the user selects video type and 720p quality
- **THEN** the format string SHALL be `bv*[vcodec^=avc][height<=720]+ba[acodec=aac]/b[ext=mp4][height<=720]/b[height<=720]`

#### Scenario: 480p video format
- **WHEN** the user selects video type and 480p quality
- **THEN** the format string SHALL be `bv*[vcodec^=avc][height<=480]+ba[acodec=aac]/b[ext=mp4][height<=480]/b[height<=480]`

### Requirement: Video commands include JS runtime flag
The system SHALL include `--js-runtimes deno` in all video commands, regardless of process type or quality.

#### Scenario: Single video command includes JS runtime
- **WHEN** the user generates a command for a single video
- **THEN** the command SHALL contain `--js-runtimes deno` before the URL

#### Scenario: Playlist video command includes JS runtime
- **WHEN** the user generates a command for a video playlist
- **THEN** the command SHALL contain `--js-runtimes deno` before the URL

### Requirement: Video commands include merge output format
The system SHALL include `--merge-output-format mp4` in all video commands.

#### Scenario: Single video command includes merge format
- **WHEN** the user generates a command for a single video
- **THEN** the command SHALL contain `--merge-output-format mp4`

#### Scenario: Playlist video command includes merge format
- **WHEN** the user generates a command for a video playlist
- **THEN** the command SHALL contain `--merge-output-format mp4`

### Requirement: Cookies flag is optional
The system SHALL include `--cookies-from-browser firefox` only when the user has enabled the cookies checkbox.

#### Scenario: Cookies enabled
- **WHEN** the user has the cookies checkbox checked
- **THEN** the command SHALL contain `--cookies-from-browser firefox`

#### Scenario: Cookies disabled
- **WHEN** the user has the cookies checkbox unchecked
- **THEN** the command SHALL NOT contain `--cookies-from-browser firefox`

### Requirement: Restrict filenames is always included
The system SHALL always include `--restrict-filenames` in every generated command.

#### Scenario: Video command includes restrict filenames
- **WHEN** the user generates any video command
- **THEN** the command SHALL contain `--restrict-filenames`

#### Scenario: Audio command includes restrict filenames
- **WHEN** the user generates any audio command
- **THEN** the command SHALL contain `--restrict-filenames`

### Requirement: Playlist output template for video
The system SHALL generate `-o "%%(playlist_title)s/%%(playlist_index)03d - %%(title)s.%%(ext)s"` when the user selects playlist process type with video media.

#### Scenario: Video playlist command includes output template
- **WHEN** the user selects process=playlist and type=video
- **THEN** the command SHALL contain `-o "%%(playlist_title)s/%%(playlist_index)03d - %%(title)s.%%(ext)s"` after the URL

#### Scenario: Single video command has no output template
- **WHEN** the user selects process=single and type=video
- **THEN** the command SHALL NOT contain an `-o` or `--output` flag

### Requirement: Playlist output template for audio
The system SHALL generate `-o "%%(playlist_title)s/%%(playlist_index)s - %%(title)s.%%(ext)s"` when the user selects playlist process type with audio media.

#### Scenario: Audio playlist command includes output template
- **WHEN** the user selects process=playlist and type=audio
- **THEN** the command SHALL contain `-o "%%(playlist_title)s/%%(playlist_index)s - %%(title)s.%%(ext)s"` after the URL

#### Scenario: Single audio command has no output template
- **WHEN** the user selects process=single and type=audio
- **THEN** the command SHALL NOT contain an `-o` or `--output` flag

### Requirement: Audio commands use extraction flags
The system SHALL generate `-x --audio-format mp3` for all audio commands.

#### Scenario: Single audio command
- **WHEN** the user selects type=audio and process=single
- **THEN** the command SHALL contain `-x --audio-format mp3` before the URL

#### Scenario: Playlist audio command
- **WHEN** the user selects type=audio and process=playlist
- **THEN** the command SHALL contain `-x --audio-format mp3` before the URL and `--yes-playlist` before the URL

### Requirement: Playlist mode adds yes-playlist flag
The system SHALL include `--yes-playlist` before the URL when the user selects playlist process type.

#### Scenario: Video playlist command
- **WHEN** the user selects process=playlist and type=video
- **THEN** the command SHALL NOT contain `--yes-playlist` (video playlist uses output template only)

#### Scenario: Audio playlist command
- **WHEN** the user selects process=playlist and type=audio
- **THEN** the command SHALL contain `--yes-playlist` before the URL

### Requirement: Binary name is yt-dlp without extension
The system SHALL start all generated commands with `yt-dlp` (not `yt-dlp.exe`).

#### Scenario: Command uses correct binary name
- **WHEN** any command is generated
- **THEN** the command SHALL start with `yt-dlp ` (followed by a space)
