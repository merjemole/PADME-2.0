const carousel = document.querySelector('.carousel');
const images = Array.from(carousel.children);

// Duplicera bilder för att skapa kontinuitet
images.forEach(image => {
    const clone = image.cloneNode(true);
    carousel.appendChild(clone);
});

// Beräkna animationens bredd
const imageWidth = images[0].offsetWidth + 40; // Bredd + gap (250px + 40px)
let scrollPosition = 0;

// Starta animationen
function startCarousel() {
    scrollPosition -= 1; // Ändra detta värde för snabbare/långsammare rullning
    if (scrollPosition <= -imageWidth * images.length) {
        scrollPosition = 0; // Återställ till början när alla bilder rullat
    }
    carousel.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(startCarousel);
}

// Initiera karusellen
startCarousel();
