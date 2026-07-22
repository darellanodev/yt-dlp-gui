import { ParamBuilder } from './ParamBuilder'
import { StringUtils } from './StringUtils'

export class CommandBuilder {
  private paramBuilder: ParamBuilder
  private stringUtils: StringUtils

  constructor(paramBuilder: ParamBuilder, stringUtils: StringUtils) {
    this.paramBuilder = paramBuilder
    this.stringUtils = stringUtils
  }

  paramsBeforeURL(process: string, type: string) {
    const parts: string[] = []

    if (type === 'video') {
      parts.push(this.paramBuilder.jsRuntimes())
    }

    if (type === 'audio') {
      parts.push(this.paramBuilder.audioFormat())
    }

    if (process === 'playlist' && type === 'audio') {
      parts.push('--yes-playlist')
    }

    return parts.join(' ')
  }

  paramsAfterURL(type: string, quality: string, cookies: boolean, process: string) {
    const parts: string[] = []

    if (type === 'video') {
      parts.push(this.paramBuilder.quality(type, quality))
      parts.push(this.paramBuilder.mergeOutputFormat())
    }

    const cookiesFlag = this.paramBuilder.cookiesFromBrowser(cookies)
    if (cookiesFlag) {
      parts.push(cookiesFlag)
    }

    parts.push(this.paramBuilder.restrictFilenames())

    if (process === 'playlist') {
      parts.push(this.paramBuilder.playlistOutputTemplate(type))
    }

    return parts.join(' ')
  }

  buildCommand(
    url: string,
    process: string,
    type: string,
    quality: string,
    cookies: boolean,
  ) {
    const before = this.paramsBeforeURL(process, type)
    const after = this.paramsAfterURL(type, quality, cookies, process)
    const command = `yt-dlp ${before} "${url}" ${after}`
    return this.stringUtils.removeDoubleSpace(command).trim()
  }
}
