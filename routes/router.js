const {body, validationResult} = require("express-validator");

// Controladores
const { sendEmail } = require("../controllers/sendEmail.controller");
const {addNewContactInfo, createConnection, addOrderID, getEmailByToken} = require("../controllers/sqlQueries.controller")
const {getNewToken, validateToken} = require("../controllers/uuid.controller")
const myConnection = createConnection()

module.exports = (router) => {
  //Mailing
  router.post(
    "/sendinfo",
    [
      body("email").isEmail().not().isEmpty(),
      body("country").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("name").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}).not().isEmpty(),
      body("lastname").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}).not().isEmpty(),
      body("address").isAlphanumeric('en-US', {ignore: ' -'}),
      body("wallet").isAlphanumeric().not().isEmpty(),
      body("city").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("province").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("zipcode").isAlphanumeric(),
      body("phone").isInt().not().isEmpty()
    ],
    async (req,res) => {
        let uploadPath;
        const errors = validationResult(req).errors
        if(errors.length){
          res.status(400).json({errors:errors})
          return
        }
        if(!req.files){
          res.status(400).json({errors:[{msg:"No file uploaded"}]})
          return
        }
        const imgDoc = req.files.kycDocument
        const newObj = {
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
            kycDocument: imgDoc.name
          }
        uploadPath='./imageFolder/' + newObj.email + newObj.kycDocument
        imgDoc.mv(uploadPath,function (err){
          if(err) return res.status(500).send(err)
        })
        res.send('File upload')

        newObj.kycDocument = newObj.email + newObj.kycDocument
        
        const sendEmailObj ={
          token: getNewToken(),
          email: newObj.email,
          isAuth: true
        }
        try{
          //await addNewContactInfo(newObj,myConnection,sendEmailObj.token)
          await sendEmail(sendEmailObj,res)
        }catch(err){
          console.log(err)
        }
    }
  );
  

  router.post(
    "/paypaltransaction",
    [
      body("token").isAlphanumeric('en-US', {ignore: ' -'}).not().isEmpty(),
      body("orderID").isAlphanumeric('en-US', {ignore: ' -'}).not().isEmpty()
    ],
    async (req,res) => {
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
        }catch(err){
          console.log(err)
        }
    }
    )

}
