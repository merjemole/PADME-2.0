const navLinks = document.querySelectorAll('.nav-left a, .nav-right a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#007BFF';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '#333';
    });
});
