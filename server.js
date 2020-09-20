const app = require("./src/App/app");
const mongoose = require("mongoose");
const config = require("config");

let mongodbSettings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

mongoose.set("debug", true);

// connect to mongodb
mongoose.connect(config.get("mongoURI"), mongodbSettings);

// get the connection object
const db = mongoose.connection;

// check the connection for errors
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  // we're connected!
  console.log("connected");
});

/**
 * Dyanmic Routing
 * Adds all routes from routes folder
 */
require("./routes");

// shows all routes
console.log(app._router.stack);
