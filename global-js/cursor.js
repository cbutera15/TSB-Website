const circleElement = document.querySelector('.circle_cursor');

const circle = {x: 0, y: 0};
const mouse = {x: 0, y: 0};

const speed = 0.2;

window.addEventListener('mousemove', e => {
    mouse.x = e.x + 10;
    mouse.y = e.y + 10;
})

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    circleElement.style.transform = `translate(${circle.x}px,${circle.y}px)`;

    window.requestAnimationFrame(tick);
}

tick();