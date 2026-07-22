## Context

The yt-dlp GUI is a React + TypeScript + Vite app that generates yt-dlp command strings for the user to copy and run manually. It uses Zustand for state management and has a clean separation between `ParamBuilder` (individual flags), `CommandBuilder` (assembly), and `App.tsx` (UI).

The current command generation was built for an older yt-dlp usage pattern. The user now needs commands with modern flags (`--js-runtimes deno`, `--merge-output-format mp4`), height-based format selection, and playlist-aware output templates. The app also hardcodes `--cookies-from-browser firefox` with no way to disable it.

## Goals / Non-Goals

**Goals:**
- Generate yt-dlp commands matching the user's current real-world usage
- Support resolution-based quality selection (1080p, 720p, 480p) instead of vague Normal/High
- Make `--cookies-from-browser` optional via checkbox
- Add playlist-specific output templates using `%%(playlist_title)s` and `%%(playlist_index)` variables
- Remove the output folder input (no longer needed)
- Clean up dead code (`ParamBuilder.processPlaylist()`)

**Non-Goals:**
- Adding new media types beyond video/audio
- Supporting yt-dlp execution from within the app (still a command generator only)
- Adding 4K/1440p resolution options (can be added later if needed)
- Changing the app's visual design or layout

## Decisions

### 1. Format string as template with HEIGHT variable

**Decision**: The video format string is constructed by interpolating a height value into a fixed template:
```
bv*[vcodec^=avc][height<=HEIGHT]+ba[acodec=aac]/b[ext=mp4][height<=HEIGHT]/b[height<=HEIGHT]
```

**Rationale**: The format string pattern is identical across all resolutions — only the height number changes. A template avoids duplicating the full string for each resolution.

**Alternative considered**: Hardcoding the full format string per resolution. Rejected because it's three copies of the same 80-character string differing by one number.

### 2. Quality values store height as string

**Decision**: Zustand store `quality` field uses `'1080' | '720' | '480'` (string, not number).

**Rationale**: The value is used in string interpolation for the format string and as a radio button value attribute. Keeping it as a string avoids unnecessary casting.

### 3. Cookies as boolean, not string

**Decision**: `cookies: boolean` in the store. When true, adds `--cookies-from-browser firefox`. Browser is hardcoded.

**Rationale**: The user only uses Firefox. A boolean checkbox is simpler than a text input. If more browsers are needed later, this can be expanded.

### 4. Playlist output templates differ by media type

**Decision**: Video playlists use `%%(playlist_index)03d` (zero-padded to 3 digits), audio playlists use `%%(playlist_index)s` (no padding).

**Rationale**: This matches the user's actual usage — video playlists need numeric ordering, audio playlists use a different index format.

### 5. Folder input removed entirely

**Decision**: Delete the folder name input from the UI and remove `folderName` from the Zustand store.

**Rationale**: The user confirmed the output folder input is no longer needed. Playlist output is handled by yt-dlp's own `%%(playlist_title)s` variable.

### 6. Binary name is `yt-dlp` without `.exe`

**Decision**: Command starts with `yt-dlp` not `yt-dlp.exe`.

**Rationale**: Matches cross-platform conventions and the user's current command examples.

## Risks / Trade-offs

- **[Risk] yt-dlp format syntax changes** → The format string is now a template. If yt-dlp deprecates `bv*` or `vcodec^=avc`, only one template string needs updating.
- **[Risk] User wants more resolutions later** → The template approach makes adding 1440p or 4K trivial (add one entry to the quality map). Low risk.
- **[Trade-off] Hardcoded Firefox for cookies** → Simplicity over flexibility. Can be expanded to a dropdown if needed.
- **[Trade-off] No folder input** → User explicitly requested removal. If re-added later, the store field and UI can be restored independently.
