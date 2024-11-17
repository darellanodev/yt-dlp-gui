import { ParamBuilder } from './src/ParamBuilder.js'

const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = Array.from(document.getElementsByName('type'));
const qualityRadio = Array.from(document.getElementsByName('quality'));

function getLinks() {
  return textarea.value.split('\n');
}

saveButton.addEventListener('click', () => {
  let prefix = '';
  let suffix = '';

  const selectedType = typeRadio.find(radio => radio.checked);
  const selectedQuality = qualityRadio.find(radio => radio.checked);
  
  const pb = new ParamBuilder();
  const commonParams = `${pb.quality(selectedType.value, selectedQuality.value)} ${pb.cookiesFromBrowser()} ${pb.restrictFilenames()} ${pb.outputFolder()}` 
  
  if (selectedType.value === 'audio') {
    prefix = 'yt-dlp.exe';
    suffix = `${commonParams} ${pb.audioFormat()}`;
  
  } else if (selectedType.value === 'video') {
    prefix = 'yt-dlp.exe';
    suffix = `${commonParams}`;
  }

  resultsTextarea.value = getLinks().map(line => `${prefix} "${line}" ${suffix}`).join('\n');
});

