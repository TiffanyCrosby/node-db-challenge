exports.up = function(knex) {
    return (
      knex.schema
        .createTable('projects', tbl => {
          tbl.increments("id");
          tbl.text('name', 128)
            .unique()
            .notNullable();
          tbl.string('description');
          tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
        })
        .createTable('resources', tbl => {
          tbl.increments('id', 128);
          tbl.text('name', 128)
            .notNullable()
            .unique();
          tbl.text('description', 128);
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
        })
        .createTable('tasks', tbl => {
          tbl.increments('id');
          tbl.text('description', 128)
            .notNullable();
          tbl.text('note');
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
          tbl.boolean('completed')
            .notNullable()
            .defaultsTo(false);
        })
    );
  };
  
  exports.down = function(knex) {
    return (
      knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
    );
  };
