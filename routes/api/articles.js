// const { check, validationResult } = require("express-validator");
import Article from "../../models/Article";
import resource from "../../src/Routing/Resource";

module.exports = resource(Article);
