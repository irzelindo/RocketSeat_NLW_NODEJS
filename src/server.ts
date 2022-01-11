import 'reflect-metadata';
import express from 'express';
import './database';

// Add typo libraries, from @types/<library>
// @types/express - yarn add @types/express

const app = express();

const port = 3000

/**
 * GET      => Busca de dados
 * POST     => Inserir (Criar) dados
 * PUT      => Atualizar (Alteracao) dados
 * DELETE   => Apagar (Remover) dados
 * PATCH    => Alterar uma inform. expecifica
 */

/**
 * Tipos de parametros
 * Route Params => http://localhost:3000/produtos
 * Query Params => http://localhost:3000/produtos?name=teclado&preco<15
 * Body Params => {
 *      "name": "teclado",
 *      "preco": "5"
 * } 
 */


// http://localhost:3000
app.listen(
    port, 
    () => console.log(`Server is Runnning on port ${port}`)
);

/**
 *  yarn tsc to build *.js file from *.ts
 *  To avoid above command every time you wanna run the file
 *  Can install ts-node-dev - yarn add ts-node-dev -D for development only
 *  Edit package.json and add ["scripts" : { "dev": "ts-node-dev <path to file/script to run>" }]
 *  E.g: ["scripts" : { "dev": "ts-node-dev src/server.ts" }]
 * 
 * add "cli": {
        "migrationsDir": "src/database/migrations"
    } path to create migrations folder on ormconfig.json
 * Add <"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"> to package.json to run
 * CLI commands on typeorm
 * To create migrations run <yarn typeorm migration:create -n CreateUsers>
 * After editing the migration file add "migrations": [
        "src/database/migrations/*.ts"
    ], to ormconfig.json file to indicate where to run migrations from and finally can execute migrations using the command
    <yarn typeorm migration:run> on CLI. To revert just run <yarn typeorm migration:revert>
 * */ 

 
