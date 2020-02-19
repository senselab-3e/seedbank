const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');
const assets = require('../../services/asset_path_helpers');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	// although it won't be tracked by git, you'll probably want to delete
  	// anything uploaded here after you're done developing
  	if (process.env.NODE_ENV != 'production') { return cb(null, './assets') };
	var dir = assets.hashPath(file, req.url.split('/')[1]);
	fs.access(dir, notfound => {
		if (notfound) { return fs.mkdir(dir, {recursive: true}, err => { return cb(err, dir) })}
		else { return cb(null, dir) }
	})
  },
  filename: function (req, file, cb) {
  	if (process.env.NODE_ENV != 'production') { var dir = './assets' }
  	else { var dir = assets.hashPath(file, req.url.split('/')[1]) };

  	var file_loc = path.join(dir, file.originalname);
  	fs.access(file_loc, notfound => {
  		if (notfound) { return cb(null, file.originalname) }
  		else {
			fs.readdir(dir, (err, files) => {
				var arr = file.originalname.split('.');
				var newName = arr.slice(0,-1).join('.') + '_' + files.length + '.' + arr.slice(-1).toString();
				return cb(err, newName);
			})
		}
  	})
}});

var upload = multer({ storage: storage });

// GET api/assets/images
router.get('/images/:id', (req, res) => {
	knex('images')
		.where({ id: req.params.id }).first()
		.then(image => { res.sendFile(assets.getPath(image, req.url.split('/')[1])) })
		.catch(err => { console.log(err) })
});

// GET api/assets/gifverse
router.get('/gifverse/:id', (req, res) => {
	knex('gifverse')
		.where({ id: req.params.id }).first()
		.then(gif => { res.sendFile(assets.getPath(gif, req.url.split('/')[1])) })
		.catch(err => { console.log(err) })
});

// POST api/assets/images
router.post('/images', upload.single('image'), (req, res) => {
	knex('images')
		.insert({ name: req.file.filename,
				  type: req.body.type,
				  tendencies: req.body.tendencies,
				  notes: req.body.notes,
				  filetype: req.file.originalname.split('.').slice(-1).toString().toLowerCase(),
				  path: req.file.destination.replace('assets\/images\/', '')
				})
		.then(id => { res.send('Successfully uploaded image') })
		.catch(err => { console.log(err) })
});

// POST api/assets/gifverse
router.post('/gifverse', upload.single('image'), (req, res) => {
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
});

module.exports = router;
