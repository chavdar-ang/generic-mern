const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'Test error.']
  }
});

module.exports = mongoose.model("User", UserSchema);
