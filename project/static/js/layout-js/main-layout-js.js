// SAVE LANGUAGE CHOOSEN BEFORE
localStorage.setItem("data-lang", "it");

// CHECK ELEMENTS IN VIEWPORT
function isInViewport(element) 
{
    // Get position of the elements
    const rect = element.getBoundingClientRect();
    // Return true if is in viewport, false otherwise
    // In viewport if its top and left position are >= 0 and its bottom and right position <= window lenght
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}