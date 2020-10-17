// const { check, validationResult } = require("express-validator");
import resource from "../../src/Routing/Resource";
import User from "../../models/User";

module.exports = resource(User);