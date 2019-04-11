// Core
const mongoose = require('mongoose')
const UserModel = require('../../models/article.js')

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
    this.app.get('/article/show/:id', (req, res) => {
      try {
        if (!req.params || !req.params.id.length) {
          res.status(404).json({
            code: 404,
            message: 'Not Found'
          })
        }

        UserModel.find({_id: req.params.id }, function (err, user) {
          if (err) {
            res.status(400).json({
              'code': 400,
              'message': 'Bad request'
            })
            return;
          }
          res.status(200).json(user || {})
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
