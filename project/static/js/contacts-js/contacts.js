 // Variables
 let contactsTimeLine = gsap.timeline();

 // LOADING ANIMATIONS STARTS
 window.addEventListener("load", () => {
     contactsTimeLine.from(".title__wrapper", {
         delay: 0.5,
         opacity: 0,
         duration: 1,
         y: -100,
         ease: "power4.out"
     });
     contactsTimeLine.from(".desc", {
         opacity: 0,
         x: -100,
         duration: 0.5,
         ease: "power4.out"
     }, "-=0.5");
     contactsTimeLine.from("#contacts-form", {
         opacity: 0,
         duration: 0.5,
         ease: "power4.out"
     });
     contactsTimeLine.from("#other-contacts", {
         opacity: 0,
         duration: 0.5,
         y: 100,
         ease: "power4.out"
     });
 });
// LOADING ANIMATIONS ENDS

// FORM HANDLER STARTS
function FormClientValidation() 
{
    // Variables
    let name = document.getElementById("name_input").value;
    let surname = document.getElementById("surname_input").value;
    let email = document.getElementById("e-mail").value;
    let message = document.getElementById("contact_info").value;
    let langCheck = localStorage.getItem("data-lang");

    // Defining RegEX to check for a correct e-mail
    let emailRE = /^([A-Za-z0-9_\.?\-?]+)(?<!\.)(?<!\-)@(?!\.)(?!\-)([A-Za-z0-9_\.?\-?]+)\.([A-Za-z0-9]{2,5})$/gi;
    let retValue = true;

    // Reset previous eventually displayed errors
    ErrorReset();

    // Check for Errors and Display them
    // EN messages
    if (name.length < 2)
    {
        if (langCheck === "en")
        {
            document.getElementById("name-error").innerHTML = "* Inserted name not valid. Please, insert a name at least 2 characters long.";
        }
        else
        {
            document.getElementById("name-error").innerHTML = "* Il nome inserito non è valido. Per favore, inserire un nome lungo almeno 2 caratteri.";
        }
        retValue = false;
    }
    if (surname.length < 2)
    {
        if (langCheck === "en")
        {
            document.getElementById("surname-error").innerHTML = "* Inserted surname not valid. Please, insert a surname at least 2 characters long.";
        }
        else
        {
            document.getElementById("surname-error").innerHTML = "* Il cognome inserito non è valido. Per favore, inserire un cognome lungo almeno 2 caratteri.";
        }
        retValue = false;
    }
    if (!emailRE.test(email))
    {
        if (langCheck === "en")
        {
            document.getElementById("email-error").innerHTML = "* E-mail format not correct. Please, insert a valid e-mail.";
        }
        else
        {
            document.getElementById("email-error").innerHTML = "* Formato della e-mail non valido. Per favore, inserire un e-mail valida.";
        }
        retValue = false;
    }
    if (message.length < 50)
    {
        if (langCheck === "en")
        {
            document.getElementById("email-error").innerHTML = "* E-mail format not correct. Please, insert a valid e-mail.";
        }
        else
        {
            document.getElementById("contact-info-error").innerHTML = "* Per favore, raccontami con un breve testo (50 lettere) perché mi stai contattando.";
        }
        retValue = false;
    }
    return retValue;
}

// FORM ERROR RESETTER STARTS 
function ErrorReset()
{
    // To better display errors, before checking them I'll reset previous one.
    // If the error will be there again, it will be displayed
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("surname-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("contact-info-error").innerHTML = "";

} 
// FORM ERROR RESETTER ENDS

// FORM HANDLER ENDS

