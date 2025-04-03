/**
 * Gets the current text selection
 * @param {Document} document - The document to get selection from
 * @returns {Selection|null} - The current selection or null if none exists
 */
export function getSelection(document) {
  if (!document) return null;
  return document.getSelection();
}

/**
 * Sets the text selection range
 * @param {HTMLElement} element - The element to set selection in
 * @param {number} start - The start offset
 * @param {number} end - The end offset
 */
export function setSelectionRange(element, start, end) {
  if (!element) return;
  if (element.setSelectionRange) {
    element.setSelectionRange(start, end);
  }
}

/**
 * Gets the selected text
 * @param {Selection} selection - The selection object
 * @returns {string} - The selected text
 */
export function getSelectedText(selection) {
  if (!selection) return '';
  return selection.toString();
}

/**
 * Checks if there is any text selected
 * @param {Selection} selection - The selection object
 * @returns {boolean} - True if there is text selected
 */
export function hasSelection(selection) {
  if (!selection) return false;
  return !selection.isCollapsed;
} 