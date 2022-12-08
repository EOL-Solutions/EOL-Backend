const Stripe = require('stripe')
// Here is going to be the Secret Key of Stripe. (you can change it in .env )
const stripe = new Stripe(process.env.PRIVATE_TEST)

const { validationResult } = require('express-validator')

async function StripeTransactionTest (req, res, myConnection) {
  // Validation
  const errors = validationResult(req).errors
  if (errors.length) {
    res.status(400).json({ errors })
    return
  }

  const { orderID, amount, currency } = req.body // Lo que se necesita del front

  try {
    await stripe.paymentIntents.create({
      amount,
      currency,
      description: 'Thank you for your purchase of TEST.',
      payment_method: orderID, // aqui va el id del metodo de pago
      confirm: true // confirm the payment at the same time
    })

    res.status(200).json({ message: 'Payment successfull' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = { StripeTransactionTest }
