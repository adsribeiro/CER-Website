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

    // 2. Image Sequence Scrub ScrollTrigger (Native Apple Style Performance via Canvas)
    const canvas = document.getElementById("bg-canvas");
    const context = canvas.getContext("2d");

    // Tamanho interno de renderização do canvas. O CSS object-cover vai forçar o preenchimento proporcional garantindo proporção wide
    canvas.width = 1280;
    canvas.height = 720;

    const frameCount = 120; // total de quadros extraídos da conversão

    // Formatador de index => frame_0001.webp
    const currentFrame = index => (
        `assets/frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`
    );

    const images = [];
    const canvasObj = { frame: 0 };

    // Inicialização visual: Carrega o primeiro frame imediatamente 
    const img = new Image();
    img.src = currentFrame(0);
    img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    images[0] = img;

    // Carregamento Eager/Lazy das imagens restantes
    for (let i = 1; i < frameCount; i++) {
        const imgData = new Image();
        imgData.src = currentFrame(i);
        images.push(imgData);
    }

    // Timeline otimizada gerenciada pelo ScrollTrigger usando array in memory das imagens Webp
    gsap.to(canvasObj, {
        frame: frameCount - 1,
        snap: "frame",     // Força o GSAP a parar apenas em frames inteiros e válidos
        ease: "power1.inOut", // Substituindo "none" por "power" para criar uma inércia leve
        scrollTrigger: {
            trigger: "#scroll-container",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,    // Voltando a barra de Scrub (Inércia de Catch-Up) de 0.1 para 1.2. Isso garante a perfeita fluidez.
        },
        onUpdate: () => {
            // Sempre que atualizar frame, limpa e redesenha
            const frameImg = images[canvasObj.frame];
            // Só tenta desenhar a imagem se ela estiver 100% no buffer
            if (frameImg && frameImg.complete) {
                context.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
            }
        }
    });

    // 3. Reveals & Animations components outside of Hero
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
