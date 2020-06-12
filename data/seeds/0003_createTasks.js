
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(tasksData());
    });
};

function tasksData(){
  return [
    {
      description: 'spray everything' ,
      note:'use cleaning spray' ,
      project_id: 1,
      completed: false,
    },
    {
      description: 'wipe everything down' ,
      note:'use sponges' ,
      project_id: 1,
      completed: false,
    },
    {
      description: 'dig holes' ,
      note:'put plants in holes' ,
      project_id: 4,
      completed: false,
    },
    {
      description: 'water the plants' ,
      note:'use a hose' ,
      project_id: 4,
      completed: false,
    },
    {
      description: 'get ingredients' ,
      note:'make sure they are measured correctly' ,
      project_id: 3,
      completed: false,
    },
    {
      description: 'put it in the pan' ,
      note:'do not let it burn' ,
      project_id: 3,
      completed: false,
    },
    {
      description: 'close the windows' ,
      note:'make sure there is no way to get water in the car' ,
      project_id: 2,
      completed: false,
    },
    {
      description: 'wax the car' ,
      note:'clean all the bug spots' ,
      project_id: 2,
      completed: false,
    },
  ]
}