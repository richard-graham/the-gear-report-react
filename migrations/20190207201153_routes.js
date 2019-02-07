
exports.up = function(knex, Promise) {
    return knex.schema.createTable('routes', (table) => {
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
        table.string('wall_name')
            .references('name')
            .inTable('wall')
            .index();
        table.text('access');
        table.text('img_url')
        table.integer('grade');
        table.integer('quality');
        table.string('length');
        table.integer('bolts');
        table.string('first-ascent')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('routes')
};
