const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs').promises
// визначимо домашній роутер
// router.get('/', (req, res) => {
//   res.send('Це головний роутер')
// })
router.post('/login', (req, res, next) => {
  const { email, password } = req.body
  res.render('response', { title: 'Simple express app', email, password })
})
// визначимо роутер about
router.get('/users', (req, res) => {
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

})

module.exports = router
