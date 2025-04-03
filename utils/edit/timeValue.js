/**
 * Formats a time value for input fields.
 * @param {string} value - The time value to format
 * @returns {string} - The formatted time value
 */
export function timeValue(value) {
  if (!value) return '';
  
  // Remove any non-digit characters
  const digits = value.replace(/\D/g, '');
  
  // Format as HH:MM
  if (digits.length <= 2) {
    return digits;
  } else if (digits.length <= 4) {
    return `${digits.slice(0, 2)}:${digits.slice(2)}`;
  }
  
  return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
}

export default timeValue; 