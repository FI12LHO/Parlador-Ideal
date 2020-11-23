Sistema construido usando NodeJs para o servidor e Expo (React Native) para a versão mobile.
Banco de dados contruido usando SQLite e o Query Builder Knex.

Servidor
1. Dentro do diretorio do servidor, uso o comando "npm install" para baixar todas as dependências;
2. Caso o banco de dados local não esteja criado use os comandos: 
2.1. "npm knex migrate:latest" para executar as migrations;
2.2. "npm knex seed:run" para executar as sementes;
3. Para iniciar o servidor, use o comando "npm start";

Expo (React Native)
1. Altere o endereço do servidor (de http://10.0.0.101/ para http://ip-do-servidor) dentro do arquivo "api.js" no caminho "src/services/api.js";
