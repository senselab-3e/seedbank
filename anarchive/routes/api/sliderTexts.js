const express = require("express");
const router = express.Router();
const knex = require("../../db/knex.js");

// GET api/events
router.get("/", (req, res) => {
    knex("sliderTexts")
        .then((sliderTexts) => {
            res.send(sliderTexts);
        })
        .catch((err) => {
            console.log(err);
        });
});

// POST api/events
router.post("/", (req, res) => {
    knex("sliderTexts")
        .insert({
            title: req.body.title,
            body: req.body.body
        })
        .then(() => {
            res.send('Added new Slider')
        })
        .catch((err) => {
            console.log(err);
        });
});

router.delete("/:id", (req, res) => {
    let select = parseInt(req.params.id);
    console.log('Deleting Id: ' + select)
    knex("sliderTexts")
        .where({
            id: select
        })
        .del()
        .then(id => {
            res.send('Deleted id' + id)
        })
        .catch(err => {
            res.sendStatus(500).json({
                status: 'Error :(',
                error: err
            })
        });
});

module.exports = router;