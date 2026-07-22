import { ParamBuilder } from '../src/utils/ParamBuilder'

test('quality, when type is audio and quality is high, return --audio-quality 0', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('audio', 'high')
  expect(result).toBe('--audio-quality 0')
})

test('quality, when type is audio and quality is normal, return -f bestaudio', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('audio', 'normal')
  expect(result).toBe('-f bestaudio')
})

test('quality, when type is video and quality is 1080, return height<=1080 format string', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('video', '1080')
  expect(result).toBe('-f "bv*[vcodec^=avc][height<=1080]+ba[acodec=aac]/b[ext=mp4][height<=1080]/b[height<=1080]"')
})

test('quality, when type is video and quality is 720, return height<=720 format string', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('video', '720')
  expect(result).toBe('-f "bv*[vcodec^=avc][height<=720]+ba[acodec=aac]/b[ext=mp4][height<=720]/b[height<=720]"')
})

test('quality, when type is video and quality is 480, return height<=480 format string', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('video', '480')
  expect(result).toBe('-f "bv*[vcodec^=avc][height<=480]+ba[acodec=aac]/b[ext=mp4][height<=480]/b[height<=480]"')
})

test('jsRuntimes, when called, return --js-runtimes deno', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.jsRuntimes()
  expect(result).toBe('--js-runtimes deno')
})

test('mergeOutputFormat, when called, return --merge-output-format mp4', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.mergeOutputFormat()
  expect(result).toBe('--merge-output-format mp4')
})

test('cookiesFromBrowser, when enabled, return --cookies-from-browser firefox', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.cookiesFromBrowser(true)
  expect(result).toBe('--cookies-from-browser firefox')
})

test('cookiesFromBrowser, when disabled, return empty string', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.cookiesFromBrowser(false)
  expect(result).toBe('')
})

test('restrictFilenames, when called, return --restrict-filenames', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.restrictFilenames()
  expect(result).toBe('--restrict-filenames')
})

test('playlistOutputTemplate, when type is video, return video template with 03d padding', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.playlistOutputTemplate('video')
  expect(result).toBe('-o "%%(playlist_title)s/%%(playlist_index)03d - %%(title)s.%%(ext)s"')
})

test('playlistOutputTemplate, when type is audio, return audio template without padding', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.playlistOutputTemplate('audio')
  expect(result).toBe('-o "%%(playlist_title)s/%%(playlist_index)s - %%(title)s.%%(ext)s"')
})

test('audioFormat, when called, return -x --audio-format mp3', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.audioFormat()
  expect(result).toBe('-x --audio-format mp3')
})
