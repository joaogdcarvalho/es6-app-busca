// OPERADOR REST - EXEMPLO 1
const usuario = {
  nome: "Daniel",
  idade: 40,
  empresa: 'Rocketseat',
};
const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

// OPERADOR REST - EXEMPLO 2
const arr = [1, 2, 3, 4, 5];
const [ a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

// OPERADOR REST - EXEMPLO 3
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 3, 4));

// OPERADOR REST - EXEMPLO 4
function restante(a, b, ...params) {
  return params;
}
console.log(restante(1, 2, 3, 4, 5, 6, 7, 8, 9));

// SPREAD - EXEMPLO 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// SPREAD - EXEMPLO 2
const usuario1 = {
  nome: 'Felipe',
  idade: 19,
  empresa: 'Rocketseat',
};

const usuario2 = {
  ...usuario1,
  nome: 'Gabriel'
};

console.log(usuario1);
console.log(usuario2);