// Dependencies
const validator = require('node-validator');

// Schemas
module.exports = validator.isObject()
  .withRequired('name', validator.isString())
  .withOptional('age', validator.isString())
  .withOptional('sexe', validator.isString())
