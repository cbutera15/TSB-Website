// HOVER EFFECTS
document.addEventListener('DOMContentLoaded', () => {
    const circleCursor = document.querySelector('.circle_cursor');

    const landingSection = document.querySelector('header');
    const helloSection = document.querySelector('.quick-hello');
    const farmersSection = document.querySelector('.our-farmers');
    const footerSection = document.querySelector('.footer-content');


    helloSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#ff6a00';
    });

    landingSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#fafaee';
    });

    farmersSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#ff6a00';
    });

    footerSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#fafaee';
    });
});