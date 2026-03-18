const botaoTema = document.getElementById('meuBotao');
const iconeBotao = document.getElementById('iconeBotao');

// Função para aplicar o tema e trocar o ícone
function aplicarTema(tema) {
    if (tema === 'dark-mode') {
        document.body.classList.add('dark-mode');
        iconeBotao.src = 'img/sol.png'; // Garanta que tem essa imagem
    } else {
        document.body.classList.remove('dark-mode');
        iconeBotao.src = 'img/lua.png';
    }
}

// 1. Verifica se existe um tema salvo no "LocalStorage" ao carregar a página
const temaSalvo = localStorage.getItem('tema-escolhido');
aplicarTema(temaSalvo);

// 2. Evento de clique para alternar e salvar a escolha
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    let temaAtual = 'escuro';
    if (document.body.classList.contains('dark-mode')) {
        temaAtual = 'dark-mode';
    }

    // Salva a escolha do usuário
    localStorage.setItem('tema-escolhido', temaAtual);
    
    // Atualiza o ícone visualmente
    aplicarTema(temaAtual);
});
