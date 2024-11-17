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
  const selectedQuality = qualityRadio.find(radio => radio.checked);

  const cookiesFromBrowser = paramBuilder.getCookiesFromBrowser();
  const restrictFilenames = paramBuilder.getRestrictFilenames();
  const getOutputFolder = paramBuilder.getOutputFolder();
  const quality = paramBuilder.getQuality(selectedType.value, selectedQuality.value);
  const audioFormat = paramBuilder.getAudioFormat();
  
  if (selectedType.value === 'audio') {
    prefix = 'yt-dlp.exe';
    suffix = `${quality} ${cookiesFromBrowser} ${restrictFilenames} ${getOutputFolder} ${audioFormat}`;
  
  } else if (selectedType.value === 'video') {
    prefix = 'yt-dlp.exe';
    suffix = `${quality} ${cookiesFromBrowser} ${restrictFilenames} ${getOutputFolder}`;
  }

  resultsTextarea.value = getLinks().map(line => `${prefix} "${line}" ${suffix}`).join('\n');
});

