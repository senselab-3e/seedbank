
exports.up = function(knex) {
  return knex.schema.createTable('images', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
    t.string('path').notNullable()
    t.timestamps(false, true)
  })
  .then(() => { console.log('created images table') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('images')
};
