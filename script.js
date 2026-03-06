/* script.js */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Efeito de Scroll no Header
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.backgroundColor = "rgba(7, 7, 7, 0.98)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
        } else {
            header.style.padding = "20px 0";
            header.style.backgroundColor = "rgba(7, 7, 7, 0.95)";
            header.style.boxShadow = "none";
        }
    });

    // 2. Efeito Sutil de Código Binário no Hero
    const glitchText = document.querySelector('.hero-text-glitch');
    const originalText = glitchText.getAttribute('data-text');
    const binary = "01011010";
    const latin = "INNOVATIO";

    let state = 0; // 0: Completo, 1: Apenas Binário, 2: Apenas Latim

    function cycleText() {
        if (state === 0) {
            glitchText.textContent = `${binary}_****`;
            state = 1;
        } else if (state === 1) {
            glitchText.textContent = `****_${latin}`;
            state = 2;
        } else {
            glitchText.textContent = originalText;
            state = 0;
        }
    }

    // Muda o texto a cada 3 segundos de forma sutil
    setInterval(cycleText, 3000);

    // 3. Smooth Scroll (Navegação suave para âncoras)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return; // Ignora links vazios

            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});