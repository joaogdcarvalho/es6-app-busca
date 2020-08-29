"use strict";

var arr = [1, 3, 4, 5, 6];
/* 

// função anônima

const newArr = arr.map(function(item) {
  return item * 2;

});

// arrow function - ideal para diminuir verbosidade do código

const newArr = arr.map((item) => {
  return item * 2;
});

// arrow function - simplificação 1 parâmetro

const newArr = arr.map(item => {
  return item * 2;
});

*/
// arrow function - simplificação função com processamento único

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // criação de função com constantes, não recomendável, dê preferência em utilizar function

var teste1 = function teste1() {
  return 'text';
};

console.log(teste1());

var teste2 = function teste2() {
  return [1, 2, 3];
};

console.log(teste2());

var teste3 = function teste3() {
  return 'teste';
};

console.log(teste3());

var teste4 = function teste4() {
  return 42;
};

console.log(teste4()); // retorna 'undefined', chaves também utilizada para corpo da função  

var teste5a = function teste5a() {
  nome: 'Mariano';
};

console.log(teste5a()); // para retornar objeto diretamente na função, é necessário incluí-lo entre parênteses

var teste5b = function teste5b() {
  return {
    nome: 'Felipe'
  };
};

console.log(teste5b()); // com a keyword return, parênteses não é necessário

var teste5c = function teste5c() {
  return {
    nome: 'João'
  };
};

console.log(teste5c());
