const express = require('express')
const router = express.Router()
const fs = require('fs').promises
const path = require('path')
const uuid = require('uuid').v5
// визначимо домашній роутер
// router.get('/', (req, res) => {
//   res.send('Це головний роутер')
// })
router.use((req, res, next) => {
  req.id = uuid()
})
router.post('/app/users', async (req, res) => {
  try {
    const { name, email, phone } = req.body

    const userNumbers = JSON.parse(
      await fs.readFile('./data/listOfContacts.json'),
    )
    const addUser = {
      name,
      email,
      phone,
      id: req.id,
    }
    userNumbers.push(addUser)
    await fs.writeFile(
      './data/listOfContacts.json',
      JSON.stringify(userNumbers),
    )
    res.status(201).json({
      user: addUser,
    })
  } catch (error) {
    console.log(error)
  }
})
// визначимо роутер about
router.get('/app/users', async (req, res) => {
  try {
    const users = JSON.parse(await fs.readFile('./data/listOfContacts.json'))

    console.log(users)
    res.status(201).json({
      users,
    })
  } catch (error) {
    console.log(error)
  }

  //console.log(req)
})

module.exports = router
