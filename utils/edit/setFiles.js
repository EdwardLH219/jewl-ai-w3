/**
 * Sets files on an input element
 * @param {HTMLInputElement} input - The input element to set files on
 * @param {FileList} files - The files to set
 */
export default function setFiles(input, files) {
  if (!input || !(input instanceof HTMLInputElement)) {
    return;
  }

  // Create a new DataTransfer object
  const dataTransfer = new DataTransfer();

  // Add each file to the DataTransfer object
  Array.from(files).forEach(file => {
    dataTransfer.items.add(file);
  });

  // Set the files on the input element
  input.files = dataTransfer.files;
} 