const mongoose = require("mongoose");
const Thread = require("./Thread").schema;
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  _thread: { type: Schema.Types.ObjectId, ref: "Thread" },
  body: {
    type: String,
    required: [true, 'Body is required.'],
  }
});

module.exports = mongoose.model("Reply", ReplySchema);
