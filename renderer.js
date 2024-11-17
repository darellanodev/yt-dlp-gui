import { ParamBuilder } from './src/ParamBuilder.js'

const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = Array.from(document.getElementsByName('type'));
const qualityRadio = Array.from(document.getElementsByName('quality'));

function getLinks() {
  return textarea.value.split('\n');
}

function getType() {
  return typeRadio.find(radio => radio.checked).value;
}

function getQuality() {
  return qualityRadio.find(radio => radio.checked).value;
}

saveButton.addEventListener('click', () => {
  let prefix = '';
  let suffix = '';
  
  const pb = new ParamBuilder();
  const commonParams = `${pb.quality(getType(), getQuality())} ${pb.cookiesFromBrowser()} ${pb.restrictFilenames()} ${pb.outputFolder()}` 
  
  if (getType() === 'audio') {
    prefix = 'yt-dlp.exe';
    suffix = `${commonParams} ${pb.audioFormat()}`;
  
  } else if (getType() === 'video') {
    prefix = 'yt-dlp.exe';
    suffix = `${commonParams}`;
  }

  resultsTextarea.value = getLinks().map(line => `${prefix} "${line}" ${suffix}`).join('\n');
});

