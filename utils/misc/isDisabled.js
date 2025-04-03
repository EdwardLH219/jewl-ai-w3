/**
 * Checks if an element is disabled
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if the element is disabled, false otherwise
 */
export default function isDisabled(element) {
  if (!element) return false;
  return element.disabled === true || element.getAttribute('aria-disabled') === 'true';
} 