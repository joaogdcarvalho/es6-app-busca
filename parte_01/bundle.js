"use strict";

// valores padrão de função
function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

; // a = 1, b = 6

console.log(soma(1)); // a = 3, b = 6

console.log(soma()); // valores padrão em arrow function

var produto = function produto() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a * b;
}; // a = 1, b = 6


console.log(produto(1)); // a = 3, b = 6

console.log(produto());
