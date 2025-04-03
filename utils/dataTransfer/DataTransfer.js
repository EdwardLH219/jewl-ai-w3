/**
 * A utility class to handle data transfer operations
 */
export default class DataTransfer {
  constructor() {
    this.data = {};
    this.dropEffect = 'none';
    this.effectAllowed = 'all';
    this.files = [];
    this.items = [];
    this.types = [];
  }

  /**
   * Sets data for a given format
   * @param {string} format - The format of the data
   * @param {string} data - The data to set
   */
  setData(format, data) {
    this.data[format] = data;
    if (!this.types.includes(format)) {
      this.types.push(format);
    }
  }

  /**
   * Gets data for a given format
   * @param {string} format - The format of the data
   * @returns {string} - The data for the given format
   */
  getData(format) {
    return this.data[format] || '';
  }

  /**
   * Clears all data
   */
  clearData(format) {
    if (format) {
      delete this.data[format];
      this.types = this.types.filter(type => type !== format);
    } else {
      this.data = {};
      this.types = [];
    }
  }
} 