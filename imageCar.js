const carousel = document.querySelector('.carousel-container');
const images = carousel.querySelectorAll('img');
const imageCount = images.length;
let counter = 1;

setInterval(() => {
  carousel.style.transform = `translateX(${-400 * counter}px)`;
  counter++;
  if (counter >= imageCount) {
    counter = 0;
    setTimeout(() => {
      carousel.style.transition = 'none';
      carousel.style.transform = 'translateX(0)';
      setTimeout(() => {
        carousel.style.transition = 'transform 2s ease-in-out';
      }, 50);
    }, 8000);
  }
}, 7000);