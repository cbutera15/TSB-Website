gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    
    gsap.fromTo(
        ".buttons button",
        {color: '#fafaee'},
        {
            color: "#ff6a00",
            scrollTrigger: {
                trigger: "#best-seller-subtitle",
                start: "bottom 110%",
                end: "bottom 110%",
                scrub: true,
            }
        }
    );
});
