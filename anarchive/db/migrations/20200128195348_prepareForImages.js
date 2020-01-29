
exports.up = function(knex) {
  return knex.schema.table('images', function(t) {
  	t.string('event_id')
  	t.datetime('taken_at')
  	t.text('tendencies', 'longtext')
  	t.string('notes')
  })
  .then(() => { console.log('added fields to images') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.table('images', function(r) {
  	t.dropColumn('event_id')
  	t.dropColumn('taken_at')
  	t.dropColumn('tendencies')
  	t.dropColumn('notes')
  })
};
