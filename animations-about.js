// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Animate hello title
    gsap.fromTo(
        ".char1",
        {y: -100},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top 70%",
                end: "top 20%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".char2",
        {y: -100},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top 65%",
                end: "top 15%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".char3",
        {y: -100},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top 60%",
                end: "top 10%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".char4",
        {y: -100},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top 55%",
                end: "top 5%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".char5",
        {y: -100},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top 50%",
                end: "top 0%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".char6",
        {y: -100},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top 45%",
                end: "top -5%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".hello-sub-1",
        {y: 750},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top 30%",
                end: "top -50%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".hello-sub-2",
        {y: 750},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -100%",
                end: "top -150%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".hello-sub-3",
        {y: 750},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -100%",
                end: "top -150%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".vermont-scribble",
        {scale: 0},
        {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -40%",
                end: "top -80%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".vermont-image",
        {scale: 0},
        {
            scale: 0.5,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -40%",
                end: "top -80%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".bone-scribble",
        {scale: 0},
        {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -40%",
                end: "top -80%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".bone-logo",
        {scale: 0},
        {
            scale: 0.3,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -40%",
                end: "top -80%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".hello-sub-1",
        {x: 0},
        {
            x: -1500,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -100%",
                end: "top -150%",
                scrub: true,
            }
        }
    )

    // TODO - In the morning: change off screen elements to screen.width (or similar)
    // TODO - Fix this section so it works properly

});