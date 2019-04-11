// Dependencies
const validator = require('node-validator');

// Schemas
module.exports = validator.isObject()
  .withRequired('title', validator.isString())
  .withRequired('content', validator.isString())
  .withOptional('cover_img_url', validator.isString())
