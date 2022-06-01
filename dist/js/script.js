'use strict';

// Elements

const htmlBody = document.querySelector('body');

const navBurger = document.querySelector('#nav-burger');
const navMenu = document.querySelector('#nav-menu');

const showcaseImgElement = document.querySelector('#showcase-main-img');

const showcaseBackgroundImages = [
    'showcase_1',
    'showcase_2',
    'showcase_3'
];

const showcaseBtnLeft = document.querySelector('#showcase-arrows-left');
const showcaseBtnRight = document.querySelector('#showcase-arrows-right');

let showcaseIndex = 0;

// const testimonialsSlider = document.querySelector('#testimonials-container');
// const testimonialsSliderCards = document.querySelectorAll('.testimonials-container-card');

// let index = 0;

// const interval = 5000;
// const testimonialWidth = testimonialsSliderCards[index].clientWidth;

const teamDots = document.querySelectorAll('.team-dots-dot');

const teamSlider = document.querySelector('#team-container');
const teamSliderCards = document.querySelectorAll('.team-container-card');

let screenWidth = screen.availWidth;
const gapBetween = screenWidth >= 640 ? 32 : 12;

const teamBtnLeft = document.querySelector('#btn-left');
const teamBtnRight = document.querySelector('#btn-right');

let teamIndex = 0;
const teamSliderCardWidth = teamSliderCards[teamIndex].clientWidth;

teamBtnRight.addEventListener('click', function() {
    teamIndex++;

    const activeDot = document.querySelector('.active-dot');
    activeDot.classList.remove('active-dot');

    if (activeDot.nextElementSibling) {
        activeDot.nextElementSibling.classList.add('active-dot');
    } else {
        teamDots[0].classList.add('active-dot');
    };

    const activeCard = document.querySelector('.active-card');
    activeCard.classList.remove('active-card');

    if (activeCard.nextElementSibling) {
        activeCard.nextElementSibling.classList.add('active-card');
    } else {
        teamSliderCards[0].classList.add('active-card');
    };

    const teamSliderCardWidth = teamSliderCards[teamIndex].clientWidth;

    if (teamIndex > teamSliderCards.length - 1) {
        teamIndex = 0;
        teamSlider.style.transform = `translateX(0px)`;
    };

    teamSlider.style.transform = `translateX(${(-teamSliderCardWidth - gapBetween) * teamIndex}px)`;
});

teamBtnLeft.addEventListener('click', function() {
    teamIndex--;

    const activeDot = document.querySelector('.active-dot');
    activeDot.classList.remove('active-dot');

    if (activeDot.previousElementSibling) {
        activeDot.previousElementSibling.classList.add('active-dot');
    } else {
        teamDots[teamDots.length - 1].classList.add('active-dot');
    };

    const activeCard = document.querySelector('.active-card');
    activeCard.classList.remove('active-card');

    if (activeCard.previousElementSibling) {
        activeCard.previousElementSibling.classList.add('active-card');
    } else {
        teamSliderCards[teamSliderCards.length - 1].classList.add('active-card');
    };

    const teamSliderCardWidth = teamSliderCards[teamIndex].clientWidth;

    if (teamIndex < 0) {
        teamIndex = teamSliderCards.length - 1;
    };

    teamSlider.style.transform = `translateX(${(-teamSliderCardWidth - gapBetween) * teamIndex}px)`;
});

// Functions

// function startSliding() {
//     setInterval(function() {
//         index++;
//         testimonialsSlider.style.transform = `translateX(${(-testimonialWidth - 24) * index}px)`;
        
//         if (index > testimonialsSliderCards.length - 1) {
//             index = 0;
//             resetSliding();
//         };
//     }, interval);
// };

// function resetSliding() {
//     testimonialsSlider.style.transform = `translateX(0px)`;
// };

// if (window.innerWidth >= 1024) {
//     startSliding();
// } else {
//     resetSliding();
// };

// Event listeners

navBurger.addEventListener('click', function() {
    htmlBody.classList.toggle('overflow-hidden');

    if (window.innerWidth >= 768) {
        navMenu.classList.toggle('w-1/2');
    } else if (window.innerWidth >= 640) {
        navMenu.classList.toggle('w-3/5');
    } else {
        navMenu.classList.toggle('w-4/5');
    };
});

showcaseBtnLeft.addEventListener('click', function() {
    showcaseIndex--;

    if (showcaseIndex < 0) {
        showcaseIndex = showcaseBackgroundImages.length - 1;
    };

    showcaseImgElement.src = `./resources/images/02_showcase/${showcaseBackgroundImages[showcaseIndex]}.jpg`;
});

showcaseBtnRight.addEventListener('click', function() {
    showcaseIndex++;

    if (showcaseIndex > showcaseBackgroundImages.length - 1) {
        showcaseIndex = 0;
    };

    showcaseImgElement.src = `./resources/images/02_showcase/${showcaseBackgroundImages[showcaseIndex]}.jpg`;
});