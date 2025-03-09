import { ParamBuilder } from '../src/utils/ParamBuilder'

test('quality, when type is audio and quality is high, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('audio', 'high')
  expect(result).toBe('--audio-quality 0')
})

test('quality, when type is video and quality is high, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('video', 'high')
  expect(result).toBe('-f "bestvideo[ext=mp4]/bestaudio[ext=aac]"')
})

test('quality, when type is video and quality is normal, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('video', 'normal')
  expect(result).toBe('-f "best[ext=mp4]/best[ext=aac]"')
})

test('quality, when type is audio and quality is normal, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.quality('audio', 'normal')
  expect(result).toBe('-f bestaudio')
})

test('cookiesFromBrowser, when called, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.cookiesFromBrowser()
  expect(result).toBe('--cookies-from-browser firefox')
})

test('restrictFilenames, when called, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.restrictFilenames()
  expect(result).toBe('--restrict-filenames')
})

test('outputFolder, when pass a string, return the corresponding path', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.outputFolder('folder1')
  expect(result).toBe('-o "folder1/%%(title)s.%%(ext)s"')
})

test('outputFolder, when folder is empty, return nothing', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.outputFolder('')
  expect(result).toBe('')
})

test('audioFormat, when called, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.audioFormat()
  expect(result).toBe('-x --audio-format mp3')
})

test('processPlaylist, when called, return the corresponding parameter', () => {
  const paramBuilder = new ParamBuilder()
  const result = paramBuilder.processPlaylist()
  expect(result).toBe('--yes-playlist')
})
