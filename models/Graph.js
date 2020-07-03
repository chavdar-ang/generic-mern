const mongoose = require("mongoose");

const GraphSchema = new mongoose.Schema({
  source: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
    required: true
  },

  target: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
    required: true
  },

  path: {
    type: String,
    enum: ["inbound", "outbound", "any"],
    default: "outbound"
  }
});

module.exports = mongoose.model("Graph", GraphSchema);
