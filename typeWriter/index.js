// document.addEventListener("DOMContentLoaded", function () {
const phrases = [
  "Web Developer",
  "Javascript Enthusiast",
  "Open Source Contributor",
  "Software Engineer",
  "Tech Lover",
];

// let typewriterElement = document.getElementById("typewriter");
let typewriterElement = "";
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseBetweenPhrases = 1000;
let isDeleting = false;

function type() {
  let currentPhrase = phrases[currentPhraseIndex];

  if (isDeleting) {
    // Remove letters
    typewriterElement.textContent = currentPhrase.substring(
      0,
      currentLetterIndex - 1
    );
    currentLetterIndex--;

    if (currentLetterIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
      setTimeout(type, typingSpeed); // Pause before starting to type new phrase
    } else {
      setTimeout(type, deletingSpeed);
    }
  } else {
    // Add letters
    typewriterElement.textContent = currentPhrase.substring(
      0,
      currentLetterIndex + 1
    );
    currentLetterIndex++;

    if (currentLetterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, pauseBetweenPhrases); // Pause before deleting
    } else {
      setTimeout(type, typingSpeed);
    }
  }
  console.log(typewriterElement);
}

// Start the typing effect
type();
// });
