/**
 * Gets the level of a DOM node in the document tree
 * @param {Node} node - The DOM node
 * @returns {number} - The level of the node (0 for root, 1 for direct children, etc.)
 */
export default function level(node) {
  if (!node) return 0;
  let level = 0;
  let current = node;
  while (current.parentNode) {
    level++;
    current = current.parentNode;
  }
  return level;
} 