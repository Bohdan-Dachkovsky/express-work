const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const cookieParser = require('cookie-parser')
const fs = require('fs').promises
const logger = require('morgan')
const cors = require('cors')
const uuid = require('uuid').v5
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
app.use('/', router)
app.post('/app/users/list', async (req, res) => {
  try {
    const { name, email, phone } = req.body
    const userNumbers = JSON.parse(
      await fs.readFile(path.join(__dirname, 'data/listOfContacts.js')),
    )
    const addUser = {
      name,
      email,
      phone,
      id: uuid(),
    }
    userNumbers.push(addUser)
    await fs.writeFile('./data/listOfContacts.js', JSON.stringify(userNumbers))
    res.status(201).json({
      user: addUser,
    })
  } catch (error) {
    console.log(error)
  }

  console.log(req)
})
app.get('/app/users/list', async (req, res) => {
  try {
    const users = JSON.parse(
      await fs.readFile(path.join(__dirname, 'data/listOfContacts.js')),
    )

    res.status(200).json({
      users,
    })
  } catch (error) {
    console.log(error)
  }

  console.log(req)
})
app.listen(3000, () => {
  console.log('Server listening on port 3000!')
})
module.exports = app
