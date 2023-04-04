require('dotenv').config({ path: './.env' })
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routers/mainRouter.js')
const logger = require('morgan')
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(process.env.PORT, () => {
  console.log('Server listening on port 3000!')
})
module.exports = app
