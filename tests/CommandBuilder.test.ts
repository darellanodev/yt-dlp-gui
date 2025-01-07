import { CommandBuilder } from '../src/utils/CommandBuilder'
import { ParamBuilder } from '../src/utils/ParamBuilder'
import { StringUtils } from '../src/utils/StringUtils'

test('getQuality when type is video and quality is normal', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand(
    'exampleURL',
    'video',
    'normal',
    '',
  )
  expect(result).toBe(
    'yt-dlp.exe "exampleURL" -f "best[ext=mp4]/best[ext=aac]" --cookies-from-browser firefox --restrict-filenames',
  )
})

test('getQuality when type is video and quality is high', () => {
  const paramBuilder = new ParamBuilder()
  const stringUtils = new StringUtils()
  const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

  const result = commandBuilder.buildCommand('exampleURL', 'video', 'high', '')
  expect(result).toBe(
    'yt-dlp.exe "exampleURL" -f "bestvideo[ext=mp4]/bestaudio[ext=aac]" --cookies-from-browser firefox --restrict-filenames',
  )
})
