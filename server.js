const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const fs = require("fs");
const path = require("path");

// const connectDB = require("./config/db");

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

/**
 * Dyanmic Routing
 * Adds all routes from routes folder
 */
fs.readdir("./routes/api", (err, files) => {
  files.forEach(file => {
    // app.use("/api/posts", require("./routes/api/posts"));
    app.use(`/api/${path.parse(file).name}`, require("./routes/api/" + file));
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
