
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){

    table.string('id').primary();
    table.string('login').notNullable();
    table.string('password').notNullable();

  })
};

exports.down = function(knex) {
    return table.schema.dropTable('users')
};
