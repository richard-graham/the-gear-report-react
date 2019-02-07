
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('regions').del()
    .then(function () {
      // Inserts seed entries
      return knex('regions').insert([
        {name: 'Auckland', island_name: 'North'},
        {name: 'Waikato', island_name: 'North'},
        {name: 'Takaka', island_name: 'South'}
      ]);
    });
};
