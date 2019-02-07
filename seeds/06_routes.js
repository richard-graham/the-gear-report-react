
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('routes').del()
    .then(function () {
      // Inserts seed entries
      return knex('routes').insert([
        {island_name: 'North', region_name: 'Auckland', area_name: 'Coromandel', crag_name: "Castle Rock", wall_name: 'Quiet Earth Wall', name: 'ANZAC Parade', grade: '20'},
        {island_name: 'North', region_name: 'Waikato', area_name: 'Wharepapa', crag_name: 'Froggatt Edge', wall_name: 'Hold on to your face wall', name: 'Safety Buffalo', grade: '24'}
      ]);
    });
};
