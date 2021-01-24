const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');

// GET api/texts
router.get('/', (req, res) => {
	knex('texts')
		.where( req.query.source ? { source: req.query.source } : {})
		.then(texts => { res.send(texts); })
		.catch(err => { console.log(err); })
});

module.exports = router;
