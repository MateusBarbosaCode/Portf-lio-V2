const botao = document.getElementById('meuBotao');
const icone = document.getElementById('iconeBotao');
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'claro') {
    document.body.classList.add('dark-mode');
    icone.src = "img/sol.png";
}

botao.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const eClaro = document.body.classList.contains('dark-mode');
    icone.src = eClaro ? "img/sol.png" : "img/lua.png";
    localStorage.setItem('tema', eClaro ? 'claro' : 'escuro');
});