const botaoTema = document.getElementById('meuBotao');
const iconeBotao = document.getElementById('iconeBotao');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Troca o ícone se você tiver as duas imagens na pasta img
    if (document.body.classList.contains('dark-mode')) {
        iconeBotao.src = 'img/sol.png'; // Caso não tenha sol.png, ele apenas mudará a cor da lua
    } else {
        iconeBotao.src = 'img/lua.png';
    }
});
