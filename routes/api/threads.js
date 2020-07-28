// const { check, validationResult } = require("express-validator");
const resource = require("../Resource");
const Thread = require("../../models/Thread");

const router = resource(Thread);

router.post("/:id/reply", async (req, res) => {
  const reply = {
    body: "some reply"
  };

  let thread = await Thread.findById(req.params.id);

  thread.replies.push(reply);
  thread.save();
  res.send("test 123");
});

module.exports = router;
