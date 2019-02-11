
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {id: 1, title: 'Worn cable at the Point', description: '20m past high hopes, rope is frayed and looks like it will fail soon', severity: 4, island_name: 'North', region_name: 'Auckland', area_name: 'Coromandel', crag_name: 'Castle Rock', wall_name: "Quiet Earth Wall", route_name: "Anzac Parade"},
      ]);
    });
};
