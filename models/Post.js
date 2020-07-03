const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    body: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

PostSchema.virtual("friends", {
  ref: "Graph", // The model to use
  localField: "_id", // Find people where `localField`
  foreignField: "source" // is equal to `foreignField`
});

module.exports = mongoose.model("Post", PostSchema);
