// Function to load HTML content into an element
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load header and footer when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');
}); 