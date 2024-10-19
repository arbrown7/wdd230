const toggle = document.querySelector('#toggle');
const body = document.body;

toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', toggle.checked);
});
