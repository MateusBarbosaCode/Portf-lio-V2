const botaoTema = document.getElementById('meuBotao');
const iconeBotao = document.getElementById('iconeBotao');

// Carregar preferência salva
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'claro') {
    document.body.classList.add('dark-mode');
    iconeBotao.src = 'img/sol.png';
}

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const estaNoClaro = document.body.classList.contains('dark-mode');
    
    // Salvar preferência
    localStorage.setItem('tema', estaNoClaro ? 'claro' : 'escuro');
    iconeBotao.src = estaNoClaro ? 'img/sol.png' : 'img/lua.png';
});
