import mongoose, { Schema } from "mongoose";

const schema = (schema, name) => {
  const model = new mongoose.Schema(schema);

  return mongoose.model(name, model);
};

const HasMany = ref => {
  return { type: Schema.Types.ObjectId, ref: ref };
};

export default { schema, HasMany };
