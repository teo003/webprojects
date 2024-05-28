// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with the ID 'currentYear'
const yearElement = document.getElementById('currentYear');

// Update the content of the element to the current year
if (yearElement) {
  yearElement.textContent = currentYear;
}