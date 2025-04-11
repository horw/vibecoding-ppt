// Main JavaScript for Chinese Flashcard App

// Add active class to current nav item
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        // Skip the home link for other pages
        if (link.getAttribute('href') === '/' && currentPath !== '/') {
            return;
        }
        
        // Add active class if the href matches the current path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    if (alerts.length > 0) {
        setTimeout(() => {
            alerts.forEach(alert => {
                alert.style.transition = 'opacity 1s';
                alert.style.opacity = '0';
                setTimeout(() => {
                    alert.remove();
                }, 1000);
            });
        }, 5000);
    }
});
