const floatingButton = document.querySelector('.floating-button');
const icon = document.querySelector('.floating-button .material-icons.md-36');


floatingButton.addEventListener('click', () => {
    floatingButton.classList.add('saving');
    icon.textContent = 'Saving...';
    setTimeout(() => {
        floatingButton.classList.remove('saving');
        icon.textContent = 'save';
    }, 2100);
});