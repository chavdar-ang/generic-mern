// const { check, validationResult } = require("express-validator");
import Thread from "../../models/Thread";
const resource = require("../Resource");
// const Thread = require("../../models/Thread");
const Reply = require("../../models/Reply");

// const router = resource(Thread);

// test route
router.get("/test/1", (req, res) => {
  let records = Thread.find();
  let th = new Thread();
  console.log(th);
  res.send(records);
});

// router.post("/reply", async (req, res) => {
//   const reply = new Reply({
//     _thread: req.body._thread,
//     body: req.body.body
//   });

//   reply.save();

//   let thread = await Thread.findById(req.body._thread);

//   thread.replies.push(reply);
//   thread.save();
//   res.send(reply);
// });

module.exports = router;
