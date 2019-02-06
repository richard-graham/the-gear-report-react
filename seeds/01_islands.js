
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('islands').del()
    .then(function () {
      // Inserts seed entries
      return knex('islands').insert([
        {id: 1, name: 'North'},
        {id: 2, name: 'South'} 
      ]);
    });
};
 