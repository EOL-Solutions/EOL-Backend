const Stripe = require("stripe");
//Here is going to be the Secret Key of Stripe. (you can change it in .env )
const stripe = new Stripe(process.env.PRIVATE_TEST);

const { validationResult } = require("express-validator")
const { validateToken } = require("./uuid.controller")

async function StripeTransaction(req, res, myConnection){
    //Validation
    const errors = validationResult(req).errors
    if(errors.length){
        res.status(400).json({errors:errors})
        return
    }

    const {orderID, token, amount, currency} = req.body //Lo que se necesita del front
    //Token Validation
    try{
        const isValid = validateToken(token)
        if(!isValid){
            res.status(400).json({message:"Invalid Token"})
            return
        }

        const payment = await stripe.paymentIntents.create({
            amount,
            currency,
            description: "Thank you for your purchase of TEST.",
            payment_method: orderID, //aqui va el id del metodo de pago
            confirm: true, //confirm the payment at the same time
        })


        res.status(200).json({message:"Payment successfull"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}




module.exports = {StripeTransaction}

