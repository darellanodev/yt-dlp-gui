import { StringUtils } from '../src/utils/StringUtils'

test('getQuality when type is audio and quality is high', () => {
  const stringUtils = new StringUtils()
  const result = stringUtils.removeDoubleSpace('yt-dlp.exe  "exampleURL"')
  expect(result).toBe('yt-dlp.exe "exampleURL"')
})
