const express = require('express')
const router = express.Router()

// визначимо домашній роутер
// router.get('/', (req, res) => {
//   res.send('Це головний роутер')
// })
router.post('/app/users', async (req, res) => {
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
})
// визначимо роутер about
router.get('/app/users', async (req, res) => {
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

  //console.log(req)
})

module.exports = router
