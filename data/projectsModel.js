const db = require('../data/db-config.js');

module.exports = {
    find,
    add,
    findResources,
    remove, 
    findById,
    addResources,
    findTask, 
    addTask
  }

function find() {
  return db('projects');
}

function add(projectsData) {
  return db('projects').insert(projectsData);
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}


function findResources(id){
  return db('resources')
}

function findTask(id){
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 'p.name', 't.description')
    .where({project_id: id})
}

function addTask(taskData) {
  return db('tasks').insert(taskData)
  .then(ids => {
    const [ id ] = ids;
    return findById(id);
  })
}

function addResources(resourcesData) {
  return db('resources').insert(resourcesData)
  .then(ids => {
    const [ id ] = ids;
    return findById(id);
  })
}

function remove(id) {
  return db('projects').where({ id }).del();
}