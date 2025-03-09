import { StringUtils } from '../src/utils/StringUtils'

test('removeDoubleSpace, when called, returns the string without the double space', () => {
  const stringUtils = new StringUtils()
  const result = stringUtils.removeDoubleSpace('yt-dlp.exe  "exampleURL"')
  expect(result).toBe('yt-dlp.exe "exampleURL"')
})
