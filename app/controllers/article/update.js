// Dependencies
const Schema = require('../../models/article.js')
const validator = require('node-validator')
const check = require('./payload-validator/update.js')

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
    this.app.post('/article/update/:id', validator.express(this.check), (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }
        this.ArticleModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, article) {
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
