const sendInfo = require('./SendInfo/index')

module.exports = (app, database, utils) => {
  app.use('/sendinfo', sendInfo(database, utils))
  app.use('/paypaltransaction', () => {})
  app.use('/stripetransaction', () => {})
  app.use('/teststripe', () => {})
  app.use('/getcontactinfo', () => {})
  app.use('/gettransactions', () => {})
}
