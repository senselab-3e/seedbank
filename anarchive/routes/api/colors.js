const express = require("express");
const router = express.Router();
const knex = require("../../db/knex.js");

router.post("/:id", (req, res) => {
    let select = parseInt(req.params.id);
    knex("users")
        .where({
            id: select
        })
        .first()
        .insert({
            patch_color: req.body.colorPick,
        })
        .then(() => {
            res.send("added color patch" + select);
        })

        .catch((err) => {
            res.status(500).json({
                status: "Error :(",
                error: err
            });
        });
});

module.exports = router;