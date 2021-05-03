exports.up = function (knex) {
  return knex.schema.createTable("messages", function (table) {
    table.increments("id");
    table.string("username", 255);
    table.string("msg", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("message");
};
