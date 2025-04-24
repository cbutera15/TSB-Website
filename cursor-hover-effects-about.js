// HOVER EFFECTS
document.addEventListener('DOMContentLoaded', () => {
    const circleCursor = document.querySelector('.circle_cursor');

    const landingSection = document.querySelector('header');
    const helloSection = document.querySelector('.quick-hello');


    helloSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#ff6a00';
    });

    landingSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#fafaee';
    });
});