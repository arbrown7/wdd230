document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-btn');
    const banner = document.querySelector('.banner');

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();

    // Show banner only if it's Monday (1), Tuesday (2), or Wednesday (3)
    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'block'; // Ensure the banner is displayed on allowed days
    } else {
        banner.style.display = 'none'; // Hide the banner on other days
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
