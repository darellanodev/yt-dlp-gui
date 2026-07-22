import { CommandBuilder } from '../src/utils/CommandBuilder'
import { ParamBuilder } from '../src/utils/ParamBuilder'
import { StringUtils } from '../src/utils/StringUtils'

test('buildCommand, single video 1080p no cookies', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand('exampleURL', 'single', 'video', '1080', false)
  expect(result).toBe(
    'yt-dlp --js-runtimes deno "exampleURL" -f "bv*[vcodec^=avc][height<=1080]+ba[acodec=aac]/b[ext=mp4][height<=1080]/b[height<=1080]" --merge-output-format mp4 --restrict-filenames',
  )
})

test('buildCommand, single video 720p with cookies', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand('exampleURL', 'single', 'video', '720', true)
  expect(result).toBe(
    'yt-dlp --js-runtimes deno "exampleURL" -f "bv*[vcodec^=avc][height<=720]+ba[acodec=aac]/b[ext=mp4][height<=720]/b[height<=720]" --merge-output-format mp4 --cookies-from-browser firefox --restrict-filenames',
  )
})

test('buildCommand, playlist video 1080p no cookies', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand('exampleURL', 'playlist', 'video', '1080', false)
  expect(result).toBe(
    'yt-dlp --js-runtimes deno "exampleURL" -f "bv*[vcodec^=avc][height<=1080]+ba[acodec=aac]/b[ext=mp4][height<=1080]/b[height<=1080]" --merge-output-format mp4 --restrict-filenames -o "%%(playlist_title)s/%%(playlist_index)03d - %%(title)s.%%(ext)s"',
  )
})

test('buildCommand, single audio', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand('exampleURL', 'single', 'audio', 'normal', false)
  expect(result).toBe(
    'yt-dlp -x --audio-format mp3 "exampleURL" --restrict-filenames',
  )
})

test('buildCommand, playlist audio', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand('exampleURL', 'playlist', 'audio', 'normal', false)
  expect(result).toBe(
    'yt-dlp -x --audio-format mp3 --yes-playlist "exampleURL" --restrict-filenames -o "%%(playlist_title)s/%%(playlist_index)s - %%(title)s.%%(ext)s"',
  )
})
