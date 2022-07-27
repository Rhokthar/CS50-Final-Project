// Variables
let barsArray = document.querySelectorAll(".skill-bar");
let barsContainerArray = document.querySelectorAll(".skill");
let paragraphsArray = document.querySelectorAll(".paragraph");
let softSkillsListArray = document.querySelectorAll("#soft-skills li");
let sideSkillsListArray = document.querySelectorAll("#side-skills li");
let studyPlanningListArray = document.querySelectorAll("#study-planning li");
let otherSkillsListArray = document.querySelectorAll("#other-skills li");
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
// Soft Skills STARTS
gsap.from("#soft-skills h3", {
    scrollTrigger: {
        trigger: "#soft-skills h3",
        start: "top center",
        toggleActions: "play none none none"
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce"
});
for (var i = 0; i < softSkillsListArray.length; i++)
{
    gsap.from(softSkillsListArray[i], {
        scrollTrigger: {
            trigger: softSkillsListArray[i],
            start: "top center",
            toggleActions: "play none none none"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"            
    });
}
// Soft Skills ENDS
// Side Skills STARTS
gsap.from("#side-skills h3", {
    scrollTrigger: {
        trigger: "#side-skills h3",
        start: "top center",
        toggleActions: "play none none none"
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.25,
    ease: "bounce"
});
for (var i = 0; i < sideSkillsListArray.length; i++)
{
    gsap.from(sideSkillsListArray[i], {
        scrollTrigger: {
            trigger: sideSkillsListArray[i],
            start: "top center",
            toggleActions: "play none none none"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power4.out"
    });
}
// Side Skills ENDS
// First Subsection ENDS

// Second Subsection STARTS
// Study Planning STARTS
gsap.from("#study-planning h3", {
    scrollTrigger: {
        trigger: "#study-planning h3",
        start: "top 70%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.25,
    ease: "bounce"
});
for (var i = 0; i < studyPlanningListArray.length; i++)
{
    gsap.from(studyPlanningListArray[i], {
        scrollTrigger: {
            trigger: studyPlanningListArray[i],
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power4.out" 
    });
}
// Study Planning ENDS
// Other Skills STARTS
gsap.from("#other-skills h3", {
    scrollTrigger: {
        trigger: "#other-skills h3",
        start: "top 70%",
    },
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "bounce"
});
for (var i = 0; i < otherSkillsListArray.length; i++)
{
    gsap.from(otherSkillsListArray[i], {
        scrollTrigger: {
            trigger: otherSkillsListArray[i],
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: 100,
        duration: 1,
        opacity: 0,
        ease: "power4.out"
    });
}
// Other Skills ENDS
// Second Subsection END
// SUBSECTIONS ANIMATIONS ENDS