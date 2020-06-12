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
  return db
  .select(
    'p.name',
    'p.descriptions as projectDescription',
    't.id as TaskNumber',
    't.descriptions as taskDescription'
  )
  .from('tasks as t')
  .join('project as p', 't.project_id', '=', 'p.id')
  .where({ 't.project_id': id });
}

function addTask(body) {
  return db('tasks').insert(body, 'id').then((ids) => {
		return findByOneTaskId(ids[0]);
	});
}

function addResources(body) {
  return db('resources').insert(body, 'id').then((ids) => {
		return findById(ids[0]);
	});
}

function remove(id) {
  return db('projects').where({ id }).del();
}