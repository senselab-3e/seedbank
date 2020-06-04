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
			limit: 5
		});

		var messages = context.messages.filter(m => m.subtype != 'channel_join');
		var parsed = await Promise.all(messages.map(parse_message));
		var body = parsed.map(m => { return m.text }).join(' \n');
		var images = parsed.filter(m => m.image).map(m => { return m.image }).join(', ');
		return [body, images];

	} catch (err) {
		return [err.toString(), 'error'];
	}
};

function parse_message(message) {
	return new Promise( async(resolve, reject) => {
		var result = { text: message.text };

		if (message.hasOwnProperty('files')) {
			var image_url = message.files[0].url_private;
			var file = await assets.upload_from_url(image_url, auth_token);
			var meta = { type: 'anarchival_trace' };
			var id = await assets.db_insert(file, meta, true); 

			result.image = id;
		}
		resolve(result);
	})
};

module.exports = {
    grab_context
};
