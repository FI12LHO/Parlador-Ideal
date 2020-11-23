const knex = require("knex");
const knex_config = require("../../knexfile");

const connection = knex(knex_config.development);

module.exports = connection;