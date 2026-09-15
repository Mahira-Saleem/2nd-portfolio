const words = ["Mahira Saleem", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    // Letter ko remove karna
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Letter ko add karna
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Type hone ki speed
  let typeSpeed = isDeleting ? 80 : 150;

  // Jab poora lafz type ho jaye
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; 
    isDeleting = true;
  } 
  // Jab poora lafz delete ho jaye
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; 
    typeSpeed = 500; 

  setTimeout(typeEffect, typeSpeed);
}

// Animation start karna
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});}