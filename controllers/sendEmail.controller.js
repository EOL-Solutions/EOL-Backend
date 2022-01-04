require('dotenv').config()

const { transporter } = require("../email/email");
const { bodyhtmlAuthentication } = require("../email/htmlAuthentication")
const { bodyhtmlVerification } = require("../email/htmlVerification")
const mailchimp = require('@mailchimp/mailchimp_marketing');

const sendEmail = async ({email, token, isAuth}, res) => {

  const subject = isAuth?`Authentication email`:`FilmCoin Transaction Successful`
  const body = isAuth?`Authentication email`:`FilmCoin Transaction Successful`

  const mailData = {
    from: '"FilmCoins" <support@thefilmcoin.io>',
    to: email,
    subject: subject,
    text: body,
    html: isAuth?bodyhtmlAuthentication(token):bodyhtmlVerification(),
  }

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error)
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId })
  });
}

module.exports = { sendEmail };