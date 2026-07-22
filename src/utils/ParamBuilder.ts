export class ParamBuilder {
  quality(type: string, quality: string) {
    if (type === 'audio') {
      return quality === 'high' ? '--audio-quality 0' : '-f bestaudio'
    }
    const height = quality
    return `-f "bv*[vcodec^=avc][height<=${height}]+ba[acodec=aac]/b[ext=mp4][height<=${height}]/b[height<=${height}]"`
  }

  jsRuntimes() {
    return '--js-runtimes deno'
  }

  mergeOutputFormat() {
    return '--merge-output-format mp4'
  }

  cookiesFromBrowser(enabled: boolean) {
    return enabled ? '--cookies-from-browser firefox' : ''
  }

  restrictFilenames() {
    return '--restrict-filenames'
  }

  playlistOutputTemplate(type: string) {
    if (type === 'video') {
      return '-o "%%(playlist_title)s/%%(playlist_index)03d - %%(title)s.%%(ext)s"'
    }
    return '-o "%%(playlist_title)s/%%(playlist_index)s - %%(title)s.%%(ext)s"'
  }

  audioFormat() {
    return '-x --audio-format mp3'
  }
}
