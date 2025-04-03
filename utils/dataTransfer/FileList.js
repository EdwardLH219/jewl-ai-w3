/**
 * A class that implements the FileList interface
 */
export default class FileList {
  /**
   * Creates a new FileList instance
   * @param {File[]} files - Array of File objects
   */
  constructor(files = []) {
    this.files = files;
  }

  /**
   * Gets the number of files in the list
   * @returns {number} - The length of the file list
   */
  get length() {
    return this.files.length;
  }

  /**
   * Gets a file at the specified index
   * @param {number} index - The index of the file to get
   * @returns {File|undefined} - The file at the specified index
   */
  item(index) {
    return this.files[index];
  }

  /**
   * Gets a file at the specified index
   * @param {number} index - The index of the file to get
   * @returns {File|undefined} - The file at the specified index
   */
  [Symbol.iterator]() {
    return this.files[Symbol.iterator]();
  }
} 