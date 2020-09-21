// const { check, validationResult } = require("express-validator");
const resource = require("../../src/Routing/Resource");
const User = require("../../models/User");

module.exports = resource(User);