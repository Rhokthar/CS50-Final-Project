 // Variables
 const imagesArray = gsap.utils.toArray('.img-wrapper');
 const imagesAfterFirst = imagesArray.slice(1);
 const tl = gsap.timeline({repeat: -1});

 // FadeIn Function
 function fadeIn(image) {
 return gsap.timeline()
     // For each image, set z-index to 1
     .set(image, {zIndex: 1})
     // Change its opacity from 0 to 1
     .fromTo(image, {opacity: 0}, {opacity: 1})
     // Set again its z-index to 0 and delay next animation
     .set(image, {zIndex: 0}, "+=3")
 }

 // Pass images after the first to FadeIn function
 imagesAfterFirst.forEach(image => tl.add(fadeIn(image)));
 // After all images, fade the first image
 tl.add(fadeIn(imagesArray[0]));
 // Set value of the first image
 tl.set(imagesArray[0], {opacity: 1}, 0);