# Api Rest CRUD 

## Visao Geral 

Exemplo de ApiRest de um catalogo de filmes .

## Instalacao

1- Clone o repositorio do Github

```bash
$ git clone https://github.com/Miguel-D3v/ApiRest.git
```

2- Acesse o diretorio do projeto 

```bash
$ cd ApiRest
```

3- Instale as dependências do projeto

```bash
$ npm install
```

## Configuração

Antes de executar o projeto, você precisa configurar algumas informações.

Crie um arquivo .env na raiz do projeto e defina a seguinte variável de ambiente:

```bash
dbURL = "Sua url de conexao com o banco de dados"
PORT = "Porta do servidor"
```
## Execução

Iniciar o servidor

```bash
$ node server.js
```

## API

```bash
$ GET  http://localhost:PORT/movies  # Ira listar todos os filmes 
$ POST http://localhost:PORT/addmovies  # Ira adicionar um novo filme a lista
$ PUT http://localhost:PORT/update/{id} # Vai atualizar os dados do filme do id passado na url
$ DELETE http://localhost:PORT/delete/{id} # Exclui o filme do id passado na url
```

