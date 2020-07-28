// const { check, validationResult } = require("express-validator");
const resource = require("../Resource");
const Graph = require("../../models/Graph");

module.exports = resource(Graph);
