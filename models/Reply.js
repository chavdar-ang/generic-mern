import Model from "./Model";

const schema = {
  // _thread: { type: Schema.Types.ObjectId, ref: "Thread" },
  _thread: Model.BelongsTo("Thread"),
  body: {
    type: String,
    required: [true, "Body is required."]
  }
};

module.exports = Model.schema(schema, "Reply");
