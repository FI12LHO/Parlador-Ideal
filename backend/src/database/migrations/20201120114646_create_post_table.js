exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
      table.increments('id');
      table.integer('author_id');
      table.string('author');
      table.string('date');
      table.string('text', 280);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
