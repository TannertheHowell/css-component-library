const fancyButton = document.querySelector('.fancy-button');
const icon = document.querySelector('.material-icons.md-36');

fancyButton.addEventListener('click', () => {
  fancyButton.classList.add('saving');
  icon.textContent = 'Saving...';
  setTimeout(() => {
    fancyButton.classList.remove('saving');
    icon.textContent = 'save';
  }, 2100);
});