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
<div className="p-4 bg-gray-900 text-white">
  <h4 className="text-lg font-bold mb-4">Configure the parameters</h4>
  <div className="flex">
    <fieldset className="bg-yellow-500 w-1/3 mr-4 p-4">
      <legend className="font-bold bg-yellow-500 pl-2 pr-2">Media type</legend>
      <input type="radio" id="video" name="type" value="video" defaultChecked />
      <label htmlFor="video" className="ml-2">Video</label>
      <br />
      <input type="radio" id="audio" name="type" value="audio" />
      <label htmlFor="audio" className="ml-2">Audio</label>
    </fieldset>
    <fieldset className="bg-blue-500 w-1/3 mr-4 p-4">
      <legend className="font-bold bg-blue-500 pl-2 pr-2">Quality</legend>
      <input type="radio" id="normal" name="quality" value="normal" defaultChecked />
      <label htmlFor="normal" className="ml-2">Normal</label>
      <br />
      <input type="radio" id="high" name="quality" value="high" />
      <label htmlFor="high" className="ml-2">High</label>
    </fieldset>
    <fieldset className="bg-green-500 w-1/3 p-4">
      <legend className="font-bold bg-green-500 pl-2 pr-2">Output folder (optional)</legend>
      <input type="text" id="folder" name="folder" placeholder="insert folder" className="w-full p-2 bg-green-900" />
    </fieldset>
  </div>

  <h4 className="text-lg font-bold mt-8 mb-4">Insert the URLs</h4>
  <textarea id="myTextarea" rows={5} cols={50} className="w-full p-4 bg-blue-900" />
  <button id="saveButton" onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Process</button>
  <br />
  <h4 className="text-lg font-bold mt-8 mb-4">Result of the commands to execute in yt-dlp</h4>
  <textarea id="Results" rows={5} cols={50} className="w-full p-4 bg-blue-900" />
</div>
  )
}

export default App

