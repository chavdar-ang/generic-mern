// const { check, validationResult } = require("express-validator");
const resource = require("../Resource");
const Post = require("../../models/Post");

module.exports = resource(Post);
