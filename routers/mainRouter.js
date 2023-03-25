const express = require('express')
const router = express.Router()

// визначимо домашній роутер
// router.get('/', (req, res) => {
//   res.send('Це головний роутер')
// })
router.post('/login', (req, res, next) => {
  const { email, password } = req.body
  res.render('response', { title: 'Simple express app', email, password })
})
// визначимо роутер about
router.get('/about', (req, res) => {
  res.send('About')
})

module.exports = router
