const Schema = require('mongoose').Schema;

module.exports = new Schema({
  'title': String,
  'content': String,
  'cover_img_url': String,
  'date': String,
  'comment': Array
}, {
  'collection': 'articles',
  'versionKey': false
});