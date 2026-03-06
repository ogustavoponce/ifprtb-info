/**
 * Script Interativo - Portal Informática IFPR TB & Loja da Formatura
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. EFEITO MÁQUINA DE ESCREVER (HERO) --- */
    const textArray = ["Código Seguro.", "Interfaces Únicas.", "Aplicações Escaláveis.", "Dinheiro pra Formatura!"];
    const typingElement = document.getElementById("typing");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pausa no final da palavra
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            typeSpeed = 500; // Pausa antes de começar a nova palavra
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    // Inicia o efeito
    setTimeout(typeEffect, 1000);


    /* --- 2. SCROLL REVEAL (ANIMAÇÃO AO DESCER A PÁGINA) --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, {
        threshold: 0.1, // Dispara quando 10% do elemento está visível
        rootMargin: "0px 0px -50px 0px"
    });

    // Estado inicial dos elementos a serem revelados
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.5, 0, 0, 1)';
        revealObserver.observe(el);
    });


    /* --- 3. EFEITO NAVBAR NO SCROLL --- */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 3, 3, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(3, 3, 3, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });
});

/* --- 4. LÓGICA DO CARRINHO DE COMPRAS (SIMULAÇÃO) --- */
let cartCount = 0;

function addToCart() {
    const counterElement = document.querySelector('.cart-count');
    const cartBtn = document.getElementById('cartBtn');
    
    cartCount++;
    counterElement.textContent = cartCount;

    // Animação de "pulo" no botão do carrinho
    cartBtn.style.transform = 'scale(1.2)';
    cartBtn.style.borderColor = '#ffffff';
    
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
        cartBtn.style.borderColor = 'var(--border-color)';
    }, 200);

    // Feedback visual opcional
    console.log(`Produto adicionado! Total de itens: ${cartCount}`);
}
