exports.up = function (knex) {
    return knex.schema.createTable('sliderTexts', function (t) {
            t.increments('id').primary()
            t.dateTime('createdAt').notNull();
            t.dateTime('updatedAt').nullable();
            t.string('body').notNullable()
            t.text('title').nullable();
            t.string('slider_color').nullable();
            t.string('user_id').nullable();

        })
        .then(() => {
            console.log('created texts table')
        })
        .catch((err) => {
            throw err
        })
        .finally(() => {
            knex.destroy()
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sliderTexts')
};