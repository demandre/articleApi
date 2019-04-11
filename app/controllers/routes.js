const Create = require('./user/create.js')

// Articles
const ArticleCreate = require('./article/create.js')

module.exports = {
  user: {
    Create
  },
  article: {
  	ArticleCreate
  }
}
