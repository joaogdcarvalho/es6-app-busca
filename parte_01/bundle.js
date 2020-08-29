"use strict";

var arr = [1, 3, 4, 5, 8, 9]; // map - percorre vetor e retorna conteúdo de cada item

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // reduce - consome todo vetor e transforma em uma única variável, geralmente número

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // filter - percorre vetor retornando itens que respeitam condição passada

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
/* find - utilizado quando necessário verificar se existe informação desejada no array,
retornando o primeiro índice que aparece ou 'undefined' caso não exista */

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
