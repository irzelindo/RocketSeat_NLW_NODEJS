# Rockel NLW Curso NodeJS

## Verbos/Metodos HTTP

 * GET      => Busca de dados
 * POST     => Inserir (Criar) dados
 * PUT      => Atualizar (Alteracao) dados
 * DELETE   => Apagar (Remover) dados
 * PATCH    => Alterar uma inform. expecifica


## Tipos de parâmetros em URLs
 * Tipos de parametros
 * Route Params => http://localhost:3000/produtos
 * Query Params => http://localhost:3000/produtos?name=teclado&preco<15
 * Body Params => {
    "name": "teclado",
    "preco": "5"
 } 

 ## Regras

 - Registo de Utilizadores

   - Não é permitido registar utilizador sem email;
   - Não é permitido registar mais de um utiliazdor com o mesmo email;

 - Registo de TAG
 
   - Não é permitido registar TAG sem nome;
   - Não é permitido registar mais de uma TAG com o mesmo email;
   - Não é permitido registar TAG sem ser administrador;

 - Registo de Elogios
 
   - Não é permitido registar TAG sem nome;
   - Não é permitido registar mais de uma TAG com o mesmo email;
   - Não é permitido registar TAG sem ser administrador;

## Fluxo 

- SERVICE -> CONTROLLER -> SERVICE -> REPOSITORIES -> DATABASE 

### Ordem

- DATABASE ---> ENTITY ---> REPOSITORY ---> SERVICE ---> CONTROLLER --> ROUTES
