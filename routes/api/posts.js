// const { check, validationResult } = require("express-validator");
const resource = require("../../src/Routing/Resource");
const Post = require("../../models/Post");

module.exports = resource(Post);
