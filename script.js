// Function to show navigation when scrolled
function showNav() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 60) {  // Adjust value to your preference
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
    }
}

// Listen for scroll events
window.addEventListener('scroll', showNav);
