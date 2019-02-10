
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walls').del()
    .then(function () {
      // Inserts seed entries
      return knex('walls').insert([
        {island_name: 'North', region_name: 'Auckland', area_name: 'Coromandel', name: "Quiet Earth Wall", crag_name: 'Castle Rock', access: 'From the car park stay on via right and stay on the old formed road (over-grown) down and to the east of castle rock. 500m on from a large slip look for a cairn and a rough but well marked climber’s track up the hill. This will get you to the left hand end of the Quiet Earth wall, Quiet Earth is 30m further right and ANZAC parade a further 40m up the hill.', },
        {island_name: 'North', region_name: 'Auckland', area_name: 'Waikato', name: "Hold on to your face wall", crag_name: 'Froggatt Edge', access: 'Right along side of the Bete Noir Wall starting immediately right of the access gully, from left to right', },
      ]);
    });
};
 