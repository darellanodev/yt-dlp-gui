import { ParamBuilder } from './utils/ParamBuilder'
import { StringUtils } from './utils/StringUtils'
import { CommandBuilder } from './utils/CommandBuilder'
import { useAppStore } from './store/useAppStore'

function App() {
  const {
    url,
    process,
    type,
    quality,
    folderName,
    results,
    setUrl,
    setProcess,
    setType,
    setQuality,
    setFolderName,
    addResult,
  } = useAppStore()

  const handleClick = () => {
    const paramBuilder = new ParamBuilder()
    const stringUtils = new StringUtils()
    const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

    const command = commandBuilder.buildCommand(url, process, type, quality, folderName)

    addResult(command)
  }

  return (
    <div className="p-4 bg-brand-canvas text-brand-ink">
      <h4 className="text-eyebrow uppercase tracking-[2.52px] text-brand-primary mb-4 font-sans">
        Select the type of process
      </h4>
      <div className="border-b border-hairline mb-4" />
      <div className="flex flex-center justify-center">
        <fieldset className="bg-brand-canvas border border-hairline rounded-card w-full p-6 mb-4 flex flex-center justify-center gap-4">
          <div>
            <input
              type="radio"
              id="single"
              name="process"
              value="single"
              checked={process === 'single'}
              onChange={() => setProcess('single')}
            />
            <label htmlFor="single" className="ml-2">
              Single
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="playlist"
              name="process"
              value="playlist"
              checked={process === 'playlist'}
              onChange={() => setProcess('playlist')}
            />
            <label htmlFor="playlist" className="ml-2">
              Playlist
            </label>
          </div>
        </fieldset>
      </div>

      <h4 className="text-eyebrow uppercase tracking-[2.52px] text-brand-primary mb-4 font-sans">
        Configure the parameters
      </h4>
      <div className="border-b border-hairline mb-4" />
      <div className="flex">
        <fieldset className="bg-brand-canvas border border-hairline rounded-card w-1/3 mr-4 p-6">
          <legend className="font-sans font-semibold text-brand-ink pl-2 pr-2">
            Media type
          </legend>
          <input
            type="radio"
            id="video"
            name="type"
            value="video"
            checked={type === 'video'}
            onChange={() => setType('video')}
          />
          <label htmlFor="video" className="ml-2">
            Video
          </label>
          <br />
          <input
            type="radio"
            id="audio"
            name="type"
            value="audio"
            checked={type === 'audio'}
            onChange={() => setType('audio')}
          />
          <label htmlFor="audio" className="ml-2">
            Audio
          </label>
        </fieldset>
        <fieldset className="bg-brand-canvas border border-hairline rounded-card w-1/3 mr-4 p-6">
          <legend className="font-sans font-semibold text-brand-ink pl-2 pr-2">Quality</legend>
          <input
            type="radio"
            id="normal"
            name="quality"
            value="normal"
            checked={quality === 'normal'}
            onChange={() => setQuality('normal')}
          />
          <label htmlFor="normal" className="ml-2">
            Normal
          </label>
          <br />
          <input
            type="radio"
            id="high"
            name="quality"
            value="high"
            checked={quality === 'high'}
            onChange={() => setQuality('high')}
          />
          <label htmlFor="high" className="ml-2">
            High
          </label>
        </fieldset>
        <fieldset className="bg-brand-canvas border border-hairline rounded-card w-1/3 p-6">
          <legend className="font-sans font-semibold text-brand-ink pl-2 pr-2">
            Output folder (optional)
          </legend>
          <input
            type="text"
            id="folder"
            name="folder"
            placeholder="insert folder"
            className="w-full px-4 py-3 bg-brand-canvas-soft border border-hairline rounded-button text-brand-ink font-body-sm"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </fieldset>
      </div>

      <h4 className="text-eyebrow uppercase tracking-[2.52px] text-brand-primary mt-8 mb-4 font-sans">
        Insert the URL
      </h4>
      <div className="border-b border-hairline mb-4" />
      <input
        type="text"
        id="url"
        className="w-full px-4 py-3 bg-brand-canvas-soft border border-hairline rounded-button text-brand-ink font-body-sm"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        id="saveButton"
        onClick={handleClick}
        className="bg-brand-primary text-brand-on-primary hover:opacity-90 font-button-md py-3 px-4 rounded-button mt-4">
        Add it
      </button>
      <br />
      <h4 className="text-eyebrow uppercase tracking-[2.52px] text-brand-primary mt-8 mb-4 font-sans">
        Result of the commands to execute in yt-dlp
      </h4>
      <div className="border-b border-hairline mb-4" />
      <textarea
        id="Results"
        rows={5}
        cols={50}
        className="w-full px-4 py-3 bg-brand-canvas-soft border border-hairline rounded-card font-mono text-brand-ink min-h-[120px]"
        value={results}
        readOnly
      />
    </div>
  )
}

export default App
