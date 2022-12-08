require('dotenv').config()

const { transporter } = require('./email')
const { bodyhtmlAuthentication } = require('./htmlAuthentication')
const { bodyhtmlVerification } = require('./htmlVerification')

const sendEmail = ({ email, token, isAuth }) => {
  const subject = isAuth ? 'Authentication email' : 'FilmCoin Transaction Successful'
  const body = isAuth ? 'Authentication email' : 'FilmCoin Transaction Successful'

  const mailData = {
    from: '"FilmCoins" <support@thefilmcoin.io>',
    to: email,
    subject,
    text: body,
    html: isAuth ? bodyhtmlAuthentication(token) : bodyhtmlVerification()
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) => {
      if (error) { reject(error) }
      resolve(info.messageId)
    })
  })
}

module.exports = sendEmail
