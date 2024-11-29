import { ParamBuilder } from './src/ParamBuilder.js';
import { StringUtils } from './src/StringUtils.js';
import { UIManager } from './src/UIManager.js';
import { CommandBuilder } from './src/CommandBuilder.js';

const uiManager = new UIManager();
const paramBuilder = new ParamBuilder();
const stringUtils = new StringUtils();
const commandBuilder = new CommandBuilder(paramBuilder, stringUtils);

uiManager.saveButton.addEventListener('click', () => {
  const urls = uiManager.getURLs();
  const type = uiManager.getType();
  const quality = uiManager.getQuality();
  const folderName = uiManager.getFolderName();

  const commands = urls.map(url => 
    commandBuilder.buildCommand(url, type, quality, folderName)
  );

  uiManager.setResults(commands.join('\n'));
});