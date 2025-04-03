/**
 * Gets the document from a DOM node
 * @param {Node} node - The DOM node
 * @returns {Document|undefined} - The document object or undefined if not found
 */
export default function getDocumentFromNode(node) {
  if (!node) return undefined;
  return node.ownerDocument || document;
} 