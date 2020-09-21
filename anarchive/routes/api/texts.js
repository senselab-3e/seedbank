const express = require("express");
const router = express.Router();
const knex = require("../../db/knex.js");

// GET api/events    sliderTexts
router.get("/", (req, res) => {
    knex("sliderTexts")
        .then(sliderTexts => {
            res.send(sliderTexts);
        })
        .catch(err => {
            console.log(err);
        });
});

// POST api/events
router.post("/", (req, res) => {
    knex("sliderTexts")
        .insert({
            text: req.body.name //,
            // data: "{sponges: " + req.body.sponges.toString() + "}"
        })
        .catch(err => {
            console.log(err);
        });
});

//DELETE api/events

router.delete("/:id", (req, res) => {

    let select = parseInt(req.params.id);
    console.log('Deleting Id: ' + select)
    knex("sliderTexts")
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