document.addEventListener("DOMContentLoaded", function () {
    const numberOfComets = 10; // Adjust the number of comets
    for (let i = 0; i < numberOfComets; i++) {
        createComet();
    }
});

function createComet() {
    const comet = document.createElement("div");
    comet.classList.add("comet");
    document.body.appendChild(comet);

    // Random starting position (off-screen to avoid appearing as dots)
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    comet.style.left = `${startX}px`;
    comet.style.top = `${startY}px`;

    // Set an immediate random animation delay to ensure movement
    const delay = Math.random() * 5; // Random delay
    comet.style.animation = `moveComet 5s linear infinite, fadeIn 0.1s linear forwards`;
    comet.style.animationDelay = `-${delay}s`; // Start at a random progress point
}

window.onload = function () {
    const roles = ["Java Developer", "Web Developer", "Problem Solver"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100;
    const delayBetweenWords = 1000;
    const dynamicText = document.getElementById("dynamic-text");

    function typeEffect() {
        const currentRole = roles[index];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        dynamicText.textContent = currentRole.substring(0, charIndex);

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(typeEffect, speed / (isDeleting ? 2 : 1));
        }
    }

    typeEffect();
};

