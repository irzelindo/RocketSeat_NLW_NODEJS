import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors"
import './database';
import { router } from "./routes"

// Add typo libraries, from @types/<library>
// @types/express - yarn add @types/express

const app = express();

const port = 3000

app.use(express.json()); // json parse middleware

app.use(router); // routes middleware

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            status: "400",
            error: err.message
        });
    }

    return response.status(500).json({
        status: "500",
        message: 'Internal Server Error'
    }); // errors cacht middleware
}); // Colocar depois das routas

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
 * To create migrations run < yarn typeorm migration:create -n CreateUsers >
 * < yarn typeorm migration:create -n CreateTags >
 * After editing the migration file add "migrations": [
        "src/database/migrations/*.ts"
    ], to ormconfig.json file to indicate where to run migrations from and finally can execute migrations using the command
    <yarn typeorm migration:run> on CLI. To revert just run <yarn typeorm migration:revert>
 * */


