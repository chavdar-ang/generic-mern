const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  body: {
    type: String,
    required: [true, 'Body is required.'],
  },
  thread: { type: Schema.Types.ObjectId, ref: 'Thread' }
});

module.exports = mongoose.model("Reply", ReplySchema);
