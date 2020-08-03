const mongoose = require("mongoose");
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

  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reply"
    }
  ]
});

module.exports = mongoose.model("Thread", ThreadSchema);
