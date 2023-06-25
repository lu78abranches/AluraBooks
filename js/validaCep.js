async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro) {
           throw Error('CEP não existente!')
        }
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade
        logradouro.value = consultaCepConvertida.logradouro
        estado.value = consultaCepConvertida.uf
        
        console.log(consultaCepConvertida);
   } catch (erro) {
        mensagemErro.innerHTML = `<p style="color: red;">CEP inválido. Tente novamente</p>`;
        console.log(erro);
   }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
  


/* let ceps = ["02722000", "02736020", "02460000"]  //  Array dos ceps
    let conjuntoCeps = ceps.map(valores => buscaEndereco(valores)); de array para maps
    Promise.all(conjuntoCeps).then(respostas => console.log(respostas));*/

