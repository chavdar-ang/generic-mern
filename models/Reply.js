import Model from "../src/Database/ORM/Model";

export default class Reply extends Model {
  
  collection = "replies";

  schema = {
    body: {
      type: String,
      required: [true, "Body is required."]
    }
  };
}

// const schema = {
//   // _thread: { type: Schema.Types.ObjectId, ref: "Thread" },
//   _thread: Model.BelongsTo("Thread"),
//   body: {
//     type: String,
//     required: [true, "Body is required."]
//   }
// };

// module.exports = Model.schema(schema, "Reply");
