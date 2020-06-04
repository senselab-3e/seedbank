const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');

const slack = require('../../services/slack_helpers');

// POST api/slack/nrch
router.post('/nrch', async (req, res) => {

	let [body, images] = await slack.grab_context(req);
	knex('texts')
		.insert({ title: req.body.text.substring(0,20),
				  body: body,
				  source: 'slack',
				  image_ids: images })
		.then(text => { res.send('context anarchived!'); })
		.catch(err => { res.send(err); })
});

module.exports = router;
