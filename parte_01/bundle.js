"use strict";

var usuario = {
  nome: 'Antonio',
  idade: 29,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
}; // busca de valores 
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;
// busca de valores com conceito de desestruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // desestruturação com função - no caso está sendo passada propriedade específica de um objeto(usuário) para função

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);
