const mongoose = require("mongoose");

const GraphSchema = new mongoose.Schema({
  from: {
    type: mongoose.ObjectId,
    ref: 'Post',
    required: true
  },

  to: {
    type: mongoose.ObjectId,
    ref: 'Post',
    required: true
  },

  direction: {
    type: String,
    enum: ["inbound", "outbound", "any"],
    default: "outbound"
  }

});

module.exports = mongoose.model("Graph", GraphSchema);
