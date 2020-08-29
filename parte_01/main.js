const arr = [1, 3, 4, 5, 6];

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
const newArr = arr.map(item => item * 2);

console.log(newArr);


// criação de função com constantes, não recomendável, dê preferência em utilizar function
const teste1 = () => {
  return 'text';
}
console.log(teste1());

const teste2 = () => [1, 2, 3];
console.log(teste2());

const teste3 = () => 'teste';
console.log(teste3());

const teste4 = () => 42;
console.log(teste4());

// retorna 'undefined', chaves também utilizada para corpo da função  
const teste5a = () => {
  nome: 'Mariano'
};
console.log(teste5a());

// para retornar objeto diretamente na função, é necessário incluí-lo entre parênteses
const teste5b = () => ({
  nome: 'Felipe'
});
console.log(teste5b());

// com a keyword return, parênteses não é necessário
const teste5c = () => {
  return { nome: 'João'}
};
console.log(teste5c());