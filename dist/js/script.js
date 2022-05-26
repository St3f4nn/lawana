'use strict';

// Elements

const navBurger = document.querySelector('#nav-burger');
const navMenu = document.querySelector('#nav-menu');
const htmlBody = document.querySelector('body');

const showcaseSection = document.querySelector('#showcase');

const showcaseBackgroundImages = [
    'showcase_1',
    'showcase_2',
    'showcase_3'
];

const btnLeft = document.querySelector('#showcase-arrows-left');
const btnRight = document.querySelector('#showcase-arrows-right');
let counterNumber = 0;

// Event listeners

navBurger.addEventListener('click', () => {
    htmlBody.classList.toggle('overflow-hidden');
    let screenWidth = screen.availWidth;

    if (screenWidth >= 768) {
        navMenu.classList.toggle('w-1/2');
    } else if (screenWidth >= 640) {
        navMenu.classList.toggle('w-3/5');
    } else {
        navMenu.classList.toggle('w-4/5');
    };
});

btnLeft.addEventListener('click', () => {
    counterNumber--;

    if (counterNumber < 0) {
        counterNumber = showcaseBackgroundImages.length - 1;
    };

    showcaseSection.style.backgroundImage = `url('./resources/images/02_showcase/${showcaseBackgroundImages[counterNumber]}.jpg')`;
});

btnRight.addEventListener('click', () => {
    counterNumber++;

    if (counterNumber > showcaseBackgroundImages.length - 1) {
        counterNumber = 0;
    };

    showcaseSection.style.backgroundImage = `url('./resources/images/02_showcase/${showcaseBackgroundImages[counterNumber]}.jpg')`;
});