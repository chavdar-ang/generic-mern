const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import Model from "./Model";

let schema = {
  // _thread: { type: Schema.Types.ObjectId, ref: "Thread" },
  _thread: Model.HasMany("Thread"),
  body: {
    type: String,
    required: [true, "Body is required."]
  }
};

// const ReplySchema = new Schema();

// console.log(ReplySchema);

// get the mongoose model and export it

module.exports = Model.schema(schema, "Reply");
