const express = require('express')
const Stripe = require('stripe')
const { body, validationResult } = require('express-validator')
const { validate } = require('uuid')

const stripe = new Stripe(process.env.PRIVATE)

module.exports = ({ transaction }) => {
  const router = express.Router()

  router.route('/')
    .post(
      [
        body('token').isAlphanumeric('en-US', { ignore: ' -' }).not().isEmpty(),
        body('orderID').isAlphanumeric('en-US', { ignore: ' -_' }).not().isEmpty(),
        body('amount').isFloat().not().isEmpty(),
        body('currency').isAlpha().not().isEmpty()
      ],
      async (req, res) => {
        const errors = validationResult(req).errors
        if (errors.length) { return res.status(400).json({ errors }) }

        const { orderID, token, amount, currency } = req.body // Lo que se necesita del front
        try {
          if (!validate(token)) { return res.status(400).json({ errors: ['Invalid token'] }) }

          stripe.paymentIntents.create({
            amount,
            currency,
            description: 'Thank you for your purchase.',
            payment_method: orderID, // aqui va el id del metodo de pago
            confirm: true // confirm the payment at the same time
          })
          transaction.addOrderID(orderID, token, amount, currency)

          const email = await transaction.getEmailByToken(token)
          if (!email) { return res.status(400).json({ errors: ['Invalid token'] }) }

          res.status(200).json({ message: 'Payment successful' })
        } catch (err) {
          return res.status(500).json({ err })
        }
      }
    )
}
