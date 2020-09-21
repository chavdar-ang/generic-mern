// const { check, validationResult } = require("express-validator");
import Thread from "../../models/Thread";
import Reply from "../../models/Reply";
const resource = require("../../src/Routing/Resource");

const router = resource(Thread);

// test route
router.get("/test/1", (req, res) => {
  let data = {
    title: "zxc zxc zxc ",
    body: "body 1234",
    test: 123
  };
  // Thread.find();
  // console.log("find");
  let records = Thread.create(data);
  // let th = new Thread();
  // console.log(th);
  res.send(data);
});

router.post("/reply", async (req, res) => {
  // create the reply first
  const reply = await Reply.create({
    _thread: req.body._thread,
    body: req.body.body
  });

  console.log('The thread ID', req.body._thread);

  let thread = await Thread.find(req.body._thread);

  console.log('The thread', thread);

  console.log('The replies', thread.replies);

  thread.replies.push(reply);
  thread.save();
  res.send(reply);
});

module.exports = router;
