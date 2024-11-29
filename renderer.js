import { ParamBuilder } from './src/ParamBuilder.js'
import { StringUtils } from './src/StringUtils.js'

const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = Array.from(document.getElementsByName('type'));
const qualityRadio = Array.from(document.getElementsByName('quality'));
const folderInput = document.getElementById('folder');

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
  const folderName = folderInput.value;
  return `${pb.quality(getType(), getQuality())} ${pb.cookiesFromBrowser()} ${pb.restrictFilenames()} ${pb.outputFolder(folderName)}` 
}

saveButton.addEventListener('click', () => {
  const stringUtils = new StringUtils();

  resultsTextarea.value = getURLs().map(url => {
    let command = `yt-dlp.exe ${paramsBeforeURL()} "${url}" ${paramsAfterURL()}`;
    return stringUtils.removeDoubleSpace(command); 
  }).join('\n');
});


