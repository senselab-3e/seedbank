const express = require("express");
const router = express.Router();
const knex = require("../../db/knex.js");

// GET api/events
router.get("/", (req, res) => {
	knex("events")
		.then(events => {
			res.send(events)

		})
		.catch(err => {
			console.log(err);
		});
});

// POST api/events

/// the .then(events => {
// 	res.send(events)

// })
//is just a test. it was done to see what was going wrong with my lack of updates in the reducer/globalcontext front end. this was because no data was being sent back // and therefore the axios await was left hanging, before the reducer was triggered re-setting the state of the events. nothing was happening though, with the await axios causing teh error console to delay reporting any error in the first place. but now i know it's that the api has to be rewritten and not a probelm with my front-end script
router.post("/", (req, res) => {

	const {
		sponges,
		name
	} = req.body;


	//the above still isn't quite write. it's returning 'Created'....eee... 

	knex("events")
		.insert({
			name: req.body.name,
			data: "{sponges: " + req.body.sponges.toString() + "}"
		})
		.then(res.send({
			success: true,
			name: name,
			data: "{sponges: " + sponges.toString() + "}"
		}))
		.catch(err => {
			console.log(err);
		});

});

//DELETE api/events

router.delete("/:id", (req, res) => {

	let select = parseInt(req.params.id);
	console.log('Deleting Id: ' + select)
	knex("events")
		.where({
			id: select
		})
		.del()
		.then(res.send({
			id: select
		}))
		.catch(err => {
			res.sendStatus(500).json({
				status: 'Error :(',
				error: err
			})
		});
});

module.exports = router;