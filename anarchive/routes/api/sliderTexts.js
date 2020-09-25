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
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;