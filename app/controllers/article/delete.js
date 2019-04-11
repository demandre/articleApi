// Core
const mongoose = require('mongoose')
const Schema = require('../../models/article.js')

module.exports = class Create {
  constructor (app, config, connect) {
    this.app = app
    this.config = config
    this.ArticleModel = connect.model('Article', Schema)

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.get('/article/delete/:id', (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }

        this.ArticleModel.remove({_id: req.params.id }, function (err, article) {
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
        console.error(`[ERROR] article/delete/:id -> ${e}`)
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
