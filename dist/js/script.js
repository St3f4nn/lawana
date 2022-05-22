'use strict';

const navBurger = document.querySelector('#nav-burger');
const navMenu = document.querySelector('#nav-menu');

navBurger.addEventListener('click', () => {
    let screenWidth = screen.availWidth;

    if (screenWidth >= 768) {
        navMenu.classList.toggle('w-1/2');
    } else if (screenWidth >= 640) {
        navMenu.classList.toggle('w-3/5');
    } else {
        navMenu.classList.toggle('w-4/5');
    };
});