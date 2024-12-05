export function isValidURL(urlString: string) {
  try {
    new URL(urlString); // Try to create a new URL object
    return true; // If no error is thrown, it's a valid URL
  } catch (e) {
    return false; // If an error is thrown, it's not a valid URL
  }
}
export function isValidNumber(value: any) {
  // Check if the value is a number and not NaN
  try {
    const num = parseFloat(value);
    return !isNaN(num);
  } catch (error) {
    return false;
  }
}

export function isValidEmail(email: string) {
  // Regular expression for validating an email address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test if the email matches the pattern
  return emailRegex.test(email);
}
