
exports.up = function(knex) {
  return knex.schema.createTable('texts', function (t) {
    t.increments('id').primary()
    t.string('title')
    t.timestamps(false, true)
    t.string('source')
    t.string('body')
    t.string('images')
  })
  .then(() => { console.log('created texts table') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('texts')
};