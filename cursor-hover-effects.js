// HOVER EFFECTS
document.addEventListener('DOMContentLoaded', () => {
    const missionDivs = document.querySelectorAll('section.vid div.mission div');
    const buttonDivs = document.querySelectorAll('.buttons button');

    const statementSection = document.querySelector('.brand-statement');
    const aboutSection = document.querySelector('.quick-about');
    const benefitsSection = document.querySelector('.health-benefits');
    const brothSection = document.querySelector('.our-broth');

    const circleCursor = document.querySelector('.circle_cursor');

    missionDivs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            circleCursor.style.width = '30px';
            circleCursor.style.height = '30px';
            circleCursor.style.backgroundColor = '#ff6a00';
        });

        div.addEventListener('mouseleave', () => {
            circleCursor.style.width = '20px';
            circleCursor.style.height = '20px';
            circleCursor.style.backgroundColor = '#fafaee';
        });
    });

    buttonDivs.forEach(button => {
        button.addEventListener('mouseenter', () => {
            circleCursor.style.width = '30px';
            circleCursor.style.height = '30px';
            circleCursor.style.backgroundColor = '#ff6a00';
        });

        button.addEventListener('mouseleave', () => {
            circleCursor.style.width = '20px';
            circleCursor.style.height = '20px';
            circleCursor.style.backgroundColor = '#fafaee';
        });
    });

    statementSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#ff6a00';
    });

    statementSection.addEventListener('mouseleave', () => {
        circleCursor.style.width = '20px';
        circleCursor.style.height = '20px';
        circleCursor.style.backgroundColor = '#fafaee';
    });

    aboutSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#ff6a00';
    });

    aboutSection.addEventListener('mouseleave', () => {
        circleCursor.style.width = '20px';
        circleCursor.style.height = '20px';
        circleCursor.style.backgroundColor = '#fafaee';
    });

    benefitsSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#fafaee';
    });

    brothSection.addEventListener('mouseenter', () => {
        circleCursor.style.backgroundColor = '#ff6a00';
    });
});


