import { ParamBuilder } from './src/ParamBuilder.js'

const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = Array.from(document.getElementsByName('type'));
const qualityRadio = Array.from(document.getElementsByName('quality'));

saveButton.addEventListener('click', () => {
  const content = textarea.value;
  const lines = content.split('\n');
  let prefix = '';
  let suffix = '';

  const paramBuilder = new ParamBuilder();

  const selectedType = typeRadio.find(radio => radio.checked);
  if (selectedType.value === 'audio') {
    const quality = paramBuilder.getQuality(selectedType.value)
    const cookiesFromBrowser = paramBuilder.getCookiesFromBrowser();
    const restrictFilenames = paramBuilder.getRestrictFilenames();

    prefix = `yt-dlp -f bestaudio -x --audio-format mp3 ${quality} "`;
    suffix = `" -o "folder1/%%(title)s.%%(ext)s" ${cookiesFromBrowser} ${restrictFilenames}`;
  } else if (selectedType.value === 'video') {
    const quality = paramBuilder.getQuality(selectedType.value)

    prefix = 'yt-dlp.exe "https://www.youtube.com/watch?v=vrjCRv2vBqM" -f "';
    suffix = `" -f "${quality}" ${cookiesFromBrowser} ${restrictFilenames} -o "folder1/%%(title)s.%%(ext)s"`;
  }

  const processedLines = lines.map(line => `${prefix} ${line} ${suffix}`);
  const processedContent = processedLines.join('\n');
  resultsTextarea.value = processedContent;
});

