// Dependencies
const validator = require('node-validator');

// Schemas
module.exports = validator.isObject()
  .withOptional('title', validator.isString())
  .withOptional('content', validator.isString())
  .withOptional('cover_img_url', validator.isString())
