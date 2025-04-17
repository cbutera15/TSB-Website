// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
// Fade-in animation for mission-1 div
    gsap.fromTo(
        ".mission-1", // Target the mission-1 div
        {opacity: 0}, // Start with opacity 0
        {
            opacity: 1, // End with opacity 1
            duration: 2, // Animation duration
            scrollTrigger: {
                trigger: ".mission-1", // Corrected to use the class selector
                start: "top 80%", // Start when the top of mission-1 is 80% down the viewport
                end: "top 50%", // End when the top of mission-1 is 50% down the viewport
                toggleActions: "play none none none", // Play animation on scroll
                onEnter: () => console.log("enter"),
            },
        }
    );
});
