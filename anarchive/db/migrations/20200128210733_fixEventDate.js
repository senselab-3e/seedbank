
exports.up = function(knex) {
  return knex.schema.table('events', function(t) {
  	t.dropColumn('event_date')
  	t.datetime('event_start')
  	t.datetime('event_end')
  })
  .then(() => { console.log('added fields to events') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.table('events', function(r) {
  	t.datetime('event_date')
  	t.dropColumn('event_start')
  	t.dropColumn('event_end')
  })
};
