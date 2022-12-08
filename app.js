const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./components/index')

module.exports = (database = {}, utils = {}) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors({ origin: '*' }))
  router(app, database, utils)

  return app
}
