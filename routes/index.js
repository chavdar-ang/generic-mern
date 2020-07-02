/**
 * routes index
 */

module.exports = app => {
  app.use("/api/posts", require("./api/posts"));
  app.use("/api/users", require("./api/users"));
};
