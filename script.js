const navLinks = document.querySelectorAll('.nav-left a, .nav-right a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#007BFF';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '#333';
    });
});

// Ny kod för att lägga till "blurrad bakgrund" vid scroll
document.addEventListener("scroll", function () {
    const nav = document.querySelector(".collaboration-page .floating-nav");
    if (window.scrollY > 10) { // Lägg till klass när man skrollar mer än 10px
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
