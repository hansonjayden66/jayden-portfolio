// Scroll Animation for Intro Text
document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.querySelector(".intro");

    function handleScroll() {
        const sectionPosition = introSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            introSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
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

