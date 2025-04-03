/**
 * Gets the cursor position in an input element
 * @param {HTMLInputElement | HTMLTextAreaElement} element - The input or textarea element
 * @returns {number} The current cursor position
 */
export function getCursorPosition(element) {
  if (!element) return 0;
  return element.selectionStart || 0;
}

/**
 * Sets the cursor position in an input element
 * @param {HTMLInputElement | HTMLTextAreaElement} element - The input or textarea element
 * @param {number} position - The position to set the cursor to
 */
export function setCursorPosition(element, position) {
  if (!element) return;
  if (element.setSelectionRange) {
    element.focus();
    element.setSelectionRange(position, position);
  }
} 