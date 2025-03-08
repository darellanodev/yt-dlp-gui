export class UIManager {
  private readonly urlInput: HTMLInputElement
  private readonly resultsTextarea: HTMLTextAreaElement
  private readonly typeRadio: HTMLInputElement[]
  private readonly qualityRadio: HTMLInputElement[]
  private readonly folderInput: HTMLInputElement

  constructor() {
    this.urlInput = document.getElementById('url') as HTMLInputElement
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

  getURL() {
    return this.urlInput.value
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

  addResults(value: string) {
    this.resultsTextarea.value += value + '\n'
  }
}
