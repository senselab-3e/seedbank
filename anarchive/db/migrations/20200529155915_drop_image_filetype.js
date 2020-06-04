
exports.up = function(knex) {
  knex.schema.table('images', function(t) {
  	t.dropColumn('filetype')
  })
  .then(() => { console.log('dropped filetype from images') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() });

  knex.schema.table('gifverse', function(t) {
  	t.dropColumn('filetype')
  })
  .then(() => { console.log('dropped filetype from gifverse') })
  .catch((err) => { throw err} )
  .finally(() => { knex.destroy() });
};

exports.down = function(knex) {
  
};
