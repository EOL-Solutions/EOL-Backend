// const sendEmail = require('./SendEmail/index')
const middleware = require('./Middlewares/index')

module.exports = {
  sendEmail: () => new Promise(resolve => resolve('email sent')),
  middleware
}
