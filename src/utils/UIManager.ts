export class UIManager {
  private readonly textarea: HTMLTextAreaElement
  private readonly resultsTextarea: HTMLTextAreaElement
  private readonly typeRadio: HTMLInputElement[]
  private readonly qualityRadio: HTMLInputElement[]
  private readonly folderInput: HTMLInputElement

  constructor() {
    this.textarea = document.getElementById('myTextarea') as HTMLTextAreaElement
    this.resultsTextarea = document.getElementById(
      'Results',
    ) as HTMLTextAreaElement
    this.typeRadio = Array.from(document.getElementsByName('type')).map(
      (e) => e as HTMLInputElement,
    )
    this.qualityRadio = Array.from(document.getElementsByName('quality')).map(
      (e) => e as HTMLInputElement,
    )
    this.folderInput = document.getElementById('folder') as HTMLInputElement
  }

  getURLs() {
    return this.textarea.value.split('\n')
  }

  getType() {
    const checkedRadio = this.typeRadio.find((radio) => radio.checked)
    return checkedRadio ? checkedRadio.value : ''
  }

  getQuality() {
    const checkedRadio = this.qualityRadio.find((radio) => radio.checked)
    return checkedRadio ? checkedRadio.value : ''
  }

  getFolderName() {
    return this.folderInput.value
  }

  setResults(value: string) {
    this.resultsTextarea.value = value
  }
}
