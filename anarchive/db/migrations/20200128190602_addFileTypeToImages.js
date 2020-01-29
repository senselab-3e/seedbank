
exports.up = function(knex) {
  return knex.schema.table('images', function(t) {
  	t.string('filetype').notNullable()  	
  })
  .then(() => { console.log('added filetype to images') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() })
};

exports.down = function(knex) {
  return knex.schema.table('images', function(r) {
  	t.dropColumn('filetype')
  })
};
