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
        {y: 750, opacity: 0},
        {
            y: 0,
            opacity: 1,
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
    );

    gsap.fromTo(
        ".vermont-scribble",
        {x: -30},
        {
            x: -1500,
            scale: 1,
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
        ".vermont-image",
        {x: 0},
        {
            x: -1500,
            scale: 0,
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
        ".bone-scribble",
        {x: 0},
        {
            x: -1500,
            scale: 1,
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
        ".bone-logo",
        {x: -30},
        {
            x: -1500,
            scale: 0,
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
        ".hello-sub-2",
        {y: 750},
        {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -110%",
                end: "top -160%",
                scrub: true,
            }
        }
    );


    gsap.fromTo(
        ".boldable",
        {fontWeight: 0, fontSize: 60},
        {
            fontWeight: 900,
            fontSize: 100,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -130%",
                end: "top -180%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".hello-sub-2",
        {x: 0},
        {
            x: -1500,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -200%",
                end: "top -250%",
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
                start: "top -200%",
                end: "top -250%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-scribble",
        {scale: 0},
        {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -240%",
                end: "top -290%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-callout",
        {opacity: 0},
        {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -260%",
                end: "top -310%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-scribble-2",
        {scale: 0},
        {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -270%",
                end: "top -320%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".hello-sub-3",
        {y: 0},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -300%",
                end: "top -375%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-scribble",
        {y: 0},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -305%",
                end: "top -380%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-callout",
        {y: 0},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -310%",
                end: "top -385%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-scribble-2",
        {y: 25},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -315%",
                end: "top -390%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-1",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -280%",
                end: "top -430%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-2",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -290%",
                end: "top -440%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-3",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -300%",
                end: "top -450%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-4",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -310%",
                end: "top -460%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-5",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -320%",
                end: "top -470%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-6",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -330%",
                end: "top -480%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-7",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -340%",
                end: "top -490%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-8",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -350%",
                end: "top -500%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-9",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -360%",
                end: "top -510%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".farmers-10",
        {y: 1000},
        {
            y: -1000,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".quick-hello",
                start: "top -370%",
                end: "top -520%",
                scrub: true,
            }
        }
    );

    gsap.to(
        "#spinning-text",
        {
            rotation: 360,
            duration: 15,
            ease: "none",
            repeat: -1,
            transformOrigin: "50% 50%",
        }
    );

    gsap.fromTo(
        ".footer-info",
        {y: -500, opacity: 0},
        {
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".footer-content",
                start: "top 100%",
                end: "top 50%",
                scrub: true,
            },
        }
    );


    // TODO - In the morning: change off screen elements to screen.width (or similar)
    // TODO - Fix this section so it works properly

});