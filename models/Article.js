import Model from "../src/Database/ORM/Model";
import mongoose, { Schema } from "mongoose";

export default class Article extends Model {
  
  collection = "articles";

  schema = {
    title: {
      type: String,
      required: true
    },

    body: {
      type: String,
      required: [true, "Body is required."]
    },

    slug: {
      type: String,
      required: [true, "Slug is required."]
    },

    // categories: [{ type: Schema.Types.ObjectId, ref: "Category" }]
    categories: [{
      name: String,
      slug: String
    }],
    author: {
      name: String,
      username: String,
      avatar: String,
    }
  };
}
