// Get the currently focused element
export const getActiveElement = () => {
  if (typeof document === 'undefined') {
    return null;
  }
  return document.activeElement;
};

export default getActiveElement; 