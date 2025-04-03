/**
 * Finds the closest ancestor element (including the element itself) that matches the predicate.
 * @param {HTMLElement} element - The starting element
 * @param {function(HTMLElement): boolean} predicate - Function that tests if an element matches
 * @returns {HTMLElement|null} - The closest matching element or null if none found
 */
export function findClosest(element, predicate) {
  if (!element) return null;
  
  let current = element;
  while (current) {
    if (predicate(current)) {
      return current;
    }
    current = current.parentElement;
  }
  
  return null;
}

export default findClosest; 