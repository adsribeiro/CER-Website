gsap.registerPlugin(ScrollTrigger);

// Funcão do efeito de Lanterna (Flashlight) importado do Design System
function updateFlashlight(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
}

document.addEventListener("DOMContentLoaded", () => {

    // 1. Text & Elements Entry Animation (Fade-Up and Stagger)
    gsap.from(".gsap-stagger", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
    });

    // 2. Reveals & Animations components outside of Hero
    gsap.utils.toArray('.gsap-fade-up').forEach((elem) => {
        let dly = elem.getAttribute('data-delay') || 0;
        gsap.fromTo(elem,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                delay: parseFloat(dly),
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%", // Inicia animação quando o card/elemento atinge 85% do viewport de baixo para cima
                }
            });
    });

});
