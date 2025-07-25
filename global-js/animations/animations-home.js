// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Header rounding corners
    gsap.fromTo(
        "header",
        {
            borderRadius: "0px",
            width: "100%",
        },
        {
            borderRadius: "35px",
            width: "95%",
            scrollTrigger: {
                trigger: "header",
                start: "bottom 100%",
                end: "bottom 50%",
                scrub: true,
            }
        }
    )

    // Video rounding corners
    gsap.to(
        ".vid video",
        {
            borderRadius: "0px",
            width: "100%",
            scrollTrigger: {
                trigger: ".vid video",
                start: "top 50%",
                end: "top 0%",
                scrub: true,
            }
        }
    )

    gsap.from(
        ".vid video",
        {
            borderRadius: "0px",
            width: "100%",
            scrollTrigger: {
                trigger: ".vid",
                start: "bottom 100%",
                end: "bottom 50%",
                scrub: true,
            }
        }
    )

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

    gsap.fromTo(
        ".buttons button",
        {color: '#fafaee'},
        {
            color: "#ff6a00",
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top 50%",
                end: "top 30%",
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

    // gsap.fromTo(
    //     ".quick-about",
    //     {backgroundColor: '#fafaee'},
    //     {
    //         backgroundColor: '#ff6a00',
    //         duration: 2,
    //         scrollTrigger: {
    //             trigger: ".health-benefits",
    //             start: "top 100%",
    //             end: "top 20%",
    //             scrub: true,
    //         },
    //     }
    // );

    // Benefits
    // gsap.fromTo(
    //     ".health-benefits",
    //     {backgroundColor: '#fafaee'},
    //     {
    //         backgroundColor: '#ff6a00',
    //         duration: 2,
    //         scrollTrigger: {
    //             trigger: ".health-benefits",
    //             start: "top 100%",
    //             end: "top 20%",
    //             scrub: true,
    //         },
    //     }
    // );

    gsap.fromTo(
        ".buttons button",
        {y: 0},
        {
            y: 15,
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "top 100%",
                end: "top 0%",
                scrub: true,
            }
        }
    )

    gsap.fromTo(
        ".buttons button",
        {y: 15},
        {
            y: 0,
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: ".health-benefits",
                start: "bottom 50%",
                end: "bottom 150%",
                scrub: true,
            }
        }
    )

    gsap.fromTo(
        ".benefits-title",
        {y: 0, borderRadius: "75px", width: "90%", height: "100%", opacity: 0},
        {
            y: "100vh",
            borderRadius: "30px",
            width: "97%",
            height: "95%",
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
        {x: 2000},
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
        {x: 2000},
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
        {x: 2000},
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
        {x: 2000},
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
        {x: 2000},
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
        {x: 2000},
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
        {x: 2000},
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
        {x: 2000},
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
        {x: 2000},
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

    gsap.fromTo(
        ".benefits-title",
        {y: "100vh", borderRadius: "30px", width: "97%", height: "95%"},
        {
            y: 0,
            borderRadius: "50px",
            width: "90%",
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top 100%",
                end: "top 20%",
                scrub: true,
            },
        }
    );

    // Broth Section
    gsap.fromTo(
        ".broth-title",
        {opacity: 0},
        {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top 90%",
                end: "top 90%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        "#broth-title-1",
        {x: 0},
        {
            x: -750,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top 0%",
                end: "top -50%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        "#broth-title-2",
        {x: 0},
        {
            x: -500,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top 0%",
                end: "top -50%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".broth-def",
        {y: 500, opacity: 0},
        {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "none",
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -30%",
                end: "top -80%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".broth-title",
        {y: 0},
        {
            y: -850,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -80%",
                end: "top -200%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".broth-def",
        {y: 0},
        {
            y: -850,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -80%",
                end: "top -200%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".broth-photo-1",
        {x: -1000},
        {
            x: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -100%",
                end: "top -220%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".broth-description",
        {x: 1000},
        {
            x: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -100%",
                end: "top -220%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".broth-photo-1",
        {y: 0},
        {
            y: -750,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -250%",
                end: "top -350%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".broth-description",
        {y: 0},
        {
            y: -750,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -250%",
                end: "top -350%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        ".buttons",
        {y: 0},
        {
            y: 200,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-broth",
                start: "top -270%",
                end: "top -370%",
                scrub: true,
            },
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
    )
});
