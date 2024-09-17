const menuActive = document.querySelector('.navMain');
const burger = document.querySelector('.burgerMenu');
const menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);