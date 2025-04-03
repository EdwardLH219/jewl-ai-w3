// Clipboard utility functions
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
};

export const attachClipboardStubToView = (view) => {
  if (!view.navigator) {
    view.navigator = {};
  }
  if (!view.navigator.clipboard) {
    view.navigator.clipboard = {
      writeText: () => Promise.resolve(),
      readText: () => Promise.resolve('')
    };
  }
};

export default {
  copyToClipboard,
  attachClipboardStubToView
}; 