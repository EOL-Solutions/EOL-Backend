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

async function addNewContactInfo({email, country, name, lastname, address, wallet, city, province, zipcode, phone, kycDocument}, connection, token){
    try{
        const countriesQuery = `(SELECT code FROM countries WHERE name='${country}')`
        const provinceQuery = `(SELECT code FROM provinces WHERE name='${province}')`
        const tokenSelectQuery = `(SELECT id FROM transactions WHERE token='${token}')`
        const tokenQuery = `INSERT INTO transactions (token) VALUES ('${token}');`
        const contactQuery = `INSERT INTO contact_information (email, country, name, lastname, address, wallet, city, province, zipcode, phone, transactionID, kyc_document) VALUES ('${email}', ${countriesQuery}, '${name}', '${lastname}', '${address}', '${wallet}', '${city}', ${provinceQuery}, '${zipcode}', '${phone}', ${tokenSelectQuery}, '${kycDocument}');`
        
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

async function addOrderID(connection, orderID, token){
    const query = `UPDATE transactions SET orderID='${orderID}' WHERE token='${token}';`
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
    getEmailByToken
}
