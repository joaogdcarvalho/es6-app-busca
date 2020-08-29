
const usuario = {
  nome: 'Antonio',
  idade: 29,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP',
  },
};

// busca de valores 
//const nome = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;

// busca de valores com conceito de desestruturação
const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

// desestruturação com função - no caso está sendo passada propriedade específica de um objeto(usuário) para função
function mostraNome({ nome }) {
  console.log(nome);
}

mostraNome(usuario);