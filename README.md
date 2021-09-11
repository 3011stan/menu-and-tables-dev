# Instruções

Caso queira rodar a aplicação localmente, clone o repositório, verifique as dependências e as instale. node-modules não inclusa.

## Scripts disponíveis

No diretório do projeto, você pode rodar:

### `npm start`

Rode o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no browser.


## Sobre a aplicação
A aplicação contém um menu na rota padrão "/", este menu contém três botões: Postagens, Albuns e TO-DOs, respectivamente.
Cada botão direciona a página para a devida rota, que renderiza uma tabela. Cada tabela possui um campo para pesquisar dados da mesma por uma coluna pré-determinada (informado no placeholder). </br>
É possível ordenar os dados por quaisquer colunas, basta clicar na mesma para ordenar de forma crescente ou decrescente.</br>
A tabela conta também com a paginação, mostrando por padrão 10 linhas por página, podendo essa quantidade ser alterada pelo usuário.</br>
As funcionalidades das tabelas foram criadas utilizando o pacote <a href='https://www.npmjs.com/package/react-data-table-component'>DataTables</a>, exceto a funcionalidade de pesquisar, que foi escrita por mim.</br>
Para estilizar a aplicação utilizei a biblioteca <a href='https://reactstrap.github.io/'>Reactstrap</a>.</br>
Os dados foram consumidos do <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>.

## Acesso remoto
Hospedei o projeto no Github Pages para que seja possível a utilização sem ter que baixar e rodar localmente.</br>
Acesse <a href="https://3011stan.github.io/menu-and-tables/#/">Projeto Menu e Tabelas</a> para utilizar a aplicação.
