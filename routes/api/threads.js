// const { check, validationResult } = require("express-validator");
import Thread1 from "../../models/Thread1";
const resource = require("../Resource");
const Thread = require("../../models/Thread");
const Reply = require("../../models/Reply");

const router = resource(Thread);

// test route
router.get("/test/1", (req, res) => {
  let records = Thread1.find();
  let th = new Thread1;
  console.log(th);
  res.send(records);
});

router.post("/reply", async (req, res) => {
  const reply = new Reply({
    _thread: req.body._thread,
    body: req.body.body
  });

  reply.save();

  let thread = await Thread.findById(req.body._thread);

  thread.replies.push(reply);
  thread.save();
  res.send(reply);
});

module.exports = router;
