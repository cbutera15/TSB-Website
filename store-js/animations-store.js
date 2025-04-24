gsap.registerPlugin(ScrollTrigger);

function ripple(){
    let tl = gsap.timeline()
    tl1.to(".favorites > .item",{scale: 1.2,  ease: "none", 
        duration: 0.75, stagger:{ each: 0.15, repeat: 1, yoyo: true }});
}

gsap.set(".favorites", {autoAlpha:1})

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

    gsap.fromTo(".favorites",
        {opacity:0},
        {
            opacity:1,
            scrollTrigger:".favorites",
            duration: 5
        }
    );

    

});
