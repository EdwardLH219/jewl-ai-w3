/**
 * Checks if an element is of a specific type.
 * @param {HTMLElement} element - The element to check
 * @param {string|string[]} types - The type(s) to check against
 * @returns {boolean} - Whether the element is of the specified type(s)
 */
export function isElementType(element, types) {
  if (!element) return false;
  
  const tagName = element.tagName.toLowerCase();
  if (Array.isArray(types)) {
    return types.includes(tagName);
  }
  return tagName === types.toLowerCase();
}

export default isElementType; 