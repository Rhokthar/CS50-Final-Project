// Variables
let titlesArray = document.querySelectorAll(".landing-flag-title");
let imgsArray = document.querySelectorAll(".landing-flag-img");
let langCheck = localStorage.getItem("data-lang");

// CHECK LANG START
if (langCheck === "it")
{
    window.location.href = "/it/home";
}
else if (langCheck === "en")
{
    window.location.href = "/en/home";
}
// CHECK LANG ENDS -> No IT, no ENG = first time landed on page. Provide page
else
{
    // HERO ANIMATION
    window.addEventListener("load", function() {        

        let landingTL = gsap.timeline();

        landingTL.from(".special_text_2", {
            delay: 1,
            duration: 2,
            y: -100,
            opacity: 0,
            ease: "power4.out"
        });

        for (var i = 0; i < titlesArray.length; i++)
        {
            landingTL.from(titlesArray[i], {
                duration: 1,
                y: -100,
                opacity: 0,
                ease: "bounce"
            });
            landingTL.from(imgsArray[i], {
                duration: 0.5,
                x: -100,
                opacity: 0,
                ease: "power4.out"
            });
        }
    });

    imgsArray[0].addEventListener("click", () => {
        localStorage.setItem("data-lang", "en");
    });
    imgsArray[1].addEventListener("click", () => {
        localStorage.setItem("data-lang", "it");
    });
    // HERO ANIMATIONS ENDS
}
