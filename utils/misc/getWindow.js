/**
 * Gets the window object from a node
 * @param {Node} node - The node to get the window from
 * @returns {Window} The window object
 */
function getWindowFn(node) {
  if (!node) {
    return window;
  }
  
  if (node.ownerDocument) {
    return node.ownerDocument.defaultView || window;
  }
  
  return window;
}

const getWindow = {
  getWindow: getWindowFn
};

module.exports = getWindow; 