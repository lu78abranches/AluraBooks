const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))



function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    
    let livrosFiltrardos = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(aplicarDescontoLivros (livrosFiltrardos));
    if (categoria == 'disponivel') {
        const valorTotal = somarValorLivrosDisponiveis(livrosFiltrardos);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }

}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${preco.format(valorTotal)}</span></p>`
}



