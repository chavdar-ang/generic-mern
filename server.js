const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const { Post } = require("./models");

// const connectDB = require("./config/db");
console.log(Post);

const PORT = process.env.PORT || 5000;

const app = express();

let mongodbSettings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

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

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is running"));

app.get("/test", async (req, res) => {
  
  let post = await Post.aggregate([{ $sample: { size: 1 } }]);
  console.log(post);

  res.send(post);
});

/**
 * Dyanmic Routing
 * Adds all routes from routes folder
 */
require("./routes")(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
