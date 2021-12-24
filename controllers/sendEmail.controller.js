const { transporter } = require("../email/email");
const { bodyhtml } = require("../email/html")

const sendEmail = async ({email, token, isAuth}, res) => {

  const subject = isAuth?`Authentication email`:`Verification Transaction`
  const title = isAuth?`Authentication email`:`Verification Transaction`
  const body = isAuth?`Lorem Ipsum`:`Lorem Ipsum`
  const linkText = isAuth?`Process payment`:``
  const link = isAuth?`http://www.google.com/?token=${token}`:`` //Add verification link

  const mailData = {
    from: '"EOL Development" <EOL@example.com>',
    to: email,
    subject: subject,
    text: body,
    html: bodyhtml(title,body,linkText,link),
  }

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error)
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId })
  });
}

module.exports = { sendEmail };