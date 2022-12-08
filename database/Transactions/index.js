const conn = require('../connection')

function setRefTransaction (refCode, amount, currency) {
  const query = `
  INSERT INTO temp_amount_tracking (ref_code_temp, amount, currency)
  VALUES (?, ?, ?)
  `
  const params = [refCode, amount, currency]

  try {
    conn.query(query, params, (err, result) => {
      if (err) { throw err }
      console.log(result)
    })
  } catch (err) {
    console.log(err)
  }
}
function getTransactions () {
  const query = `
  SELECT *
  FROM transactions
  `
  return new Promise((resolve, reject) => {
    try {
      conn.query(query, (err, result) => {
        if (err) { reject(err) }
        resolve({ transactions: result })
      })
    } catch (err) {
      reject(err)
    }
  })
}

function addOrderID (orderID, token, amount, currency) {
  const addOrderQuery = `
  UPDATE transactions
  SET orderID = IF(orderID IS NULL OR orderID = '', ?, orderID)
  WHERE token=?
  `
  const addOrderParams = [orderID, token]

  const checkAmountQuery = `
  SELECT ref_code
  FROM transactions WHERE token=?
  `
  const checkAmountParams = [token]

  try {
    conn.query(addOrderQuery, addOrderParams, (err, result) => {
      if (err) { throw err }
      console.log(result)
    })

    conn.query(checkAmountQuery, checkAmountParams, (err, result) => {
      if (err) { throw err }
      if (result[0].ref_code !== null) {
        setRefTransaction(result[0].ref_code, amount, currency)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

function getEmailByToken (token) {
  return new Promise((resolve, reject) => {
    const query = `
    SELECT email
    FROM contact_information
    WHERE transactionID=(SELECT id FROM transactions WHERE token=?)
    `
    const params = [token]

    try {
      conn.query(query, params, (err, result) => {
        if (err) { reject(err) }
        if (typeof result[0] === 'undefined') { resolve(null) } else { resolve(result[0].email) }
      })
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  getTransactions,
  addOrderID,
  getEmailByToken
}
