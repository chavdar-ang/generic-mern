import Model from "./Model";

const schema = {
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: [true, "Body is required."]
  },

  replies: Model.HasMany("Reply")

  // replies: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Reply"
  //   }
  // ]
};

module.exports = Model.schema(schema, "Thread");
