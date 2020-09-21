exports.seed = function (knex) {
    return knex('events')
        .then(function () {
            // Inserts seed entries
            return knex('texts').insert([{
                    text: 'Amsterdam'
                },
                {
                    text: 'Digital Anthropologies #7'
                },
                {
                    text: 'Minor Movement'
                },
                {
                    text: 'Budapest'
                },
                {
                    text: 'Infrastructures for Un/Recommoning'
                },
                {
                    text: 'Minor Movements Celebration'
                },
                {
                    text: 'Neuroqueerness and Repairing'
                },
                {
                    text: 'Underspaze'
                },
                {
                    text: 'Suspensions (Hanging Out and Hanging In)'
                },
                {
                    text: 'Spaze'
                },
            ]);
        });
};