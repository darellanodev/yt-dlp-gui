export class StringUtils {
    removeDoubleSpace(str) {
      return str.replace(/\s\s+/g, ' ');
    }
}