import { ParamBuilder } from "./ParamBuilder";
import { StringUtils } from "./StringUtils";

export class CommandBuilder {

    private paramBuilder: ParamBuilder;
    private stringUtils: StringUtils;
    
    constructor(paramBuilder: ParamBuilder, stringUtils: StringUtils) {
      this.paramBuilder = paramBuilder;
      this.stringUtils = stringUtils;
    }
  
    paramsBeforeURL(type: string) {
      if (type === 'audio') {
        return this.paramBuilder.audioFormat();
      }
      return '';
    }
  
    paramsAfterURL(type: string, quality: string, folderName: string) {
      return `${this.paramBuilder.quality(type, quality)} ${this.paramBuilder.cookiesFromBrowser()} ${this.paramBuilder.restrictFilenames()} ${this.paramBuilder.outputFolder(folderName)}`;
    }
  
    buildCommand(url: string, type: string, quality: string, folderName: string) {
      const command: string = `yt-dlp.exe ${this.paramsBeforeURL(type)} "${url}" ${this.paramsAfterURL(type, quality, folderName)}`;
      return this.stringUtils.removeDoubleSpace(command).trim();
    }
  }