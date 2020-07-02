const router = require("express").Router();
const { Post, Graph } = require("../../models");

router.get("/seed", async (req, res) => {
  for (let i = 0; i < 1000; i++) {
    let random = await Post.aggregate([{ $sample: { size: 2 } }]);

    const graph = new Graph({
      source: random[0]._id,
      target: random[1]._id
    });

    graph.save(function (err) {
      if (err) return handleError(err);
      // saved!
    });
  }

  res.send("done");
});

router.post("/list", async (req, res) => {
  // req.body.id

  const result = await Graph.find({ source: req.body.id });
  res.send(result);
});

router.get("/populate/:id", async (req, res) => {
  // req.body.id

  const result = await Post.findById(req.params.id, function (err) {
    if (err) return handleError(err);
  }).populate("fans");
  res.send(result);
});

module.exports = router;
