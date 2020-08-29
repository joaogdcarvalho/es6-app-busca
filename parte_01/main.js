// valores padrão de função
function soma(a = 3, b = 6) {
  return a + b;
};

// a = 1, b = 6
console.log(soma(1));

// a = 3, b = 6
console.log(soma());


// valores padrão em arrow function
const produto = (a = 3, b = 6) => a * b;

// a = 1, b = 6
console.log(produto(1));

// a = 3, b = 6
console.log(produto());