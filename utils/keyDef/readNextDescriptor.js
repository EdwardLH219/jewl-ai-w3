/**
 * Reads the next key descriptor from a string
 * @param {string} text - The text to parse
 * @param {number} startingPoint - The index to start parsing from
 * @returns {Object} - Object containing the descriptor and the next index
 */
export default function readNextDescriptor(text, startingPoint = 0) {
  if (!text) return { descriptor: '', nextIndex: 0 };
  
  let index = startingPoint;
  let descriptor = '';
  let inBrackets = false;
  
  while (index < text.length) {
    const char = text[index];
    
    if (char === '[') {
      inBrackets = true;
    } else if (char === ']') {
      inBrackets = false;
    } else if (!inBrackets && char === ' ') {
      break;
    }
    
    descriptor += char;
    index++;
  }
  
  return {
    descriptor: descriptor.trim(),
    nextIndex: index
  };
}