
exports.up = function(knex) {
  return knex.schema.table('images', function(t) {
  	t.string('external_url')  	
  })
  .then(() => { console.log('added external_url to images') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.table('images', function(t) {
  	t.dropColumn('external_url')
  })
};
