const botaoTema = document.getElementById('meuBotao');
const iconeBotao = document.getElementById('iconeBotao');

// Função para atualizar o ícone baseado no tema atual
function atualizarIcone() {
    if (document.body.classList.contains('dark-mode')) {
        iconeBotao.src = 'img/sol.png'; // Caminho da imagem do Sol
    } else {
        iconeBotao.src = 'img/lua.png'; // Caminho da imagem da Lua
    }
}

// Verifica o tema salvo ao carregar a página
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'claro') { 
    document.body.classList.add('dark-mode'); 
    atualizarIcone(); 
}

// Evento de clique para trocar o tema e o ícone
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Salva a preferência do usuário
    const modoClaroAtivo = document.body.classList.contains('dark-mode');
    localStorage.setItem('tema', modoClaroAtivo ? 'claro' : 'escuro');
    
    // Troca o ícone
    atualizarIcone();
});
