const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');

// GET api/texts/:source
router.get('/', (req, res) => {
	knex('texts')
		.where( req.params.source ? { source: req.params.source } : {})
		.then(texts => { res.send(texts); })
		.catch(err => { console.log(err); })
});

module.exports = router;
