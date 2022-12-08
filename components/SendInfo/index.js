const express = require('express')
const { v4: uuidv4 } = require('uuid')
const { body, validationResult } = require('express-validator')

module.exports = ({ contactInfo }, { sendEmail }) => {
  const router = express.Router()

  router.route('/')
    .post(
      [
        body('email').isEmail().not().isEmpty(),
        body('country').isAlpha('en-US', { ignore: /[\xE0-\xFF' ']/g }),
        body('name').isAlpha('en-US', { ignore: /[\xE0-\xFF' ']/g }).not().isEmpty(),
        body('lastname').isAlpha('en-US', { ignore: /[\xE0-\xFF' ']/g }).not().isEmpty(),
        body('address').isAlphanumeric('en-US', { ignore: ' -#' }),
        body('wallet').isAlphanumeric().not().isEmpty(),
        body('city').isAlpha('en-US', { ignore: /[\xE0-\xFF' ']/g }),
        body('province').isAlpha('en-US', { ignore: /[\xE0-\xFF' ']/g }),
        body('zipcode').isAlphanumeric(),
        body('phone').isInt().not().isEmpty(),
        body('refCode').isAlphanumeric()
      ],
      async (req, res) => {
        const errors = validationResult(req).errors
        if (errors.length) { return res.status(400).json({ errors }) }
        const token = uuidv4()
        const formData = {
          email: req.body.email.toLowerCase(),
          country: req.body.country.toLowerCase(),
          name: req.body.name.toLowerCase(),
          lastname: req.body.lastname.toLowerCase(),
          address: req.body.address.toLowerCase(),
          wallet: req.body.wallet.toLowerCase(),
          city: req.body.city.toLowerCase(),
          province: req.body.province.toLowerCase(),
          zipcode: req.body.zipcode,
          phone: req.body.phone,
          kycDocument: 'null',
          refCode: (req.body.refCode && req.body.refCode !== 'null') ? req.body.refCode.toLowerCase() : null
        }
        const sendEmailObj = {
          token,
          email: formData.email,
          isAuth: true
        }

        try {
          contactInfo.addNewContactInformation(formData, token)
          const messageId = await sendEmail(sendEmailObj)
          res.status(200).json({ message: 'success', messageId })
        } catch (err) {
          res.status(400).json({ message: 'error', err })
        }
      }
    )

  return router
}
