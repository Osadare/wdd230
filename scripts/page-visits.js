const visitsDisplay = document.getElementById("pageVisits");

let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;

if (visitCount !== 0) {
    visitsDisplay.textContent = `Page Visits: ${visitCount}`;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

visitCount++;

localStorage.setItem("visitCount-ls", visitCount);