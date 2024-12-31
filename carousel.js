const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});
