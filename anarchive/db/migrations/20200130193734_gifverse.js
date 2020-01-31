
exports.up = function(knex) {
  return knex.schema.createTable('gifverse', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
    t.string('path').notNullable()
    t.timestamps(false, true)
    t.string('filetype').notNullable()
    t.string('type')
    t.string('event_id')
  	t.text('tendencies', 'longtext')
  	t.string('notes')
  })
  .then(() => { console.log('created gifverse table') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('gifverse')
};
