// Load and insert components
function loadComponent(componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(html => {
            // Create a temporary div to parse the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            // Get the actual content (excluding the div wrapper)
            const content = tempDiv.firstElementChild;
            
            // Insert at the appropriate position
            if (componentPath.includes('header.html')) {
                document.body.insertBefore(content, document.body.firstChild);
            } else if (componentPath.includes('footer.html')) {
                document.body.appendChild(content);
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load components when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('/header.html');
    loadComponent('/footer.html');
}); 