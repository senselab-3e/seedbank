const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');
const assets = require('../../services/asset_path_helpers');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
var upload = multer().single('avatar')


var storage = multer.diskStorage({
	//NOTES from documentation: You are responsible for creating the directory when providing destination as a function. 
	//When passing a string, multer will make sure that the directory is created for you. -->not what we are doing
	// therefore.... what is creating our folder? we have something generating a file path, but .... where is the folder? especially one with all the fancy sub folders created in the return of the asset_path_helper.js ? 
	destination: function (req, file, cb) {

		// NOTE: --- was originally suspicious of path resolve in the asset helper bc of console log errors printing filename as a folder name and the file (eg. seedbank/anarchive/routes/assets/images/c6/eb/33/1e/monday-file-swap2.gif/monday-file-swap2.gif')<---- see folder name being given filename
		// i've now changed it so that only the file path is being returned by the helper... unless the idea was to have the filename be a folder name. if so the extension on the file name needs to be filtered out with a regex. 
		// const dir = assets.createPath(file.originalname);

		const dir = assets.createPath('./public/upload/');
		// cb(null, path.join(__dirname, dir))
		// I'm simplifying this for basic testing purposes. the error says no file path exists - so logically that means the filepath being created by the function is not being dynamically created by multer- or as the documentation attests to .
		//therefore i'm attempting to pass it a string value instead, which multer is supposed to be able to handle itself and create a folder for... in theory. 
		cb(null, dir);
		//I'm now trying to work from the root folder instead of the current folder...
		//NOTES:   ./ is the current folder   / is the root folder  ../ is the parent of the current folder
		//cb(null, './assets/images'); ///NOTE: //Error: ENOENT: no such file or directory, open 'assets/images/cube-2.gif' persists, even when the string value of ./assets/images/ is passed to it. 
		// cb(null, path.join(__dirname, 'assets/images')) //NOTE:  ///this still returned the same no file or directory error --- but a very exact path of /vagrant/seedbank-org/seedbank/anarchive/routes/api/assets/images/cube-2.gif

		//NOTES : ---> consistent same error Error: ENOENT: no such file or directory, open 'images/cube-0.gif'
		// cb(null, 'images'); // checked as differential for multer supposedly creating the folder on it's own, as perhaps file path information in the string isn't being interpreted correctly and part of the name of the folder in general, but there was no change in the error thrown
		// cb(null, './images'); //same error
		// cb(null, '../images'); //same error
		// cb(null, dir) // brought this back ....
		console.log('Target dir:' + dir);



		// commenting this out for now so that we don't create unnecessary dirs while testing; 
		// will think of a better strategy for dev mode going forward

		// fs.exists(dir, exist => {
		// 	if (exist) { return cb(null, dir) };
		// 	return fs.mkdir(dir, err => cb(err, dir));
		// })
	},
	//ok... i think this is why there's this double print going on of the file name being used
	//for a folder name and the file inside.. which will cause problems as the file extension is being included.
	//eg. images/c6/eb/33/1e/monday-file-swap2.gif/monday-file-swap2.gif
	filename: function (req, file, cb) {
		//console.log(file.originalname, ':file name')
		// cb(null, file.originalname);
		cb(null, file.originalname);
	}
});

var upload = multer({
	storage: storage
});

// GET api/assets/image
router.get('/image/:id', (req, res) => {
	knex('images')
		.where({
			id: req.params.id
		}).first()
		.then(image => {
			res.sendFile(assets.getPath(image, 'images'))
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
			res.sendFile(assets.getPath(gif, 'gifverse'))
		})
		.catch(err => {
			console.log(err)
		})
});



//according to documentation --- upload.single is ok.... 
router.post('/image', upload.single('image'), (req, res) => {
	//THIS ISN"T HAppening. .. .. . 
	res.send(console.log(req.files, 'sending these files'));

	// also commenting this out for testing purposes
	// knex('images')
	// 	.insert({ name: req.body.name,
	// 			  type: req.body.type,
	// 			  tendencies: req.body.tendencies,
	// 			  notes: req.body.notes,
	// 			  filetype: req.body.name.split('.')[1].toLowerCase(),
	// 			  path: assets.createPath(req.body.name)
	// 			})
	//// not working yet but stashing
	// upload(req, res, function (err) {
	// 	if (err instanceof multer.MulterError) {
	// 		console.log('A Multer error occurred when uploading')
	// 	} else if (err) {
	// 		console.log('An unknown error occurred when uploading')
	// 	}
	// })
});

//module.exports = multer;
module.exports = router;