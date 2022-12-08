const express = require('express')
const { validate } = require('uuid')
const { body, validationResult } = require('express-validator')

module.exports = ({ transaction }, { sendEmail }) => {
  const router = express.Router()

  router.route('/')
    .post(
      [
        body('token').isAlphanumeric('en-US', { ignore: ' -' }).not().isEmpty(),
        body('orderID').isAlphanumeric('en-US', { ignore: ' -' }).not().isEmpty(),
        body('amount').isFloat().not().isEmpty(),
        body('currency').isAlpha().not().isEmpty()
      ],
      async (req, res) => {
        const errors = validationResult(req).errors
        if (errors.length) { return res.status(400).json({ errors }) }

        const { token, orderID, amount, currency } = req.body
        try {
          if (!validate(token)) { return res.status(400).json({ errors: ['Invalid token'] }) }

          transaction.addOrderID(orderID, token, amount, currency)
          const email = await transaction.getEmailByToken(token)
          if (!email) { return res.status(400).json({ errors: ['Invalid token'] }) }

          const messageId = await sendEmail({ email, token: orderID, isAuth: false })
          if (!messageId) { return res.status(400).json({ errors: ['Email not sent'] }) }
          res.status(200).json({ message: 'Email sent', messageId })
        } catch (err) {
          res.status(500).json({ err })
        }
      }
    )
}
