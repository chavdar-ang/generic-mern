// const { check, validationResult } = require("express-validator");
import resource from "../../src/Routing/Resource";
import Post from "../../models/Post";

module.exports = resource(Post);
