"use strict";

// 4.1 Desestruturação simples
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); // 4.2 Desestruturação em parâmetros

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
});
