const router = require("express").Router();
const { Post, Graph } = require("../../models");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

router.get("/seed", async (req, res) => {
  for (let i = 0; i < 5; i++) {
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

router.get("/get/:post", async (req, res) => {
  // req.body.id

  // console.log();

  const result = await Post.findById(req.params.post, (err, post) => {
    if (err) {
      return handleError(err);
    }

    console.log(post);
    
  }).populate('friends', (err, friends) => {
    if (err) {
      return handleError(err);
    }

    console.log(friends);
    
  });

  // const result = await Post.findById(req.params.post)
  //   .populate("friends")
  //   .exec(function (err, fr) {
  //     if (err) return handleError(err);
  //     console.log(fr);

  //     // console.log("The author is %s", story.author.name);
  //     // prints "The author is Ian Fleming"
  //   });

  // console.log('res', result);

  res.json(result);
});

router.get("/populate/:id", async (req, res) => {
  // req.body.id

  const result = await Post.findById(req.params.id, function (err) {
    if (err) return handleError(err);
  })
    .populate("friends")
    .exec((err, a) => {
      console.log(a);
    });

  console.log(result);

  res.json(result);
});

router.get("/ref", async (req, res) => {
  // req.body.id

  const post = new Post({
    title: "Test ref 5",
    body: "Test ref body 5"
  });

  await post.save(function (err) {
    if (err) return console.log(err);
    //handleError(err);

    const friend = new Graph({
      source: post._id, // assign the _id from the person
      target: post._id // assign the _id from the person
    });

    friend.save(function (err) {
      if (err) return handleError(err);
      // that's it!
    });
  });

  const saved = await Post.findById(post._id, function (err) {
    if (err) return handleError(err);
  })
    .populate("friends")
    .exec((err, a) => {
      console.log(a);
    });

  // console.log(result);

  res.json(saved);
});

// router.get("/related", async (req, res) => {
//   const PersonSchema = new Schema({
//     name: String
//   });

//   const GroupSchema = new Schema({
//     person: mongoose.Types.ObjectId,
//     name: String
//   });

//   GroupSchema.virtual("members", {
//     ref: "Person", // The model to use
//     localField: "person", // Find people where `localField`
//     foreignField: "_id" // is equal to `foreignField`
//   });

//   const Person = mongoose.model("Person", PersonSchema);
//   const Group = mongoose.model("Group", GroupSchema);

//   // save with refs

//   const person = new Person({
//     name: "Ian Fleming"
//   });

//   person.save(function (err, person) {
//     if (err) return handleError(err);

//     const group = new Group({
//       person: person._id // assign the _id from the person
//     });

//     group.save(function (err) {
//       if (err) return handleError(err);
//       // that's it!
//     });
//   });

//   // console.log("person id", person._id);

//   let groups = await Group.find()
//     .populate("members")
//     .exec(function (error, groups) {
//       console.log(groups);
//     });

//   // console.log(groups);

//   res.json(groups);
// });

module.exports = router;
