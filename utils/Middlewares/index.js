require('dotenv').config()

const authMiddleware = (req, res, next) => {
  const { user, pass } = req.body
  if (user === process.env.USERDATA && pass === process.env.PASSDATA) {
    next()
  } else {
    res.status(401).json({ msg: 'Unauthorized' })
  }
}

module.exports = { authMiddleware }
