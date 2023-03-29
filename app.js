const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const cookieParser = require('cookie-parser')

const logger = require('morgan')
const cors = require('cors')
const router = require('./routers/mainRouter.js')
const { dirname } = require('path')
// app.use(function (req, res, next) {
//   next(createError(404))
// })
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/app/users', router)

app.listen(3000, () => {
  console.log('Server listening on port 3000!')
})
module.exports = app
