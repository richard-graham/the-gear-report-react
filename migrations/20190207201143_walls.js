
exports.up = function(knex, Promise) {
    return knex.schema.createTable('walls', (table) => {
        table.increments();
        table.string('name')
            .notNullable();
        table.string('island_name')
            .notNullable()
            .references('name')
            .inTable('island')
            .index();
        table.string('region_name')
            .notNullable()
            .references('name')
            .inTable('region')
            .index();
        table.string('area_name')
            .references('name')
            .inTable('area')
            .index();
        table.string('crag_name')
            .references('name')
            .inTable('crag')
            .index();
        table.text('access')
        table.text('img_url')
        table.string('altitude')
        table.string('walk_time')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('walls')
};
