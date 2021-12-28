const { validationResult } = require("express-validator")
const { validateToken } = require("./uuid.controller")
const { addOrderID, getEmailByToken } = require("./sqlQueries.controller")
const { sendEmail } = require("./sendEmail.controller")


async function paypalTransaction (req, res, myConnection){
    const errors = validationResult(req).errors
    if(errors.length){
      res.status(400).json({errors:errors})
      return
    }
    const token = req.body.token
    const orderID = req.body.orderID
    try{
      const isValid = validateToken(token)
      if(!isValid){
        res.status(400).json({errors:["Invalid token"]})
        return
      }
      await addOrderID(myConnection, orderID, token)
      const email = await getEmailByToken(myConnection, token)
      if(!email){
        res.status(400).json({errors:["Invalid token"]})
        return
      }
      await sendEmail({email: email, token: orderID, isAuth:false},res)
      res.status(200).json({msg:"ok"})
    }catch(err){
      console.log(err)
    }
}

module.exports = {paypalTransaction}