const express = require("express");
const { check, validationResult } = require("express-validator");
const Route = require("../Route");
const Post = require("../../models/Post");

module.exports = Route.resource(Post);
