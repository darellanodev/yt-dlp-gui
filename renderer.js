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

function getPrefix() {
  const pb = new ParamBuilder();
  if (getType() === 'audio') {
    return pb.audioFormat();
  }
  return ''
}

function getParams() {
  const pb = new ParamBuilder();
  return `${pb.quality(getType(), getQuality())} ${pb.cookiesFromBrowser()} ${pb.restrictFilenames()} ${pb.outputFolder()}` 
}

saveButton.addEventListener('click', () => {
  resultsTextarea.value = getLinks().map(line => `yt-dlp.exe ${getPrefix()} "${line}" ${getParams()}`).join('\n');
});


