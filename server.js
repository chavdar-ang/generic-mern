const express = require("express");
const mongoose = require("mongoose");

// const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

let config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

mongoose.connect("mongodb://localhost:27017/test", config, (res) =>
  console.log("connected", res)
);

const conn = mongoose.connection;

console.log(conn);


// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is running"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
