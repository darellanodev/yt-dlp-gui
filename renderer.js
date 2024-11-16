import { ParamBuilder } from './src/ParamBuilder.js'

const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = Array.from(document.getElementsByName('type'));
const qualityRadio = Array.from(document.getElementsByName('quality'));

const getLinks = () => textarea.value.split('\n');

saveButton.addEventListener('click', () => {
  let prefix = '';
  let suffix = '';

  const paramBuilder = new ParamBuilder();

  const selectedType = typeRadio.find(radio => radio.checked);

  const cookiesFromBrowser = paramBuilder.getCookiesFromBrowser();
  const restrictFilenames = paramBuilder.getRestrictFilenames();
  const getOutputFolder = paramBuilder.getOutputFolder();
  
  if (selectedType.value === 'audio') {
    const quality = paramBuilder.getQuality(selectedType.value)

    prefix = `yt-dlp -f bestaudio -x --audio-format mp3 ${quality} "`;
    suffix = `" ${cookiesFromBrowser} ${restrictFilenames} ${getOutputFolder}`;
  } else if (selectedType.value === 'video') {
    const quality = paramBuilder.getQuality(selectedType.value)

    prefix = 'yt-dlp.exe "https://www.youtube.com/watch?v=vrjCRv2vBqM" -f "';
    suffix = `" -f "${quality}" ${cookiesFromBrowser} ${restrictFilenames} ${getOutputFolder}`;
  }

  resultsTextarea.value = getLinks().map(line => `${prefix} ${line} ${suffix}`).join('\n');
});

