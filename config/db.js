const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("mongoose");
  } catch (error) {
    handleError(error);
  }
};

mongoose.connection.on("error", err => {
  logError(err);
  console.log(err);
  
});

module.exports = connectDB;
