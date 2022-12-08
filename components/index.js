const sendInfo = require('./SendInfo/index')
const paypalTransaction = require('./PaypalTransaction/index')
const stripeTransaction = require('./StripeTransaction/index')
const stripeTransactionTest = require('./StripeTransaction/test')
const getContactInfo = require('./GetContactInfo/index')
const getTransactions = require('./GetTransactions/index')

module.exports = (app, database, utils) => {
  app.use('/sendinfo', sendInfo(database, utils))
  app.use('/paypaltransaction', paypalTransaction(database, utils))
  app.use('/stripetransaction', stripeTransaction(database, utils))
  app.use('/teststripe', stripeTransactionTest(database, utils))
  app.use('/getcontactinfo', getContactInfo(database, utils))
  app.use('/gettransactions', getTransactions(database, utils))
}
