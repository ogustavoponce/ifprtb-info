/**
 * Arquivo de Scripts Principal
 * Turma de Informática - IFPR Campus Telêmaco Borba
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Sombra e Redução no Navbar ao fazer Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '5px 0';
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
        } else {
            navbar.style.padding = '0';
            navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Animação de Scroll Reveal (Elementos aparecem suavemente)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Dispara quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Para a animação após ocorrer uma vez
            }
        });
    }, revealOptions);

    // Configuração inicial dos elementos que vão ser revelados
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        revealObserver.observe(el);
    });

    // 3. Scroll Suave para as âncoras (Links do Menu)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Desconta a altura do cabeçalho fixo (aprox 80px)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    console.log("Sistema Carregado: IFPR TB Informática v1.0");
});
