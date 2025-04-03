/**
 * Enforces a maximum length on an input value
 * @param {string} value - The input value to check
 * @param {number} maxLength - The maximum allowed length
 * @returns {string} The truncated value if it exceeds maxLength, otherwise the original value
 */
export default function maxLength(value, maxLength) {
  if (!value || typeof value !== 'string') {
    return value;
  }
  return value.slice(0, maxLength);
} 