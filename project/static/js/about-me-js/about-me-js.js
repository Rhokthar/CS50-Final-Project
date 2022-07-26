// Variables
let pageAnimationsTimeline = gsap.timeline();
let paragraphArray = document.querySelectorAll(".paragraph");
let personalCarousel = document.querySelector(".carousel.personal");
let listItemsArray = document.querySelectorAll(".curiosities-list li");
 
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
 
// Set Defaults
ScrollTrigger.defaults({
   toggleActions: "play none none none",
   // markers: true
});

// PAGE ANIMATIONS SCRIPTS STARTS   
window.addEventListener("load", () => {
    
    pageAnimationsTimeline.from(".special_text_2", {
        delay: 1,
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });

    // Check if paragraph are in viewport
    for (var i = 0; i < paragraphArray.length; i++)
    {
        // If paragraph in viewport, animate
        if (isInViewport(paragraphArray[i]))
        {
            pageAnimationsTimeline.from(paragraphArray[i], {
                x: -100,
                opacity: 0,
                duration: 0.5,
                ease: "power4.out"
            }, "-=0.25");
        }
        else
        {
            gsap.from(paragraphArray[i], {
                scrollTrigger: {
                    trigger: paragraphArray[i],
                    start: "top 67.5%"
                },
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            });
        }
    }

    pageAnimationsTimeline.from(personalCarousel, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
});

gsap.from(".special_text_2.curiosities", {
    scrollTrigger: {
        trigger: ".special_text_2.curiosities",
        start: "top 90%",
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
gsap.from(".carousel.hobby", {
    scrollTrigger: {
        trigger: ".special_text_2.curiosities",
        start: "bottom 90%"
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
for (var i = 0; i < listItemsArray.length; i++)
{
    gsap.from(listItemsArray[i], {
        scrollTrigger: {
            trigger: listItemsArray[i],
            start: "top 90%"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
} 
// PAGE ANIMATIONS SCRIPTS ENDS

// CAROUSELS ANIMATIONS START
// Variables
const personalImagesArray = gsap.utils.toArray('.personal.img');
const personalImagesAfterFirst = personalImagesArray.slice(1);

const hobbyImagesArray = gsap.utils.toArray(".hobby.img");
const hobbyImagesAfterFirst = hobbyImagesArray.slice(1);

const personalTL = gsap.timeline({repeat: -1});
const hobbyTL = gsap.timeline({repeat: -1});

// FadeIn Function
function PersonalFadeIn(image) 
{
    return gsap.timeline()
    // For each image, set z-index to 1
    .set(image, {zIndex: 1})
    // Change its opacity from 0 to 1
    .fromTo(image, {opacity: 0}, {opacity: 1})
    // Set again its z-index to 0 and delay next animation
    .set(image, {zIndex: 0}, "+=3")
}

function HobbyFadeIn(image) 
{
    return gsap.timeline()
    .set(image, {zIndex: 1})
    .fromTo(image, {opacity: 0}, {opacity: 1})
    .set(image, {zIndex: 0}, "+=5")
}

// Pass images after the first to FadeIn function
personalImagesAfterFirst.forEach(image => personalTL.add(PersonalFadeIn(image)));
hobbyImagesAfterFirst.forEach(image => hobbyTL.add(HobbyFadeIn(image)));

// After all images, fade the first image
personalTL.add(PersonalFadeIn(personalImagesArray[0]));
hobbyTL.add(HobbyFadeIn(hobbyImagesArray[0]));

// Set value of the first image
personalTL.set(personalImagesArray[0], {opacity: 1}, 0);
hobbyTL.set(hobbyImagesAfterFirst[0], {opacity: 1}, 0);
// CAROUSELS ANIMATION ENDS  