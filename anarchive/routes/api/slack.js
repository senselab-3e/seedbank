const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');
const axios = require('axios');

const slack = require('../../services/slack_helpers');

const help_message = {
	'response_type': 'ephemeral',
	'text': 'how to /nrch!',
	'attachments': [{
		'text': `Type \`/nrch\` to send the previous 5 messages in the channel to the database, anonymized, and including any images.

Add an optional title or comment to the capture like \`/nrch some text\`

Certain words are reserved for special commands:

\`/nrch get\`: Retrieve a randomly selected trace from an earlier process
\`/nrch help\`: How you got here!`
	}]
};

// Slack sends all requests as POST data, so we'll have to handle these ourselves from there
router.post('/nrch', (req, res) => {
	

	if (req.body.text === 'help') {
		res.send(help_message);
	} 
	else if (req.body.text === 'get') {
		get(req, res).then(r => { res.send(r) });
	}
	else {
		post(req, res).then(r => { res.send(r) });
	};
});

// GET
function get(req, res) {
	return new Promise( async (resolve, reject) => {
		knex('texts')
		.select(['title', 'body', 'images'])
		.orderBy(knex.raw('RAND()'))
		.limit(1)
		.then(r => { resolve(slack.format_text(r)) })
		.catch(err => { console.log(err); });
	});
};

// POST
function post(req, res) {
	return new Promise( async (resolve, reject) => {
		let [body, images] = await slack.grab_context(req);
		knex('texts')
			.insert({ title: req.body.text.substring(0,20),
					  body: body,
					  source: 'slack',
					  images: images.length > 0 ? JSON.stringify(images) : ''
					})
			.then(text => { resolve('anarchiving trace!'); })
			.catch(err => { reject(err); });
	});
};

module.exports = router;
