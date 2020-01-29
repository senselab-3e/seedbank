
exports.up = function(knex) {
  return knex.schema.table('events', function(t) {
  	t.datetime('event_date')
  	t.string('location')
  	t.string('event_type')
  })
  .then(() => { console.log('added fields to events') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.table('events', function(r) {
  	t.dropColumn('event_date')
  	t.dropColumn('location')
  	t.dropColumn('event_type')
  })
};