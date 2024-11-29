export class ParamBuilder {
    quality (type, quality) {
        if (type === 'audio') {
          return quality === 'high' ? '--audio-quality 0' : '-f bestaudio';
        } else {
          return quality === 'high' ? '-f "bestvideo+bestaudio[ext=m4a]"' : '-f "best[ext=mp4]/best"';
        }
      }
    cookiesFromBrowser () {
        return '--cookies-from-browser firefox';
    }
    
    restrictFilenames () {
        return '--restrict-filenames';
    }

    outputFolder (dir) {
      if (!dir) {
        return '';
      }
      return `-o "${dir}/%%(title)s.%%(ext)s"`;
    }

    audioFormat () {
      return '-x --audio-format mp3';
    }
}