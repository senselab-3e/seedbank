const express = require("express");
const router = express.Router();
//const knex = require("../../db/knex.js");

// GET api/zigs/signatures
router.get("/signatures", (req, res) => {
    // knex("signatures")
    // //events naming may need to change (?)
    // 	.then(signatures => {
    // 		res.send(signatures);
    // 	})
    // 	.catch(err => {
    // 		console.log(err);
    // 	});
});

// POST api/zigs/signatures

router.post("/signatures", (req, res) => {
    res.send({
        success: true,
        color: req.body.color,
        path: req.body.path
    })

    //NOTE: THE BACKEND is yet to be created so this is just a placeholder
    // knex("signatures")
    //     .insert({
    //         color: req.body.color,
    //         data: req.body.path
    //     })
    // .catch(err => {
    //     console.log(err);
    // });
});

//DELETE api/events

// router.delete("/:id", (req, res) => {

// 	let select = parseInt(req.params.id);
// 	console.log('Deleting Id: ' + select)
// 	knex("signatures")
// 		.where({
// 			id: select
// 		})
// 		.del()
// 		.then(res.send({
// 			id: select
// 		}))
// 		.catch(err => {
// 			res.sendStatus(500).json({
// 				status: 'Error :(',
// 				error: err
// 			})
// 		});
// });

module.exports = router;