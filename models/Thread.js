import Model from "./Model";

export default class Thread extends Model {
  
  collection = "threads";

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
}
