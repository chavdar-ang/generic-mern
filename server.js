const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const models = require("./models");

// const connectDB = require("./config/db");
// console.log(Post);

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

app.get("/seed", async (req, res) => {
  for (let i = 0; i < 10000; i++) {    
    let random = await models.Post.aggregate([{ $sample: { size: 2 } }]);
  
    const graph = new models.Graph({
      from: random[0]._id,
      to: random[1]._id
    });
  
    graph.save(function (err) {
      if (err) return handleError(err);
      // saved!
    });
  }

  // res.send(graph);
  res.send('done');
});

app.post("/list", async (req, res) => {
  // req.body.id

  const result = await models.Graph.find({ from: req.body.id});
  res.send(result);
});

/**
 * Dyanmic Routing
 * Adds all routes from routes folder
 */
require("./routes")(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
