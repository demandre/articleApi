// Dependencies
const Schema = require('../../models/article.js')
const validator = require('node-validator')
const check = require('./payload-validator/search.js')

module.exports = class Create {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.check = check
    this.ArticleModel = connect.model('Article', Schema)

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.get('/article/search/', validator.express(this.check), (req, res) => {
      try {
        this.ArticleModel.findOne(req.body, function (err, article) {
          if (err) {
            res.status(400).json({
              'code': 400,
              'message': 'Bad request'
            })
            return;
          }

          res.status(200).json(article || {})
        })
      } catch (e) {
        console.error(`[ERROR] article/show/:id -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}
