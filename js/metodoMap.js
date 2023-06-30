function aplicarDescontoLivros(livros) {
    const desconto = 0.10;
    let livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}




