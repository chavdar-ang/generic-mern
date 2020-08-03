import mongoose, { Schema } from "mongoose";

const schema = (schema, name) => {
  const model = new mongoose.Schema(schema);

  return mongoose.model(name, model);
};

const BelongsTo = ref => {
  return { type: Schema.Types.ObjectId, ref };
};

const HasMany = ref => {
  return [
    {
      type: Schema.Types.ObjectId,
      ref
    }
  ];
};

export default { schema, BelongsTo, HasMany };
