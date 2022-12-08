const sendInfo = require('./SendInfo/index')
const paypalTransaction = require('./PaypalTransaction/index')

module.exports = (app, database, utils) => {
  app.use('/sendinfo', sendInfo(database, utils))
  app.use('/paypaltransaction', paypalTransaction(database, utils))
  app.use('/stripetransaction', () => {})
  app.use('/teststripe', () => {})
  app.use('/getcontactinfo', () => {})
  app.use('/gettransactions', () => {})
}
