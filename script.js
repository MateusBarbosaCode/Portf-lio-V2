const botaoTema = document.getElementById('meuBotao');
const iconeBotao = document.getElementById('iconeBotao');

// Função para aplicar o ícone correto
function checarIcone() {
    if (document.body.classList.contains('dark-mode')) {
        iconeBotao.src = 'img/sol.png'; 
    } else {
        iconeBotao.src = 'img/lua.png';
    }
}

// Ao carregar a página: verifica o tema salvo
if (localStorage.getItem('tema') === 'claro') {
    document.body.classList.add('dark-mode');
}
// Aplica o ícone correto logo no início
checarIcone();

// Evento de clique
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Salva a escolha do usuário
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'claro');
    } else {
        localStorage.setItem('tema', 'escuro');
    }
    
    // Muda o ícone na hora do clique
    checarIcone();
});
