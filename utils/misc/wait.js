/**
 * Waits for a specified amount of time
 * @param {number} ms - The number of milliseconds to wait
 * @returns {Promise<void>} - A promise that resolves after the specified time
 */
export default function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 