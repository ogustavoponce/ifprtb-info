// Aguarda o carregamento do DOM para rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o botão de menu e a lista de links
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Seletor para os links dentro do menu (para fechá-lo após um clique)
    const links = document.querySelectorAll('.nav-links a');

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        
        // Altera o ícone do botão
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Muda para X
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Volta para Hambúrguer
        }
    };

    // Adiciona evento de clique ao botão
    menuToggle.addEventListener('click', toggleMenu);

    // Fecha o menu se um link for clicado (útil para navegação "one-page")
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu(); // Fecha o menu
            }
        });
    });
    
    // Mostra uma mensagem de confirmação para testar se o JS está funcionando
    console.log("Script IFPR carregado com sucesso!");
});