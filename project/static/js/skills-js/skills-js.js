// Variables
let barsArray = document.querySelectorAll(".skill-bar");
let barsContainerArray = document.querySelectorAll(".skill");
let paragraphsArray = document.querySelectorAll(".paragraph");
let skillsTimeLine = gsap.timeline();            

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Set defaults
ScrollTrigger.defaults({
    toggleActions: "play pause resume none",
    // markers: true
});

// TITLE, PARAGRAPHS, BARS ANIMATIONS STARTS
window.addEventListener("load", () => {           
    
    skillsTimeLine.from(".special_text_2", {
        delay: 0.5,
        opacity: 0,
        stagger: 1,
        x: -100,
        ease: "power4.out"
    });
    
    // Paragraphs Animation
    for (var i = 0; i < paragraphsArray.length; i++)
    {
        if (isInViewport(paragraphsArray[i]))
        {
            skillsTimeLine.from(paragraphsArray[i], {
                x: -50,
                opacity: 0,
                duration: 0.5,
                ease: "power4.out"
            }, "-=0.25");
        }
        else
        {
            gsap.from(paragraphsArray[i], {
                scrollTrigger: {
                    trigger: paragraphsArray[i],
                    start: "top 80%"
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            });
        }
    }
    // Paragraph Animation
    
    // Bars Animation
    for (var i = 0; i < barsContainerArray.length; i++)
    {
        if (isInViewport(barsContainerArray[i]))
        {
            skillsTimeLine.from(barsContainerArray[i], {
                x: -100,
                opacity: 0,
                duration: 0.5,
                ease: "power4.out"
            });
            skillsTimeLine.from(barsArray[i], {
                width: 0,
                duration: 0.5,
                ease: "power4.out"
            });
        }
        else
        {
            gsap.from(barsContainerArray[i], {
                scrollTrigger: {
                    trigger: barsContainerArray[i],
                    start: "top 80%",
                    end: "bottom top"
                },
                y: 100,
                opacity: 0,
                duration: 2,
                ease: "power4.out"
            });
            gsap.from(barsArray[i], {
                scrollTrigger: {
                    trigger: barsArray[i],
                    start: "top 80%",
                    end: "bottom top"
                },
                width: 0,
                duration: 2,
                delay: 0.5,
                ease: "power4.out"
            });
        }
    }
});
// TITLE, PARAGRAPHS, BARS ANIMATIONS ENDS

// SUBSECTIONS ANIMATIONS STARTS       
// First Subsection STARTS
gsap.from("#soft-skills", {
    scrollTrigger: {
        trigger: "#soft-skills",
        start: "top center",
        end: "bottom center"
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"            
});
gsap.from("#side-skills", {
    scrollTrigger: {
        trigger: "#side-skills",
        start: "top center",
        end: "bottom center"
    },
    x: 100,
    opacity: 0,
    duration: 2,
    delay: 0.25,
    ease: "power4.out"
});
// First Subsection ENDS

// Second Subsection STARTS
gsap.from("#study-planning", {
    scrollTrigger: {
        trigger: "#study-planning",
        start: "top 60%",
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
gsap.from("#other-skills", {
    scrollTrigger: {
        trigger: "#other-skills",
        start: "top 60%",
    },
    x: 100,
    opacity: 0,
    duration: 2,
    delay: 0.25,
    ease: "power4.out"
});
// Second Subsection END
// SUBSECTIONS ANIMATIONS ENDS