import './App.css'
import { ParamBuilder } from './utils/ParamBuilder';
import { StringUtils } from './utils/StringUtils';
import { UIManager } from './utils/UIManager';
import { CommandBuilder } from './utils/CommandBuilder';

function App() {

  const handleClick = () => {
    const uiManager = new UIManager();
    const paramBuilder = new ParamBuilder();
    const stringUtils = new StringUtils();
    const commandBuilder = new CommandBuilder(paramBuilder, stringUtils);

    const urls = uiManager.getURLs();
    const type = uiManager.getType();
    const quality = uiManager.getQuality();
    const folderName = uiManager.getFolderName();
  
    const commands = urls.map((url:string) => 
      commandBuilder.buildCommand(url, type, quality, folderName)
    );
  
    uiManager.setResults(commands.join('\n'));
  }

  return (
    <>
      <h4>Configure the parameters</h4>
      <div style={{ display: 'flex' }}>
        <fieldset style={{ display: 'inline-block' }}>
          <legend>Media type</legend>
          <input type="radio" id="video" name="type" value="video" defaultChecked />
          <label htmlFor="video">Video</label>
          <br />
          <input type="radio" id="audio" name="type" value="audio" />
          <label htmlFor="audio">Audio</label>
        </fieldset>
        <fieldset style={{ display: 'inline-block' }}>
          <legend>Quality</legend>
          <input type="radio" id="normal" name="quality" value="normal" defaultChecked />
          <label htmlFor="normal">Normal</label>
          <br />
          <input type="radio" id="high" name="quality" value="high" />
          <label htmlFor="high">High</label>
        </fieldset>
        <fieldset style={{ display: 'inline-block' }}>
          <legend>Output folder (optional)</legend>
          <input type="text" id="folder" name="folder" placeholder="insert folder" />
        </fieldset>
      </div>

      <h4>Insert the URLs</h4>
      <textarea id="myTextarea" rows={5} cols={50} />
      <button id="saveButton" onClick={handleClick}>Process</button>
      <br />
      <h4>Result of the commands to execute in yt-dlp</h4>
      <textarea id="Results" rows={5} cols={50} />
    </>
  )
}

export default App

