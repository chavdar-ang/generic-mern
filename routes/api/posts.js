const express = require("express");
const { check, validationResult } = require("express-validator");
const Post = require("../../models/Post");

router = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public

router.get("/", (req, res) => res.send("Posts route"));

// @route   POST api/users
// @desc    Register route
// @access  Public

router.post("/test", async (req, res) => {
  console.log(req.body);

  const post = new Post({
    name: "Brad Pitt",
    email: "brad_pitt@abv.bg"
  });

  try {
    let data = await post.save();
    res.json(data);
  } catch (err) {
    res.json(err);
  }

  // .then(data => {
  //   console.log(data);
  //   res.json(data);
  // })
  // .catch(err => {
  //   console.log("error");
  //   res.json({ message: "test" });
  // });

  console.log("saved 1");
});

module.exports = router;
