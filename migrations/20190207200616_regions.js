
exports.up = function(knex, Promise) {
    return knex.schema.createTable('regions', (table) => {
        table.increments();
        table.string('name')
            .notNullable();
        table.integer('routes').defaultsTo(0);
        table.string('island_name')
            .notNullable()
            .references('name')
            .inTable('island')
            .index()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('regions')
};
