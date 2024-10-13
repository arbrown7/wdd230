const hamburger = document.querySelector('.hamburger');
const navBottom = document.querySelector('.nav-bottom');

hamburger.addEventListener('click', () => {
    navBottom.classList.toggle('active');
});
