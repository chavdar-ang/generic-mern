const express = require("express");
const { check, validationResult } = require("express-validator");
const Route = require("../Route");
const Graph = require("../../models/Graph");

module.exports = Route.resource(Graph);
