document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-btn');
    const banner = document.querySelector('.banner');

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
