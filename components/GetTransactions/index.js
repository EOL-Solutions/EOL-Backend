const express = require('express')

module.exports = ({ transaction }, { middleware }) => {
  const router = express.Router()

  router.route('/')
    .post(
      middleware.authMiddleware,
      async (_req, res) => {
        try {
          const results = await transaction.getTransactions()
          res.status(200).json({ results })
        } catch (err) {
          res.status(500).json({ err })
        }
      }
    )
}
