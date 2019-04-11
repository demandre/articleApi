const Schema = require('mongoose').Schema;

module.exports = new Schema({
  'title': String,
  'content': String,
  'cover_img_url': String
}, {
  'collection': 'articles',
  'versionKey': false
});