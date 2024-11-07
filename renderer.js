const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = Array.from(document.getElementsByName('type'));
const qualityRadio = Array.from(document.getElementsByName('quality'));

const getQuality = (type) => {
  if (type === 'audio') {
    const quality = qualityRadio.find(radio => radio.checked);
    return quality.value === 'high' ? '--audio-quality 0' : '';
  }
}
saveButton.addEventListener('click', () => {
  const content = textarea.value;
  const lines = content.split('\n');
  let prefix = '';
  let suffix = '';

  const selectedType = typeRadio.find(radio => radio.checked);
  if (selectedType.value === 'audio') {
    const quality = getQuality(selectedType.value)

    prefix = `yt-dlp -f bestaudio -x --audio-format mp3 ${quality} "`;
    suffix = '" -o "folder1/%%(title)s.%%(ext)s" --cookies-from-browser firefox --restrict-filenames';
  } else if (selectedType.value === 'video') {
    prefix = 'yt-dlp.exe "https://www.youtube.com/watch?v=vrjCRv2vBqM" -f "';
    suffix = '" -f "best[ext=mp4]/best" --cookies-from-browser firefox --restrict-filenames -o "folder1/%%(title)s.%%(ext)s"';
  }

  const processedLines = lines.map(line => `${prefix} ${line} ${suffix}`);
  const processedContent = processedLines.join('\n');
  resultsTextarea.value = processedContent;
});

