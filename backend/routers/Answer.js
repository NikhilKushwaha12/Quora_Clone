const express = require("express");
const router = express.Router();

const answerDB = require("../models/Answers");


router.post("/", async (req, res) => {
  console.log(req.body.userDetails);
  try {
    await answerDB
      .create({
        answer: req.body.answer,
        questionId: req.body.questionId,
      })
      .then(() => {
        res.status(201).send({
          message: "Answer added successfully",
          status: true,
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: "Bad format",
          status: false,
        
        });
        console.log(err)
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Error while adding answer",
    });
  }
});

module.exports = router;
