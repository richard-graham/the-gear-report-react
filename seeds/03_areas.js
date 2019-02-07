
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('areas').del()
    .then(function () {
      // Inserts seed entries
      return knex('areas').insert([
        {region_name: 'Auckland', island_name: 'North', name: 'Coromandel'},
        {region_name: 'Waikato', island_name: 'North', name: 'Wharepapa'}
      ]);
    });
};
