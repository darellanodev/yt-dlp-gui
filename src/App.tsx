import './App.css'

function App() {

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
      <button id="saveButton">Process</button>
      <br />
      <h4>Result of the commands to execute in yt-dlp</h4>
      <textarea id="Results" rows={5} cols={50} />
    </>
  )
}

export default App

