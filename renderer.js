import { ParamBuilder } from './src/ParamBuilder.js'

const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = Array.from(document.getElementsByName('type'));
const qualityRadio = Array.from(document.getElementsByName('quality'));

function getURLs() {
  return textarea.value.split('\n');
}

function getType() {
  return typeRadio.find(radio => radio.checked).value;
}

function getQuality() {
  return qualityRadio.find(radio => radio.checked).value;
}

function paramsBeforeURL() {
  const pb = new ParamBuilder();
  if (getType() === 'audio') {
    return pb.audioFormat();
  }
  return ''
}

function paramsAfterURL() {
  const pb = new ParamBuilder();
  return `${pb.quality(getType(), getQuality())} ${pb.cookiesFromBrowser()} ${pb.restrictFilenames()} ${pb.outputFolder()}` 
}

saveButton.addEventListener('click', () => {
  resultsTextarea.value = getURLs().map(url => `yt-dlp.exe ${paramsBeforeURL()} "${url}" ${paramsAfterURL()}`).join('\n');
});


