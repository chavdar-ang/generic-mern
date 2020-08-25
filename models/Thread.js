import Model from "./DataModel";

export default class Thread extends Model {
  collection = "threads";
  results = ["user1", "user2", "user3", "user4"];

  schema = {
    title: {
      type: String,
      required: true
    },

    body: {
      type: String,
      required: [true, "Body is required."]
    }
  };

  constructor() {
    super();
  }
}

// const schema = {
//   title: {
//     type: String,
//     required: true
//   },

//   body: {
//     type: String,
//     required: [true, "Body is required."]
//   },

//   replies: Model.HasMany("Reply")

//   // replies: [
//   //   {
//   //     type: Schema.Types.ObjectId,
//   //     ref: "Reply"
//   //   }
//   // ]
// };

// module.exports = Model.schema(schema, "Thread");
