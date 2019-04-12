const Schema = require('mongoose').Schema;

module.exports = new Schema({
  'title': String,
  'content': String,
  'cover_img_url': String,
  'date': {
    type: Date,
    default: Date.now
  },
  'comment': { 
  	type: Array,
  	default: []
  }
}, {
  'collection': 'articles',
  'versionKey': false
});