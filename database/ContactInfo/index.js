const conn = require('../connection')

function getContactInformation () {
  const query = `
  SELECT *
  FROM contact_information
  `
  return new Promise((resolve, reject) => {
    try {
      conn.query(query, (err, result) => {
        if (err) { reject(err) }
        resolve({ contactInformation: result })
      })
    } catch (err) {
      reject(err)
    }
  })
}

function addNewContactInformation ({ email, country, name, lastname, address, wallet, city, province, zipcode, phone, kycDocument, refCode }, token) {
  try {
    const tokenQuery = `
    INSERT INTO transactions (token, ref_code)
    VALUES (?, ?)
    `
    const tokenQueryParams = [token, refCode]

    const contactQuery = `
    INSERT INTO contact_information (email, country, name, lastname, address, wallet, city, province, zipcode, phone, transactionID, kyc_document)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    conn.query(tokenQuery, tokenQueryParams, (err, result) => {
      if (err) { throw err }
      const id = result.insertId
      const contactQueryParams = [email, country, name, lastname, address, wallet, city, province, zipcode, phone, id, kycDocument]
      conn.query(contactQuery, contactQueryParams, (err, result) => {
        if (err) { throw err }
        console.log(result)
      })
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getContactInformation,
  addNewContactInformation
}
