const letterSpinner = document.querySelector('.letterSpinner');
const loadingText = 'loading';
let currentLetter = 0;

setInterval(() => {
  if (currentLetter > loadingText.length) {
    return;
  }
  letterSpinner.textContent = loadingText.slice(0, currentLetter).toUpperCase() + loadingText.slice(currentLetter);
  currentLetter += 1;
}, 600);