import Model from "../src/Database/ORM/Model";

export default class Category extends Model {
  
  collection = "categories";

  schema = {
    name: {
      type: String,
      required: [true, "Name is required."]
    },
    slug: {
      type: String,
      required: [true, "Slug is required."]
    }
  };
}
