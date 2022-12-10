const express = require("express");
const router = express.Router();
const logSchema = require("../models/log");

// create log
router.post("/logs", (req, res) => {
  const log = logSchema(req.body);
  log
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all logs
router.get("/logs", (req, res) => {
  logSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get log by id
router.get("/logs/:id", (req, res) => {
  const { id } = req.params;
  logSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update log

router.put("/logs/:id", (req, res) => {
  const { id } = req.params;
  const { date, time, logType } = req.body;

  logSchema
    .updateOne({ _id: id }, { $set: { date, time, logType } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
