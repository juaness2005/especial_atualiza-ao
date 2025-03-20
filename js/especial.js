// Detecta quando o usuário rola a página
window.onscroll = function() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled'); // Adiciona a classe "scrolled" quando rola
    } else {
        header.classList.remove('scrolled'); // Remove quando a página está no topo
    }
};

