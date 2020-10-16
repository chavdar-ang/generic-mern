// const { check, validationResult } = require("express-validator");
import Article from "../../models/Article";
const resource = require("../../src/Routing/Resource");

const router = resource(Article);

module.exports = router;
