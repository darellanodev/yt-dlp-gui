import { CommandBuilder } from '../src/utils/CommandBuilder'
import { ParamBuilder } from '../src/utils/ParamBuilder'
import { StringUtils } from '../src/utils/StringUtils'

test('buildCommand, when is a single video with normal quality, return the correct command output', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand(
    'exampleURL',
    'single',
    'video',
    'normal',
    '',
  )
  expect(result).toBe(
    'yt-dlp.exe "exampleURL" -f "best[ext=mp4]/best[ext=aac]" --cookies-from-browser firefox --restrict-filenames',
  )
})

test('buildCommand, when is a single video with high quality, return the correct command output', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand(
    'exampleURL',
    'single',
    'video',
    'high',
    '',
  )
  expect(result).toBe(
    'yt-dlp.exe "exampleURL" -f "bestvideo[ext=mp4]/bestaudio[ext=aac]" --cookies-from-browser firefox --restrict-filenames',
  )
})
