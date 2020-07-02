const express = require("express");
const { check, validationResult } = require("express-validator");
const Route = require("../Route");
const User = require("../../models/User");

module.exports = Route.resource(User);