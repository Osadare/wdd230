

// Get the current year and populate the currentYear element in the footer
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Get the last modified date and populate the lastModified element in the footer
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;