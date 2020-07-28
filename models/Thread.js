const mongoose = require("mongoose");
const Reply = require("./Reply");
const Schema = mongoose.Schema;

const ThreadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: [true, "Body is required."]
  },

  // here
  replies: [Reply]
});

module.exports = mongoose.model("Thread", ThreadSchema);
