// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
const formattedDate = lastModified.toLocaleString('en-US', options);
document.getElementById('lastModified').textContent = `Last Updated: ${formattedDate}`;