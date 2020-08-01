const mongoose = require("mongoose");
const Reply = require("./Reply").schema;
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
  replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }]
});

module.exports = mongoose.model("Thread", ThreadSchema);
