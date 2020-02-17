const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');
const assets = require('../../services/asset_path_helpers');
const multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	const dir = assets.createPath(file.originalname);

  	console.log('Target dir:' + dir);

  	// commenting this out for now so that we don't create unnecessary dirs while testing; 
  	// will think of a better strategy for dev mode going forward

  	// fs.exists(dir, exist => {
  	// 	if (exist) { return cb(null, dir) };
  	// 	return fs.mkdir(dir, err => cb(err, dir));
  	// })
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

// GET api/assets/image
router.get('/image/:id', (req, res) => {
	knex('images')
		.where({ id: req.params.id }).first()
		.then(image => { res.sendFile(assets.getPath(image, 'images')) })
		.catch(err => { console.log(err) })
});

// GET api/assets/gifverse
router.get('/gifverse/:id', (req, res) => {
	knex('gifverse')
		.where({ id: req.params.id }).first()
		.then(gif => { res.sendFile(assets.getPath(gif, 'gifverse')) })
		.catch(err => { console.log(err) })
});

// POST api/assets/image
router.post('/image', upload.single('image'), (req, res) => {

	res.send(console.log(req.files));

	// also commenting this out for testing purposes
	// knex('images')
		// 	.insert({ name: req.body.name,
		// 			  type: req.body.type,
		// 			  tendencies: req.body.tendencies,
		// 			  notes: req.body.notes,
		// 			  filetype: req.body.name.split('.')[1].toLowerCase(),
		// 			  path: assets.createPath(req.body.name)
		// 			})
		// 	.catch(err => { console.log(err) })
});

module.exports = router;
