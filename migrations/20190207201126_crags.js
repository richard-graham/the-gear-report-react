
exports.up = function(knex, Promise) {
    return knex.schema.createTable('crags', (table) => {
        table.increments();
        table.string('name')
            .notNullable();
        table.integer('routes').defaultsTo(0);
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
        table.text('introduction');
        table.text('gear');
        table.text('altitude');
        table.text('access');
        table.text('img_url')
        table.text('accommodation')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('crags')
  };
