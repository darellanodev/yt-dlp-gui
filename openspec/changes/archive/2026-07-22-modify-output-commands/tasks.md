## 1. Zustand Store Updates

- [x] 1.1 Change `quality` type from `'normal'|'high'` to `'1080'|'720'|'480'` with default `'1080'`
- [x] 1.2 Add `cookies: boolean` field with default `false`
- [x] 1.3 Remove `folderName` field and its setter from the store
- [x] 1.4 Add `setCookies` setter action

## 2. ParamBuilder Overhaul

- [x] 2.1 Rewrite `quality()` to generate height-based format strings: `bv*[vcodec^=avc][height<=HEIGHT]+ba[acodec=aac]/b[ext=mp4][height<=HEIGHT]/b[height<=HEIGHT]` for video, keep existing audio behavior
- [x] 2.2 Add `jsRuntimes()` method returning `'--js-runtimes deno'`
- [x] 2.3 Add `mergeOutputFormat()` method returning `'--merge-output-format mp4'`
- [x] 2.4 Make `cookiesFromBrowser()` accept a boolean parameter; return string or empty
- [x] 2.5 Add `playlistOutputTemplate(type)` method returning the `-o` string with `%%(playlist_title)s` and `%%(playlist_index)` variables (video uses `03d` padding, audio does not)
- [x] 2.6 Remove `outputFolder()` method
- [x] 2.7 Remove dead `processPlaylist()` method

## 3. CommandBuilder Assembly Update

- [x] 3.1 Update `paramsBeforeURL()`: add `--js-runtimes deno` for video, add `--yes-playlist` for audio+playlist
- [x] 3.2 Update `paramsAfterURL()` to accept `cookies` and `process` parameters; assemble quality, merge format, cookies (conditional), restrict-filenames, and playlist template (conditional)
- [x] 3.3 Change binary name from `yt-dlp.exe` to `yt-dlp` in `buildCommand()`
- [x] 3.4 Update `buildCommand()` signature to accept `cookies` instead of `folderName`

## 4. App.tsx UI Updates

- [x] 4.1 Replace Quality radio buttons (Normal/High) with resolution options (1080p/720p/480p)
- [x] 4.2 Add cookies checkbox with label "Cookies from browser"
- [x] 4.3 Remove the Output folder fieldset entirely
- [x] 4.4 Update store destructuring: remove `folderName`/`setFolderName`, add `cookies`/`setCookies`
- [x] 4.5 Update `handleClick()` to pass `cookies` instead of `folderName` to `buildCommand()`

## 5. Tests Update

- [x] 5.1 Update `ParamBuilder.test.ts`: new format strings, jsRuntimes, mergeOutputFormat, conditional cookies, playlist templates, removed methods
- [x] 5.2 Update `CommandBuilder.test.ts`: new parameter signatures, binary name, assembled command strings
- [x] 5.3 Run `pnpm run test` and verify all tests pass

## 6. Final Verification

- [x] 6.1 Run `pnpm run build` and verify no TypeScript errors
- [x] 6.2 Manually test in browser: generate video single, video playlist, audio single, audio playlist commands and verify output matches expected format
