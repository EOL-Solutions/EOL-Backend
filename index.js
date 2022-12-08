require('dotenv').config()
const makeApp = require('./app')
const database = require('./database/index')
const utils = require('./utils/index')

const port = process.env.PORT || 3000
const app = makeApp(database, utils)

app.listen(port, () => {
  console.log(`Server listening on port ${port} - Start time: ${Date(Date.now()).toString()}`)
})
