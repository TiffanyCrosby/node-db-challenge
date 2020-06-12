
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert(resourceData());
    });
};

function resourceData(){
  return [
    {
      name: 'cook book',
      description: 'recipies',
      project_id: 3,
    },
    {
      name: 'shovel',
      description: 'dig, dig, dig',
      project_id: 4,
    },
    {
      name: 'cleaning spray',
      description: 'sqirt, sqirt',
      project_id: 1,
    },
    {
      name: 'sponges',
      description: 'swipe, wipe, repeat',
      project_id: 2,
    },
  ]
}
