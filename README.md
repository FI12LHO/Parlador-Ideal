# Parlador Ideal
### Getting started  
Para executar o projeto, será necessário ter instalado
- NodeJs: 12x
- Expo: 3.28.5
### Desenvolvimento
Para iniciar o projeto é necessario somente clonar o repositorio no diretorio escolhido e realizar as configurações necessarias.  
`$ cd "diretorio escolhido"`  
`$ git clone https://github.com/FI12LHO/Parlador-Ideal.git`  
### Contrução
- Para construir o projeto em ambos os diretorios "backend" e "mobile" execute o comando `$ npm install`, para baixar todas as dependências necessarias.
- Dentro do diretorio "backend" execute o comando `$ npm knex migrate:latest` para executar as migrations e gerar o banco de dados local SQL.  
- Ainda dentro do diretorio "backend" execute o comando `$ npm knex seed:run` para executar as seeds.
### Features
Este projeto tem como objetivo demonstrar um chat simples, que possibilita a criação, edição e exclusão de mensagens. O sistema faz uso de uma API contruida em NodeJS e Expo(React Native) para versão mobile.
### Configuracão
Dentro do diretorio "mobile/src/services" no arquivo "api.tsx" o endereço IP do servidor deve ser alterado, http://10.0.0.102:3333 para o endereço do IP servidor na rede local (http://meu-ip:3333).
