"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// const não pode ter seu valor reatribuído
var a = 1;
a = (_readOnlyError("a"), 3);
/* mutação é possível dentro de constante, quando objeto é trabalhado 
com mesmo formato, alterando valores dentro de objeto ou vetor */

var usuario = {
  nome: 'João'
};
usuario.nome = 'Cleiton';
console.log(usuario); //let - keyword para variáveis de escopo

function teste(x) {
  var y = 2;

  if (x > 5) {
    //reatribuição de valor permitido, dentro do escopo
    var _y = 4;
    console.log(x, _y);
  }
} // erro, "y" não está definido, está fora do escopo


console.log(y);
teste(10);
