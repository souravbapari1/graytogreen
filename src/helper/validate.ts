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

export function isExpiryValid(expiryDateString: string): boolean {
  // Step 1: Parse the expiry date string into a Date object
  const expiryDate = new Date(expiryDateString);

  // Step 2: Check if the parsed date is valid
  if (isNaN(expiryDate.getTime())) {
    console.error("Invalid expiry date format.");
    return false;
  }

  // Step 3: Get the current date
  const currentDate = new Date();

  // Step 4: Compare the expiry date with the current date
  if (expiryDate > currentDate) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
const expiryDateString = "2024-12-24T23:59:59Z"; // Example of expiry date
const isValid = isExpiryValid(expiryDateString);
console.log(isValid ? "The date is valid." : "The date has expired.");
