const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Graph = require("./Graph");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true,
    unique: true
  },

  // fans: [
  //   {
  //     type: String,
  //     ref: "Graph",
  //     foreignField: "source"
  //   }
  // ]
});

module.exports = mongoose.model("Post", PostSchema);
