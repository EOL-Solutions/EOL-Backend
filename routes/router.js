const { body } = require("express-validator");
const Stripe = require("stripe");
// Controladores
const { createConnection } = require("../controllers/sqlQueries.controller");
const { sendInfo } = require("../controllers/sendInfo.controller")
const { paypalTransaction } = require("../controllers/paypalTransaction.controller")
const {StripeTransaction} = require("../controllers/Stripe.controller")

const myConnection = createConnection()

module.exports = (router) => {
  router.get("/", (req,res)=>{
    res.status(200).json({msg:"ok"})
  })
  router.post("/", (req,res)=>{
    res.status(200).json({msg:"ok"})
  })

  //Mailing
  router.post(
    "/sendinfo",
    [
      body("email").isEmail().not().isEmpty(),
      body("country").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("name").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}).not().isEmpty(),
      body("lastname").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}).not().isEmpty(),
      body("address").isAlphanumeric('en-US', {ignore: ' -'}),
      body("wallet").isAlphanumeric().not().isEmpty(),
      body("city").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("province").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("zipcode").isAlphanumeric(),
      body("phone").isInt().not().isEmpty(),
      body("refCode").isAlphanumeric()
    ],
    async (req, res) => {
      await sendInfo(req, res, myConnection)
    }
  )

  router.post(
    "/paypaltransaction",
    [
      body("token").isAlphanumeric('en-US', {ignore: ' -'}).not().isEmpty(),
      body("orderID").isAlphanumeric('en-US', {ignore: ' -'}).not().isEmpty(),
      body("amount").isFloat().not().isEmpty(),
      body("currency").isAlpha().not().isEmpty()
    ],
    async (req,res) => {
      await paypalTransaction(req, res, myConnection)
    }
  )
  router.post("/StripeTransaction", [
    body("token").isAlphanumeric('en-US', {ignore: ' -'}).not().isEmpty(),
    body("id").isAlphanumeric('en-US', {ignore: ' -'}).not().isEmpty(),
    body("amount").isFloat().not().isEmpty(),
    body("currency").isAlpha().not().isEmpty()
  ],
  async (req,res) => {
    await StripeTransaction(req, res, myConnection)
  });
}
