'use strict';

// Elements

const htmlBody = document.querySelector('body');

// Navigation bar

const navBurger = document.querySelector('#nav-burger');
const navMenu = document.querySelector('#nav-menu');

// Showcase

const showcaseImgElement = document.querySelector('#showcase-main-img');

const showcaseBackgroundImages = [
    'showcase_1',
    'showcase_2',
    'showcase_3'
];

const showcaseBtnLeft = document.querySelector('#showcase-arrows-left');
const showcaseBtnRight = document.querySelector('#showcase-arrows-right');

let showcaseIndex = 0;

// Team

const teamDots = document.querySelectorAll('.team-dots-dot');

const teamSlider = document.querySelector('#team-container');
const teamSliderCards = document.querySelectorAll('.team-container-card');
const gapBetween = window.innerWidth >= 640 ? 32 : 12;

const teamBtnLeft = document.querySelector('#team-content-arrows-left');
const teamBtnRight = document.querySelector('#team-content-arrows-right');

let teamIndex = 0;
const teamSliderCardWidth = teamSliderCards[teamIndex].clientWidth;

// Testimonials

const testimonialsSlider = document.querySelector('#testimonials-container');
const testimonialsSliderCards = document.querySelectorAll('.testimonials-container-card');

let testimonialsIndex = 0;

const interval = 5000;
const testimonialsWidth = testimonialsSliderCards[testimonialsIndex].clientWidth;

// Functions

// Testimonials

function resetSliding() {
    testimonialsSlider.style.transform = `translateX(0px)`;
};

function startSliding() {
    setInterval(function() {
        if (window.innerWidth >= 1024) {
            testimonialsIndex++;
            testimonialsSlider.style.transform = `translateX(${(-testimonialsWidth - 24) * testimonialsIndex}px)`;
            
            if (testimonialsIndex > testimonialsSliderCards.length - 1) {
                testimonialsIndex = 0;
                resetSliding();
            };
        } else {
            testimonialsIndex = 0;
            resetSliding();
        };
    }, interval);
};

startSliding();

// Event listeners

// Navigation bar

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

// Showcase

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

// Team

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

    const teamSliderCardDimensions = teamSliderCards[teamIndex].getBoundingClientRect();
    const teamSliderCardWidth = teamSliderCardDimensions.width;

    if (teamIndex > teamSliderCards.length - 1) {
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

    const teamSliderCardDimensions = teamSliderCards[teamIndex].getBoundingClientRect();
    const teamSliderCardWidth = teamSliderCardDimensions.width;

    if (teamIndex < 0) {
        teamIndex = teamSliderCards.length - 1;
    };

    teamSlider.style.transform = `translateX(${(-teamSliderCardWidth - gapBetween) * teamIndex}px)`;
});