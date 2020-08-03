// const { check, validationResult } = require("express-validator");
const resource = require("../Resource");
const Thread = require("../../models/Thread");
const Reply = require("../../models/Reply");

const router = resource(Thread);

router.post("/reply", async (req, res) => {

  const reply = new Reply({
    _thread: req.body._thread,
    body: req.body.body
  });

  reply.save();

  let thread = await Thread.findById(req.body._thread);

  thread.replies.push(reply);
  thread.save();
  res.send("test 123");
});

module.exports = router;
