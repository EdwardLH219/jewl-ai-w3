/**
 * Gets the CSS pointer-events value for an element
 * @param {HTMLElement} element - The element to check
 * @returns {string} - The pointer-events value or 'auto' if not set
 */
export default function cssPointerEvents(element) {
  if (!element) return 'auto';
  const computedStyle = window.getComputedStyle(element);
  return computedStyle.pointerEvents || 'auto';
} 