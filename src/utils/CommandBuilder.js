export class CommandBuilder {
    constructor(paramBuilder, stringUtils) {
      this.paramBuilder = paramBuilder;
      this.stringUtils = stringUtils;
    }
  
    paramsBeforeURL(type) {
      if (type === 'audio') {
        return this.paramBuilder.audioFormat();
      }
      return '';
    }
  
    paramsAfterURL(type, quality, folderName) {
      return `${this.paramBuilder.quality(type, quality)} ${this.paramBuilder.cookiesFromBrowser()} ${this.paramBuilder.restrictFilenames()} ${this.paramBuilder.outputFolder(folderName)}`;
    }
  
    buildCommand(url, type, quality, folderName) {
      let command = `yt-dlp.exe ${this.paramsBeforeURL(type)} "${url}" ${this.paramsAfterURL(type, quality, folderName)}`;
      return this.stringUtils.removeDoubleSpace(command).trim();
    }
  }