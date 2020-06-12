const db = require('../data/db-config.js');

module.exports = {
    find,
    add,
    findById,
    findResources,
    findTask,
    addTask,
    addResources,
    remove, 
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

function addResources(body) {
  return db('resources').insert(body)
  .then(ids => {
    const [ id ] = ids;
    return findById(id);
  })
}

function remove(id) {
  return db('projects').where({ id }).del();
}