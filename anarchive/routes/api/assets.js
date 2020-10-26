const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');
const assets = require('../../services/asset_helpers');
const path = require('path');
const fs = require('fs');


router.get('/images/', (req, res) => {
    knex('images')
        // .select('created_at')
        .then(image => {
            res.send(image)
        })
        .catch(err => {
            console.log(err)
        })
});

//GET api/assets/images/${latestentry}

//NOTE: ignore these for now. they were built when i wanted to show the latest upload, but then i settled for a local display of the image currently being uploaded. its enough for now
// router.get('/images/latest/', (req, res) => {
//     knex('images')
//         .max('id').first()
//         .then(image => {
//             res.send(image);
//         })
//         .catch(err => {
//             console.log(err)
//         })
// });

// // GET api/assets/images/${id}
// router.get('/images/lookup/:id', (req, res) => {
//     console.log(req.params.id, 'hello')
//     knex('images')
//         .where({
//             id: req.params.id
//         })
//         .then(image => {
//             //res.send(image, console.log(req.body.id, 'hello'))
//             res.send(image)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// });

// GET api/assets/images/${id}
router.get('/images/:id', (req, res) => {
    knex('images')
        .where({
            id: req.params.id

        }).first()
        .then(image => {
            res.sendFile(assets.get_path(image, assets.get_type(req.url)))
        })
        .catch(err => {
            console.log(err)
        })
});

// GET api/assets/gifverse
router.get('/gifverse/:id', (req, res) => {
    knex('gifverse')
        .where({
            id: req.params.id
        }).first()
        .then(gif => {
            res.sendFile(assets.get_path(gif, assets.get_type(req.url)))
        })
        .catch(err => {
            console.log(err)
        })
});

// POST api/assets/images
router.post('/images', assets.upload_form().single('image'), async (req, res) => {
    if (process.env.NODE_ENV != 'production') {
        res.send(console.log(req.file));
    }
    // else { assets.db_insert(req.file, req.body, (result) => { res.send(result) }); }
    else {
        res.send(await assets.db_insert(req.file, req.body));
    }
});

// POST api/assets/gifverse
router.post('/gifverse', assets.upload_form().single('image'), (req, res) => {
    if (process.env.NODE_ENV != 'production') {
        res.send(console.log(req.file))
    } else {
        knex('gifverse')
            .insert({
                name: req.file.filename,
                type: req.body.type,
                tendencies: req.body.tendencies,
                notes: req.body.notes,
                filetype: req.file.originalname.split('.').slice(-1).toString().toLowerCase(),
                path: req.file.destination.replace('assets\/gifverse\/', '')
            })
            .then(id => {
                res.send('Successfully uploaded gif')
            })
            .catch(err => {
                console.log(err)
            })
    }
});

module.exports = router;