const { v4: uuidv4, validate } = require('uuid')

function getNewToken () {
  return uuidv4()
}

function validateToken (token) {
  return validate(token)
}

module.exports = {
  getNewToken,
  validateToken
}
