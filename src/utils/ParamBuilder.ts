export class ParamBuilder {
  quality(type: string, quality: string) {
    if (type === 'audio') {
      return quality === 'high' ? '--audio-quality 0' : '-f bestaudio'
    } else {
      return quality === 'high'
        ? '-f "bestvideo[ext=mp4]/bestaudio[ext=aac]"'
        : '-f "best[ext=mp4]/best[ext=aac]"'
    }
  }
  cookiesFromBrowser() {
    return '--cookies-from-browser firefox'
  }

  restrictFilenames() {
    return '--restrict-filenames'
  }

  outputFolder(dir: string) {
    if (!dir) {
      return ''
    }
    return `-o "${dir}/%%(title)s.%%(ext)s"`
  }

  audioFormat() {
    return '-x --audio-format mp3'
  }
}
