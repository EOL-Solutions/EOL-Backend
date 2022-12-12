const express = require('express')

module.exports = ({ contactInfo }, { middleware }) => {
  const router = express.Router()

  router.route('/')
    .post(
      middleware.authMiddleware,
      async (_req, res) => {
        try {
          const results = await contactInfo.getContactInformation()
          res.status(200).json({ results })
        } catch (err) {
          res.status(500).json({ err })
        }
      }
    )

  return router
}
