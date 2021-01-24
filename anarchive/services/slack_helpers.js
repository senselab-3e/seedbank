const { WebClient } = require('@slack/web-api');
const auth_token = process.env.ANARCHIVEBOT_TOKEN;
const Slack = new WebClient(auth_token);
const assets = require('./asset_helpers');

async function grab_context(req) {

	try {
		const context = await Slack.conversations.history({
			channel: req.body.channel_id,
			latest: req.headers['X-Slack-Request-Timestamp'],
			inclusive: true,
			limit: 10 // grab more to start with because some may be filtered out below
		});

		var messages = context.messages.filter(m => !['bot_message', 'channel_join'].includes(m.subtype) && !m.text.startsWith('\/nrch')).slice(0, 5).reverse();
		var processed = await Promise.all(messages.map(process_message));
		var body = processed.map(m => { return m.text }).join(' \n');
		var images = processed.filter(m => m.image).map(m => { return m.image; });
		return [body, images];

	} catch (err) {
		return [err.toString(), 'error'];
	}
};

function process_message(message) {
	return new Promise( async(resolve, reject) => {
		var result = { text: message.text };

		if (message.hasOwnProperty('files')) {
			var image_url = message.files[0].url_private;
			var file = await assets.upload_from_url(image_url, auth_token);
			var meta = { type: 'anarchival_trace', external_url: image_url };
			var id = await assets.db_insert(file, meta, true); 

			result.image = { id: id, external_url: image_url };
		}
		resolve(result);
	})
};

async function format_text(knex_result) {
	var r = knex_result[0];
	var response = { response_type: 'in_channel', 'blocks': [
			{
				'type': 'section',
				'text': {
					'type': 'mrkdwn',
					'text': '"' + r.title + '"' + '\n' + r.body
				}
			}
		]
	};
	if (r.images) { 
		response.blocks[0].accessory = {
							'type': 'image',
							'image_url': JSON.parse(r.images)[0].external_url,
							'alt_text': r.title };
	};
	return response;
};

module.exports = {
    grab_context,
    format_text
};
