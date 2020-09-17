/**
 * routes index
 */

module.exports = (app) => {
  app.use("/api/posts", require("./api/posts"));
  app.use("/api/users", require("./api/users"));
  app.use("/api/threads", require("./api/threads"));
  app.use("/api/graphs", require("./api/graphs"));
  // app.use("/api/test", require("./api/seeds"));
};

// const fs = require("fs");
// const path = require("path");

// fs.readdir("./routes/api", (err, files) => {
//   files.forEach(file => {
//     // app.use("/api/posts", require("./routes/api/posts"));
//     app.use(`/api/${path.parse(file).name}`, require("./routes/api/" + file));
//   });
// });