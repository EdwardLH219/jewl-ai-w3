/**
 * Checks if an element is content editable
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if the element is content editable, false otherwise
 */
export default function isContentEditable(element) {
  if (!element) return false;
  return element.isContentEditable || element.contentEditable === 'true';
} 