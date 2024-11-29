export class UIManager {
    constructor() {
      this.textarea = document.getElementById('myTextarea');
      this.saveButton = document.getElementById('saveButton');
      this.resultsTextarea = document.getElementById('Results');
      this.typeRadio = Array.from(document.getElementsByName('type'));
      this.qualityRadio = Array.from(document.getElementsByName('quality'));
      this.folderInput = document.getElementById('folder');
    }
  
    getURLs() {
      return this.textarea.value.split('\n');
    }
  
    getType() {
      return this.typeRadio.find(radio => radio.checked).value;
    }
  
    getQuality() {
      return this.qualityRadio.find(radio => radio.checked).value;
    }
  
    getFolderName() {
      return this.folderInput.value;
    }
  
    setResults(value) {
      this.resultsTextarea.value = value;
    }
  }