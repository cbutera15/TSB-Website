// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Nav Color (ADD ALL BUTTON COLOR CHANGES HERE)
    gsap.fromTo(
        ".buttons button",
        {color: '#fafaee'},
        {
            color: "#ff6a00",
            scrollTrigger: {
                trigger: ".brand-statement",
                start: "bottom 110%",
                end: "bottom 110%",
                scrub: true,
            }
        }
    );

    gsap.fromTo(
        ".buttons button",
        {color: '#ff6a00'},
        {
            color: "#fafaee",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 100%",
                end: "top 20%",
                scrub: true,
            }
        }
    );

    // Mission Divs
    gsap.fromTo(
        ".mission-1",
        {opacity: 0},
        {
            opacity: 1,
            scrollTrigger: {
                trigger: ".mission-1",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
            },
        }
    );
    gsap.fromTo(
        ".mission-2",
        {opacity: 0},
        {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".mission-2",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
            },
        }
    );
    gsap.fromTo(
        ".mission-3",
        {opacity: 0},
        {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".mission-3",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
            },
        }
    );

    // About text
    gsap.fromTo(
        ".about-text",
        {y: 0},
        {
            y: -300,
            duration: 2,
            scrollTrigger: {
                trigger: ".about-text",
                start: "top 100%",
                end: "top 20%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".quick-about",
        {backgroundColor: '#fafaee'},
        {
            backgroundColor: '#ff6a00',
            duration: 2,
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 100%",
                end: "top 20%",
                scrub: true,
            },
        }
    );

    // Benefits
    gsap.fromTo(
        ".health-benefits",
        {backgroundColor: '#fafaee'},
        {
            backgroundColor: '#ff6a00',
            duration: 2,
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 100%",
                end: "top 20%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-title",
        {y: -1500, opacity: 0},
        {
            y: -50,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 100%",
                end: "top 20%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-1",
        {x: 1600},
        {
            x: -500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 20%",
                end: "top -100%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-2",
        {x: 1600},
        {
            x: -1500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 0%",
                end: "top -200%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-3",
        {x: 1600},
        {
            x: -1300,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top -100%",
                end: "top -250%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-4",
        {x: 1600},
        {
            x: -1500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 30%",
                end: "top -100%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-5",
        {x: 1600},
        {
            x: -1500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top -50%",
                end: "top -200%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-6",
        {x: 1600},
        {
            x: -1500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top -0%",
                end: "top -250%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-7",
        {x: 1600},
        {
            x: -1500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top -100%",
                end: "top -225%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-8",
        {x: 1600},
        {
            x: -1500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top -75%",
                end: "top -175%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".benefits-9",
        {x: 1600},
        {
            x: -1500,
            duration: 5,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top -125%",
                end: "top -250%",
                scrub: true,
            },
        }
    );
});
