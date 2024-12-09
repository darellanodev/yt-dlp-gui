export class StringUtils {
  removeDoubleSpace(str: string) {
    return str.replace(/\s\s+/g, ' ')
  }
}
