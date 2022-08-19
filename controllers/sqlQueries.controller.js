const mysql = require('mysql');
require('dotenv').config()

const configConnection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
}

function createConnection() {
    return mysql.createConnection(configConnection)
}

async function getContactInformation(connection){
  const query = `SELECT * FROM contact_information;`
  return new Promise((resolve, reject) => {
    try{
      connection.query(query, (err, result) =>{
	if(err) throw err
	resolve({contact_information: result})
      })
    }catch(err){
      reject(err)
    }
  })
}

async function getTransctions(connection){
  const query = `SELECT * FROM transactions;`
  return new Promise((resolve, reject) => {
    try{
      connection.query(query, (err, result) =>{
	if(err) throw err
	resolve({transactions: result})
      })
    }catch(err){
      reject(err)
    }
  })
}


async function addNewContactInfo({email, country, name, lastname, address, wallet, city, province, zipcode, phone, kycDocument, refCode}, connection, token){
    try{
        const countriesQuery = `(SELECT code FROM countries WHERE name='${country}')`   //Change country with this query
        const provinceQuery = `(SELECT code FROM provinces WHERE name='${province}')`   //Change province with this query
        const tokenSelectQuery = `(SELECT id FROM transactions WHERE token='${token}')`
        const tokenQuery = `INSERT INTO transactions (token, ref_code) VALUES ('${token}', ${refCode? "'" + refCode + "'" : 'NULL'});`
        const contactQuery = `INSERT INTO contact_information (email, country, name, lastname, address, wallet, city, province, zipcode, phone, transactionID, kyc_document) VALUES ('${email}', '0', '${name}', '${lastname}', '${address}', '${wallet}', '${city}', '0', '${zipcode}', '${phone}', ${tokenSelectQuery}, '${kycDocument}');`
        
        await connection.query(tokenQuery, (err, result) => {
            if(err) throw err
            console.log(result)
        })
        
        await connection.query(contactQuery, (err, result) => {
            if(err) throw err
            console.log(result)
        })
    }catch(err){
        console.log(err)
    }
}

async function addOrderID(connection, orderID, token, amount, currency){
    const addOrderQuery = `UPDATE transactions SET orderID= IF(orderID IS NULL OR orderID= '', '${orderID}', orderID) WHERE token='${token}';`
    const checkAmountQuery = `SELECT ref_code FROM transactions WHERE token='${token}';`
    try{
        await connection.query(addOrderQuery, (err, result) => {
            if(err) throw err
            console.log(result)
        })
        await connection.query(checkAmountQuery, (err, result) => {
            if(err) throw err
            if(result[0].ref_code !== null) setRefTransaction(connection, result[0].ref_code, amount, currency)
        })
    }catch(err){
        console.log(err)
    }
}

async function setRefTransaction(connection, ref_code, amount, currency){
    const query = `INSERT INTO temp_amount_tracking (ref_code_temp, amount, currency) VALUES ('${ref_code}', ${amount}, '${currency}');`
    try{
        await connection.query(query, (err, result) => {
            if(err) throw err
            console.log(result)
        })
    }catch(err){
        console.log(err)
    }
}

async function getEmailByToken(connection, token){
    return new Promise((resolve, reject) => {
        const query = `SELECT email FROM contact_information WHERE transactionID=(SELECT id FROM transactions WHERE token='${token}');`
        try{
            connection.query(query, (err, result) => {
                if(err) throw err
                if(typeof result[0] == 'undefined') resolve(null)
                else resolve(result[0].email)
                
            })
        }catch(err){
            reject(err)
        }
    })
}


module.exports = {
    createConnection,
    addNewContactInfo,
    addOrderID,
    getEmailByToken,
    getContactInformation,
    getTransctions
}
