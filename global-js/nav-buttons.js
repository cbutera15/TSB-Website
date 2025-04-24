const buttonTop = document.querySelector('.buttons').offsetTop;
const buttonsBackground = document.querySelector('.buttons-background');
const buttons = document.querySelector('.buttons');
const brandTop = document.querySelector('.brand-statement')?.offsetTop || 0;

window.addEventListener("scroll", () => {
    if (window.scrollY >= buttonTop + 50) {
        document.querySelector('.buttons').classList.add("fixed");
        buttonsBackground.style.display = 'block';
    } else {
        document.querySelector('.buttons').classList.remove("fixed");
        buttonsBackground.style.display = 'none';
    }

    if (window.scrollY >= brandTop) {
        buttons.style.color = '#ff6a00';
    } else {
        buttonsBackground.style.color = '#fafaee';
    }
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY < 250) {
        header.style.width = (100 - window.scrollY / 55) + "%";
        header.style.borderRadius = (window.scrollY / 7) + "px";
    } else {
        header.style.width = (95.672727) + "%";
        header.style.borderRadius = (34.142857) + "px";
    }
});