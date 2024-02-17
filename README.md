# ES6 APP BUSCA

## Sobre o Projeto

Este projeto é um estudo de JavaScript com foco no ECMAScript 2015 (ES6), introduzindo um conjunto de melhorias anuais e novos recursos para aprimorar a linguagem. Ele aborda conceitos essenciais e práticas modernas, fornecendo experiência prática com os últimos avanços em JavaScript. Todos os conceitos foram aplicados nesta aplicação, visando realizar requisições para a API do GitHub e retornar as informações do repositório preenchido no input.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```
es6-app-busca/
|-- public/
|   |-- bundle.js
|   |-- index.html
|-- src/
|   |-- api.js
|   |-- main.js
|-- .babelrc
|-- package-lock.json
|-- package.json
|-- README.md
|-- webpack.config.js
|-- yarn-error.log
|-- yarn.lock
```

## Conceitos Apresentados

- **Instalando Node & Yarn**: Instruções para instalar o Node.js e o Yarn.
- **Configurando Babel**: Passos para configurar o Babel no projeto.
- **Classes**: Utilização de classes em JavaScript.
- **Const & Let**: Uso de const e let para declaração de variáveis.
- **Operações em Array**: Manipulação de arrays com métodos como map, filter, reduce e find.
- **Arrow Functions**: Utilização de arrow functions como uma sintaxe mais concisa para funções.
- **Valores padrão**: Definição de valores padrão para parâmetros de função.
- **Desestruturação**: Desestruturação de objetos e arrays em JavaScript.
- **Operadores rest/spread**: Utilização dos operadores rest e spread.
- **Template Literals**: Criação de strings interpoladas com template literals.
- **Object Short Syntax**: Sintaxe curta para definição de propriedades de objetos.

## Funcionalidades Implementadas

- Utiliza recursos do ES6, como classes, arrow functions, async/await, const, let, operações em array, parâmetros padrão de função, desestruturação de objetos, valores padrão, operadores rest/spread, template literals, configuração do webpack e mais.
- Gerencia requisições de API para o GitHub usando Axios.
- Implementa funcionalidades como busca de usuários e repositórios, exibindo avatares de usuários, descrições e links.

## Histórico do Projeto

### Commits

- **23 de abril de 2023:** Atualizou a descrição do readme.
- **6 de outubro de 2020:** Atualizou o readme.
- **15 de setembro de 2020:** Implementou aplicação ES6+ com tratamento de carregamento e erro.
- **14 de setembro de 2020:** Integrou aplicação ES6+ com funcionalidade de busca na API.
- **12 de setembro de 2020:** Desenvolveu a estrutura e estilos da aplicação ES6+.
- **10 de setembro de 2020:** Implementou funcionalidade async/await.
- **9 de setembro de 2020:** Configurou o Axios para uso com async/await.
- **8 de setembro de 2020:** Configurou o servidor de desenvolvimento do webpack e import/export.
- **6 de setembro de 2020:** Organizou arquivos do projeto.
- **5 de setembro de 2020:** Concluiu desafios relacionados a conceitos do ES6.
- **3 de setembro de 2020:** Concluiu desafios relacionados a conceitos do ES6.
- **1 de setembro de 2020:** Iniciou desafios relacionados a conceitos do ES6.

## Instruções para Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/joaogdcarvalho/es6-app-busca
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd es6-app-busca
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Compile e execute o aplicativo:
    ```bash
    npm start
    ```

5. Acesse o aplicativo em seu navegador: [http://localhost:3000](http://localhost:3000)

## Diretrizes de Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir pull requests, relatar bugs ou sugerir novos recursos.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.