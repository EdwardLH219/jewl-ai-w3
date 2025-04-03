/**
 * Checks if an element is editable
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if the element is editable
 */
export default function isEditable(element) {
  if (!element) return false;
  
  // Check if element is contentEditable
  if (element.contentEditable === 'true') return true;
  
  // Check if element is an input or textarea
  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    return !element.readOnly && !element.disabled;
  }
  
  return false;
} 