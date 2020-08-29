// const não pode ter seu valor reatribuído
const a = 1;
a = 3;

/* mutação é possível dentro de constante, quando objeto é trabalhado 
com mesmo formato, alterando valores dentro de objeto ou vetor */
const usuario = { nome: 'João'};
usuario.nome = 'Cleiton';
console.log(usuario);

//let - keyword para variáveis de escopo
function teste(x) {
  let y = 2;

  if (x>5) {
    //reatribuição de valor permitido, dentro do escopo
    let y = 4;

    console.log(x, y);
  }
}

// erro, "y" não está definido, está fora do escopo
console.log(y);

teste(10);