
const usuarios = [
  { nome:'Diego', idade: 23, empresa:'Rocketseat' },
  { nome:'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome:'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 Utilizando o map
var usuarios_idade = usuarios.map(
  item => item.idade
);
console.log(usuarios_idade);

// 2.2 Utilizando o filter
var usuarios_rocketseat_mais18 = usuarios.filter(
  item => item.empresa === 'Rocketseat' && item.idade >= 18
);
console.log(usuarios_rocketseat_mais18);

// 2.3 Utilizando o find
var usuarios_google = usuarios.find(
  item => item.empresa === 'Google'
);
console.log(usuarios_google);

// 2.4 Unindo operações
var unindo_operacoes = 
  usuarios
    .map(
      item => ({...item, idade: item.idade * 2})
    )
    .filter(
      item => item.idade <= 50
    );
console.log(unindo_operacoes);