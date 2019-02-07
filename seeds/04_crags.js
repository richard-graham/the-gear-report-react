
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crags').del()
    .then(function () {
      // Inserts seed entries
      return knex('crags').insert([
        {island_name: 'North', region_name: 'Auckland', area_name: 'Coromandel', name: "Castle Rock", introduction: 'Castle Rock has nice long bolted climbing on beautifully solid rock, but before hurling yourself into this take more care than I would – serious trouble here is easy to come by.', gear: 'Bolts all day every day', altitude: '525m', access: 'closed until further notice', accommodation: 'A nice DoC campsite in Coromandel Town'},
        {island_name: 'North', region_name: 'Waikato', area_name: 'Wharepapa', name: 'Froggatt Edge', introduction: 'Froggatt Edge was original found by Margot Harkness in 1990, a discovery that marked the start of the climbing migration away from Wharepapa South (Castle Rock). Luke Newnham was the first to put up climbs at Froggatt and kicked things off with, Monsterpiece Theatre, Bete Noire & Sunstrike, not a bad start!', gear: 'All bolts', altitude: '0m', access: 'Froggatt Edge is about 3 minutes drive from Wharepapa South.', accommodation: 'Camping at Bryces or down at the school'}
      ]);
    });
};
