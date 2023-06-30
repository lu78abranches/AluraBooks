

function somarValorLivrosDisponiveis(livros){
   return livros.reduce((acumulador, livro ) =>
    acumulador + livro.preco, 0)
}