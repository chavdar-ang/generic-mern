const express = require("express");
const { check, validationResult } = require("express-validator");
const rest = require("../rest");
const Post = require("../../models/Post");

// router = express.Router();

module.exports = rest(Post);
