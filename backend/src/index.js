const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //Importação de um arquivo

const app = express();

app.use(express.json()); // Informando que o app usará arquivos .json

//NPM: Instala pacotes
//NPX: Inicia pacotes

/**
 * Métodos HTTP(app.)
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleter uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados e enviado na rota após o "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos; acessado por Params invés de Routes Params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Banco de dados:
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, Firebase
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('user').select('*').where()
    */

app.use(cors());

app.use(routes);

app.listen(3333);