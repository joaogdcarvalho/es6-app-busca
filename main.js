// 'as' permite renomear função, que não está definida como 'export default'
// função definida como 'export default' não precisa ficar entre chaves no comando de import
import div, { mult, sub as subFunction } from './funcoes';

// como 'soma' é export default, caso queira renomea-lá, não precisa da keyword 'as'
import somaFunction from './soma';

// forma de importação pontual de funções
import { bomDia, boaTarde, boaNoite, confirmacaoSaida } from './concat';

// forma de importação total de funções
import * as funcoesMsg from './concat';

console.log(div(8,2));
console.log(mult(3,0));
console.log(subFunction(4,2));
console.log(somaFunction(1,2));

// sempre usar apenas uma opção (pontual/total), importar uma vez o documento desejado
console.log(bomDia('João'));
console.log(boaTarde('Antônia'));
console.log(boaNoite('Larissa'));
console.log(confirmacaoSaida('André'));

console.log(funcoesMsg.bomDia('João'));
console.log(funcoesMsg.boaTarde('Antônia'));
console.log(funcoesMsg.boaNoite('Larissa'));
console.log(funcoesMsg.confirmacaoSaida('André'));

// visualizar todas as funções contidas no pacote 'funcoesMsg'
console.log(funcoesMsg);