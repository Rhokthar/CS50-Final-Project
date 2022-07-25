// Variables
let textWrapperArray = document.querySelectorAll(".text__wrapper");
let imgWrapperArray = document.querySelectorAll(".img__wrapper");
let buttonsArray = document.querySelectorAll(".btn");
var invertAnimationDirection = -1;

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play none none none",
    // markers: true
});

// ANIMATIONS ONLOAD STARTS
window.addEventListener("load", () => {
    
    let projectsTimeLine = gsap.timeline();
    
    projectsTimeLine.from(".title__wrapper", {
        delay: 0.5,
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
    projectsTimeLine.from(".disclaimer", {
        autoAlpha: 0,
        duration: 0.1,
    });
    projectsTimeLine.from(textWrapperArray[0], {
        delay: 0.5,
        opacity: 0,
        x: (100 * invertAnimationDirection * -1),
        duration: 1,
        ease: "power4.out"
    });
    projectsTimeLine.from(imgWrapperArray[0], {
        opacity: 0,
        x: (100 * invertAnimationDirection),
        duration: 1,
        ease: "power4.out"
    }, "-=0.5");
    projectsTimeLine.from(buttonsArray[0], {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "bounce"
    }, "-=0.5");
}); 
// ANIMATIONS ONLOAD ENDS

// PAGE SCROLL ANIMATIONS
for (var i = 1; i < textWrapperArray.length; i++)
{
    gsap.from(textWrapperArray[i], {
        scrollTrigger: {
            trigger: textWrapperArray[i],
            start: "top center",
            end: "bottom center"
        },
        opacity: 0,
        x: (100 * invertAnimationDirection),
        duration: 1,
        ease: "power4.out"
    });
    gsap.from(imgWrapperArray[i], {
        scrollTrigger: {
            trigger: textWrapperArray[i],
            start: "top center",
            end: "bottom center"
        },
        opacity: 0,
        x: (100 * invertAnimationDirection * -1),
        duration: 1,
        ease: "power4.out"
    });
    gsap.from(buttonsArray[i], {
        scrollTrigger: {
            trigger: buttonsArray[i],
            start: "top 80%",
            end: "bottom center",
        },
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "bounce"
    });
    invertAnimationDirection = invertAnimationDirection * (-1);
}
// PAGE SCROLL ANIMATIONS ENDS
