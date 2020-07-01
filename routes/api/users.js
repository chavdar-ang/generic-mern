const express = require("express");
const { check, validationResult } = require("express-validator");
const rest = require("../rest");
const User = require("../../models/User");

// router = new express.Router();

module.exports = rest(User);