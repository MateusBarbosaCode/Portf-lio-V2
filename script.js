const botaoTema = document.getElementById('meuBotao');
const iconeBotao = document.getElementById('iconeBotao');

// Função para atualizar o ícone baseado no tema atual
function atualizarIcone() {
    if (document.body.classList.contains('dark-mode')) {
        // Agora que você moveu para a pasta img
        iconeBotao.src = 'img/sol.png'; 
    } else {
        iconeBotao.src = 'img/lua.png'; 
    }
}

// Verifica o tema salvo ao carregar a página
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'claro') { 
    document.body.classList.add('dark-mode'); 
}

// Aplica o ícone correto assim que a página abre
atualizarIcone();

// Evento de clique para trocar o tema e o ícone
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário
    const modoClaroAtivo = document.body.classList.contains('dark-mode');
    localStorage.setItem('tema', modoClaroAtivo ? 'claro' : 'escuro');
    
    // Troca o ícone na hora
    atualizarIcone();
});
