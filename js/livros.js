let livros = []

const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

//modo de manter uma moeda para cada país, nesse caso apenas Brasileira
const preco = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    
    livrosComDesconto = aplicarDescontoLivros(livros);
    exibirDescontoLivro(livrosComDesconto);
    exibirLivrosNaTela(livros);
   
    
   
    
}



    