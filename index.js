require('dotenv').config()

const express = require('express')
const fileUpload = require("express-fileupload")

const cors = require('cors')

const bodyParser = require('body-parser')
const port = process.env.PORT
const app = express()

const router = express.Router()
const routes = require('./routes/router')

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb', type: 'application/json' }));

app.use(fileUpload());

app.use('/api', router);
routes(router);

app.listen(port, function () {
    console.log(process.env.ENV, ': Listening on port', port, '- start:', Date(Date.now()).toString());
}); 