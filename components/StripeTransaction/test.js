const express = require('express')
const Stripe = require('stripe')
const { body, validationResult } = require('express-validator')

const stripe = new Stripe(process.env.PRIVATE)

module.exports = () => {
  const router = express.Router()

  router.route('/')
    .post(
      [
        body('orderID').isAlphanumeric('en-US', { ignore: ' -_' }).not().isEmpty(),
        body('amount').isFloat().not().isEmpty(),
        body('currency').isAlpha().not().isEmpty()
      ],
      (req, res) => {
        const errors = validationResult(req).errors
        if (errors.length) { return res.status(400).json({ errors }) }

        const { orderID, amount, currency } = req.body // Lo que se necesita del front
        try {
          stripe.paymentIntents.create({
            amount,
            currency,
            description: 'Thank you for your purchase of TEST.',
            payment_method: orderID, // aqui va el id del metodo de pago
            confirm: true // confirm the payment at the same time
          })

          res.status(200).json({ message: 'Payment successful' })
        } catch (err) {
          return res.status(500).json({ err })
        }
      }
    )

  return router
}
