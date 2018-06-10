exports.up = function(knex) {
  return knex.schema.createTable('events', t=> {
     t.increments('id').primary();
     t.string('crime').notNull();
     t.float('lat').notNull();
     t.float('long').notNull();
     t.datetime('date').notNull().default(knex.raw('now()'));
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
