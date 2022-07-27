let checkLang = localStorage.getItem("data-lang");

window.addEventListener("load", () => {
    
    setTimeout(function() {

        if (checkLang === "it")
        {
            window.location.href = "/it/home";
        }
        else
        {
            window.location.href = "/en/home";
        }

     }, 5000);
});
