const words = ["Mahira Saleem", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typewriterElement = document.getElementById("typewriter");
  
  // Element check
  if (!typewriterElement) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Pura word likhne ke baad pause
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

// Window load hone par start karein
window.onload = function() {
  typeEffect();
};