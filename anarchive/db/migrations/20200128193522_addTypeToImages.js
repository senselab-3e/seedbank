
exports.up = function(knex) {
  return knex.schema.table('images', function(t) {
  	t.string('type').notNullable()  	
  })
  .then(() => { console.log('added type to images') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.table('images', function(r) {
  	t.dropColumn('type')
  })
};
