// SPINNER SCRIPTS STARTS
let spinner = document.querySelector(".spinner__wrapper");
let body = document.querySelector("body");
  
window.addEventListener("load", function() {
    
    spinner.classList.add("hidden");
    body.style.overflow = "visible";
    
});

if (history.scrollRestoration) 
{
    history.scrollRestoration = 'manual';
} 
else 
{
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
// SPINNER SCRIPTS ENDS

// MOBILE MENU SCRIPTS STARTS
document.querySelector(".menu__button").onclick = function(e) {
    var menu = document.querySelector(".menu__wrapper");
    var button = document.querySelector(".menu__button");
    var themeButton = document.querySelector(".switch-theme-wrapper");
    
    menu.classList.toggle("active");
    button.classList.toggle("active");
    themeButton.classList.toggle("display-hidden");
    e.preventDefault();
}
// MOBILE MENU SCRIPTS ENDS

// SWITCH THEME STARTS
var themeValue = localStorage.getItem("data-theme");

let themeSwitch = document.getElementById("switch-theme");
let themeSwitchMobile = document.getElementById("switch-theme-mobile");

let lightMoon = document.querySelector(".light-moon");
let darkMoon = document.querySelector(".dark-moon");
let lightMoonMobile = document.querySelector(".light-moon-mobile");
let darkMoonMobile = document.querySelector(".dark-moon-mobile");

document.documentElement.setAttribute("data-theme", themeValue);

if (themeValue === "dark")
{
    themeSwitch.checked = true;
    themeSwitchMobile.checked = true;
    
    darkMoon.classList.remove("display-hidden");
    lightMoon.classList.add("display-hidden");
    
    darkMoonMobile.classList.remove("display-hidden");
    lightMoonMobile.classList.add("display-hidden");
}
else
{
    themeSwitch.checked = false;
    themeSwitchMobile.checked = false;
    
    darkMoon.classList.add("display-hidden");
    lightMoon.classList.remove("display-hidden");
    
    darkMoonMobile.classList.add("display-hidden");
    lightMoonMobile.classList.remove("display-hidden");
}

let SetDarkTheme = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
}
let SetLightTheme = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
}

themeSwitch.addEventListener("change", () => {
    let themeStatus = localStorage.getItem("data-theme");
    if (themeStatus === "light")
    {
        if (themeSwitch.checked)
        {
            themeSwitchMobile.checked = true;
        }
        else
        {
            themeSwitchMobile.checked = false;
        }
        darkMoon.classList.remove("display-hidden");
        lightMoon.classList.add("display-hidden");
        
        darkMoonMobile.classList.remove("display-hidden");
        lightMoonMobile.classList.add("display-hidden");
        SetDarkTheme();
    }
    else
    {
        if (themeSwitch.checked)
        {
            themeSwitchMobile.checked = true;
        }
        else
        {
            themeSwitchMobile.checked = false;                        
        }
        darkMoon.classList.add("display-hidden");
        lightMoon.classList.remove("display-hidden");
        
        darkMoonMobile.classList.add("display-hidden");
        lightMoonMobile.classList.remove("display-hidden");
        SetLightTheme();
    }
});
themeSwitchMobile.addEventListener("change", () => {
    let themeStatus = localStorage.getItem("data-theme");
    if (themeStatus === "light")
    {
        if (themeSwitchMobile.checked)
        {
            themeSwitch.checked = true;
        }
        else
        {
            themeSwitch.checked = false;
        }
        darkMoon.classList.remove("display-hidden");
        lightMoon.classList.add("display-hidden");
        
        darkMoonMobile.classList.remove("display-hidden");
        lightMoonMobile.classList.add("display-hidden");
        SetDarkTheme();
    }
    else
    {
        if (themeSwitchMobile.checked)
        {
            themeSwitch.checked = true;
        }
        else
        {
            themeSwitch.checked = false;
        }
        darkMoon.classList.add("display-hidden");
        lightMoon.classList.remove("display-hidden");
        
        darkMoonMobile.classList.add("display-hidden");
        lightMoonMobile.classList.remove("display-hidden");
        SetLightTheme();
    }
});
// SWITCH THEME ENDS