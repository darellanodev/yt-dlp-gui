const textarea = document.getElementById('myTextarea');
const saveButton = document.getElementById('saveButton');
const resultsTextarea = document.getElementById('Results');
const typeRadio = document.getElementsByName('type');

saveButton.addEventListener('click', () => {
  const content = textarea.value;
  const lines = content.split('\n');
  let prefix = '';
  let suffix = '';

  typeRadio.forEach(radio => {
    if (radio.checked) {
      if (radio.value === 'audio') {
        prefix = 'yt-dlp -f bestaudio -x --audio-format mp3 --audio-quality 0 "';
        suffix = '" -o "folder1/%%(title)s.%%(ext)s" --cookies-from-browser firefox --restrict-filenames';
      } else if (radio.value === 'video') {
        prefix = 'yt-dlp.exe "https://www.youtube.com/watch?v=vrjCRv2vBqM" -f "';
        suffix = '" -f "best[ext=mp4]/best" --cookies-from-browser firefox --restrict-filenames -o "folder1/%%(title)s.%%(ext)s"';
      }
    }
  });

  const processedLines = lines.map(line => `${prefix} ${line} ${suffix}`);
  const processedContent = processedLines.join('\n');
  resultsTextarea.value = processedContent;
});