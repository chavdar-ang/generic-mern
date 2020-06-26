const express = require("express");
const { check, validationResult } = require("express-validator");
const Post = require("../../models/Post");

router = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public

router.get("/", (req, res) => {
  const cursor = db.collection('quotes').find()
  console.log(cursor)
  res.send("Posts route")
});

// @route   POST api/users
// @desc    Register route
// @access  Public

router.post("/test", async (req, res) => {
  console.log(req.body);

  const post = new Post(req.body);

  try {
    let data = await post.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

console.log(router);


module.exports = router;
