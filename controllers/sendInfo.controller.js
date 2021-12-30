const { validationResult } = require("express-validator")
const { uploadDocument } = require("./uploadFile")
const { getNewToken } = require("./uuid.controller")
const { addNewContactInfo } = require("./sqlQueries.controller")
const { sendEmail } = require("./sendEmail.controller")

async function sendInfo (req, res, myConnection) {
    const errors = validationResult(req).errors
    if(errors.length){
      res.status(400).json({errors:errors})
      return
    }
    const token = getNewToken()
    const formData = {
        email: req.body.email.toLowerCase(),
        country: req.body.country.toLowerCase(),
        name: req.body.name.toLowerCase(),
        lastname: req.body.lastname.toLowerCase(),
        address: req.body.address.toLowerCase(),
        wallet: req.body.wallet.toLowerCase(),
        city: req.body.city.toLowerCase(),
        province: req.body.province.toLowerCase(),
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        kycDocument: 'null',
        refCode: null
    }
    const sendEmailObj ={
        token: token,
        email: formData.email,
        isAuth: true
    }
    
    if(req.files){
      const imgDoc = req.files.kycDocument
      formData.kycDocument = formData.email + imgDoc.name
      uploadDocument(imgDoc, token)
    }
    if(req.body.refCode && req.body.refCode !== "null"){
      formData.refCode = req.body.refCode.toLowerCase()
    }

    try{
        await addNewContactInfo(formData, myConnection, token)
        //await sendEmail(sendEmailObj,res)
        res.status(200).json({msg:"ok", token: token})
    }catch(err){
      console.log(err)
    }
}

module.exports = {sendInfo}
