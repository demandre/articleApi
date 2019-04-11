const Create = require('./user/create.js')

// Articles
const ArticleCreate = require('./article/create.js')
const ArticleShow = require('./article/show.js')
const ArticleDelete = require('./article/delete.js')
const ArticleUpdate = require('./article/update.js')

module.exports = {
  user: {
    Create
  },
  article: {
  	ArticleCreate,
    ArticleShow,
    ArticleDelete,
    ArticleUpdate
  }
}
