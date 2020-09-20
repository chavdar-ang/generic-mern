import Model from "../src/Database/ORM/Model";
import mongoose, { Schema } from "mongoose";

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
    },

    replies: [{ type: Schema.Types.ObjectId, ref: "Reply" }]
  };
}
