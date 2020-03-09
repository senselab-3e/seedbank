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

//CREATE EVENTs api/events

router.post("/", (req, res) => {
	//double check this is not being used
	// const {
	// 	sponges,
	// 	name
	// } = req.body;
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