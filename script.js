const botaoTema = document.getElementById('meuBotao');
const iconeBotao = document.getElementById('iconeBotao');

// Verifica se já existe um tema salvo
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'claro') {
    document.body.classList.add('dark-mode');
    iconeBotao.src = 'img/sol.png'; // Se tiver a imagem sol
}

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'claro');
        iconeBotao.src = 'img/sol.png';
    } else {
        localStorage.setItem('tema', 'escuro');
        iconeBotao.src = 'img/lua.png';
    }
});
