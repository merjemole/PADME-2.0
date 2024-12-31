const carousel = document.querySelector('.carousel');
const images = Array.from(carousel.children);

// Duplicera innehåll för att skapa en oändlig loop
images.forEach(image => {
    const clone = image.cloneNode(true);
    carousel.appendChild(clone);
});

let scrollPosition = 0;

// Kontinuerlig animation
function startCarousel() {
    scrollPosition -= 1; // Ändra detta värde för att justera hastigheten

    // Om vi har rullat för långt, återställ utan att synas
    if (Math.abs(scrollPosition) >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
    }

    carousel.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(startCarousel);
}

// Initiera karusellen
startCarousel();
