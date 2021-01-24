const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');
const assets = require('../../services/asset_helpers');
const path = require('path');
const fs = require('fs');

// GET api/assets/images
router.get('/images', (req, res) => {
	knex('images')
		.where({ id: req.query.id }).first()
		// .then(image => { res.send(image.external_url) })
		.then(image => { res.sendFile(assets.get_path(image)) }) // this needs some more handling, perhaps especially for dev mode at least (because it looks for the files on the local machine)
		.catch(err => { console.log(err) })
});

// GET api/assets/gifverse
// router.get('/gifverse', (req, res) => {
// 	knex('gifverse')
// 		.where({ id: req.query.id }).first()
// 		.then(gif => { res.sendFile(assets.get_path(gif, 'gifverse')) })
// 		.catch(err => { console.log(err) })
// });

// POST api/assets/images
router.post('/images', assets.upload_form().single('image'), async (req, res) => {
	if (process.env.NODE_ENV != 'production') { res.send(console.log(req.file)); }
	else { res.send(await assets.db_insert(req.file, req.body)); }
});

// POST api/assets/gifverse
router.post('/gifverse', assets.upload_form().single('image'), (req, res) => {
	if (process.env.NODE_ENV != 'production') { res.send(console.log(req.file)) }
	else {
		knex('gifverse')
			.insert({ name: req.file.filename,
					  type: req.body.type,
					  tendencies: req.body.tendencies,
					  notes: req.body.notes,
					  filetype: req.file.originalname.split('.').slice(-1).toString().toLowerCase(),
					  path: req.file.destination.replace('assets\/gifverse\/', '')
					})
			.then(id => { res.send('Successfully uploaded gif') })
			.catch(err => { console.log(err) })
	}
});

module.exports = router;
