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
            res.sendStatus(500).json({
                status: "Error :(",
                error: err,
            });
        });
});

// POST api/events
router.post("/", (req, res) => {
    console.log(typeof req.body.userId, res, 'applesss')
    knex("sliderTexts")
        .insert({
            title: req.body.title,
            body: req.body.body,
            user_id: req.body.userId,
        })
        .then(() => {
            res.send("Added new Slider");
        })
        .catch((err) => {
            console.log(err);
        });
});

router.delete("/:id", (req, res) => {
    let select = parseInt(req.params.id);
    console.log("Deleting Id: " + select);
    knex("sliderTexts")
        .where({
            id: select,
        })
        .del()
        .then((id) => {
            res.send("Deleted id" + id);
        })
        .catch((err) => {
            res.sendStatus(500).json({
                status: "Error :(",
                error: err,
            });
        });
});

// GET api/events
router.get("/:userId", (req, res) => {
    let select = parseInt(req.params.userId);
    //req.body.userId
    knex("sliderTexts")
        .where({
            user_id: select,
        })
        .then((sliderTexts) => {
            res.send(sliderTexts);
        })
        .catch((err) => {
            res.sendStatus(500).json({
                status: "Error :(",
                error: err,
            });
        });
});

module.exports = router;