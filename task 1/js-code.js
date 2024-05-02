const btn = document.querySelector('.js-btn');
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');
function changerFnc() {
    if (window.getComputedStyle(lightIcon).display === 'block') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }
}
