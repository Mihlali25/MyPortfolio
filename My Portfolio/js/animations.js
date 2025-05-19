// Scroll Reveal Animation
function scrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    revealElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', scrollReveal);

// Initialize elements as hidden
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        element.classList.add('reveal-hidden');
    });
    
    // Trigger initial check
    scrollReveal();
});

// Hero Image Float Animation
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    heroImage.style.animation = 'float 3s ease-in-out infinite';
}

// Skill Cards Animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Project Cards Animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});