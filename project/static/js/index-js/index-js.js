// SCROLLING SCRIPTS - NAVBAR STARTS
// Variables
const sections = document.querySelectorAll("section");
const windowHeight = window.innerHeight;
const navigation = document.querySelector(".progress_nav");
const navigationLabels = document.querySelector(".bar_labels_container");

// RESET STATUS STARTS
function reset() 
{
    for (var i = 0; i < navigation.children.length; i++)
    {
        navigation.children[i].classList.remove("selected");
        navigationLabels.children[i].classList.remove("selected");
    }
}
// RESET STATUS ENDS

// SCROLLING EVENT STARTS
window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    // Check for every section
    sections.forEach(function(section, i) {
        if (section.offsetTop < scrollTop + (windowHeight/5) && scrollTop < section.offsetTop + (windowHeight/5))
        {
            reset();
            navigation.children[i].classList.add("selected");
            navigationLabels.children[i].classList.add("selected");
        }
    });
});
// SCROLLING EVENT ENDS

// FILL BAR ON SCROLL STARTS
window.onscroll = function() {BarFilling()};

function BarFilling() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    // Set value
    document.getElementById("bar_filling").style.height = scrolled + "%";
}
// FILL BAR ON SCROLL ENDS
// SCROLLING SCRIPTS - NAVBAR ENDS

// LETTER BOUNCING STARTS
document.querySelectorAll(".letter").forEach((element) => {

    element.addEventListener("mouseover", (e) => BounceLetter(e.target));
});

// Set letters to bounce
function BounceLetter(letter) 
{
    if (!letter.classList.contains("letter_bouncing")) 
    {
        letter.classList.add("letter_bouncing");
        setTimeout(function() 
        {
            letter.classList.remove("letter_bouncing");
        }, 1000);
    }
}
// LETTER BOUNCING ENDS

// PAGE ELEMENTS SCROLL ANIMATIONS STARTS
let indexTL = gsap.timeline({defaults: {opacity: 0}});
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play pause resume none",
    // markers: true
});

// After Loading Animations
function AnimationsInit()
{
    // Animation "HERO"
    // Top-Navbar animation
    indexTL.from(".nav_items", {
        delay: 1,
        duration: 1,
        opacity: 0,
    });
    // Side-Navbar animation
    indexTL.from("#progress_bar_container", {
        opacity: 0,
        duration:1,
        x: -50,
    }, "-=1");    
    // Title animation
    indexTL.from(".title", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power4.out"
    });
    indexTL.from(".symbol", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power4.out"
    }, "-=1.25");
    indexTL.from(".letter", {
        opacity: 0,
        stagger: 0.1,
        y: -100,
        duration: 0.5,
        ease: "power4.out"
    }, "-=0.5");
    // img_container animation"
    indexTL.from("#hero-image", {  
        autoAlpha: 0,
        duration: 0.5,
        ease: "power4.out"
    });
    indexTL.from(".adjectives_container", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power4.out"
    }, "-=1");
    indexTL.from(".underline", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out"
    }, "-=1");
}

// HERO ANIMATION STARTS
window.addEventListener("load", function(event) {
    
    // Hide #nav_img
    let navIMG = document.getElementById("nav_img");
    navIMG.classList.add("hidden");
    
    // ANIMATE HERO
    AnimationsInit();       
    
});
// HERO ANIMATIONS ENDS

// SECTIONS ANIMATIONS STARTS
let buttonsArray = document.querySelectorAll(".button-wrapper");
// ABOUT ME ANIMATIONS STARTS
gsap.from(".wrapper.about_me", {
    scrollTrigger: {
        trigger: "#about_me",
        start: "top 70%",
        end: "bottom center"
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
gsap.from(".text_container_2.about_me", {
    scrollTrigger: {
        trigger: "#about_me",
        start: "top 70%",
        end: "bottom center"
    },
    delay: 0.5,
    x: 100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
// Setup all buttons once
for (var i = 0; i < buttonsArray.length; i++)
{
    gsap.from(buttonsArray[i], {
        scrollTrigger: {
            trigger: buttonsArray[i],
            start: "top 90%",
            end: "bottom center"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "bounce"
    });
}
// ABOUT ME ANIMATIONS ENDS

// PROJECTS ANIMATIONS STARTS
gsap.from(".special_text_2.projects", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        end: "bottom center",
    },
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
gsap.from(".paragraph", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        end: "bottom center"
    },
    delay: 0.25,
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
gsap.from(".projects_container", {
    scrollTrigger: {
        trigger: ".projects_container",
        start: "top 70%",
        end: "bottom center"
    },
    delay: 0.25,
    y: 100,
    opacity: 0,
    duration: 2,
    ease: "power4.out"
});
// PROJECTS ANIMATIONS ENDS

// CONTACTS ANIMATIONS STARTS
gsap.from(".contact-form-wrapper", {
    scrollTrigger: {
        trigger: ".page_section.contacts",
        start: "30% 70%",
        end: "bottom center"
    },
    x: 100,
    duration: 2,
    opacity: 0,
    ease: "power4.out"
});
gsap.from(".map-wrapper", {
    scrollTrigger: {
        trigger: ".page_section.contacts",
        start: "30% 70%",
        end: "bottom center"
    },
    delay: 0.5,
    x: -100,
    duration: 2,
    opacity: 0,
    ease: "power4.out"
})
// CONTACTS ANIMATIONS ENDS
// PAGE ELEMENTS SCROLL ANIMATIONS STARTS
