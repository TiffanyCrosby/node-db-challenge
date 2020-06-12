
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(projectData());
    });
};

function projectData(){
  return [
    {
      name: 'clean the house' ,
      description:'the way mommy wants NOT daddy' ,
      completed: false,
    },
    {
     name: 'clean the car' ,
     description:'make it smell good' ,
      completed: false,
    },
    {
      name: 'make dinner' ,
      description:'follow the directions' ,
      completed: false,
    },
    {
      name: 'weed the garden' ,
      description:'do not forget the gloves' ,
      completed: false,
    },
  ]
}
