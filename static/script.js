// Scroll Animation for Intro Text
document.addEventListener("DOMContentLoaded", function() {
    const introSection = document.querySelector(".intro");

    function showIntro() {
        const sectionPos = introSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            introSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", showIntro);
});

document.addEventListener("DOMContentLoaded", function() {
    const introText = document.querySelector(".intro-text"); // Select intro text

    function checkScroll() {
        const textPosition = introText.getBoundingClientRect().top; // Get position
        const screenPosition = window.innerHeight / 1.3; // Trigger when 70% of screen

        if (textPosition < screenPosition) {
            introText.classList.add("show"); // Add animation class
        }
    }

    window.addEventListener("scroll", checkScroll); // Run function on scroll
});

