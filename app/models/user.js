const Schema = require('mongoose').Schema;

module.exports = new Schema({
  'name': String,
  'age': String,
  'sexe': String
}, {
  'collection': 'users',
  'versionKey': false
});