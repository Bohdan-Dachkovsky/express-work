const express = require('express')
const router = express.Router()
const {
  createUserContacts,
  getContactsList,
  getContactsIndex,
  updVariables,
} = require('../controllers/userControllers.js')
const {
  generatorId,
  updNewArray,
  delNewArray,
} = require('../middlewares/userMiddlewares.js')

router.use(generatorId)
router.use('/app/contacts/:id', updNewArray)
router.use('/app/contacts/:id', delNewArray)
router.post('/app/contacts', createUserContacts)

router.get('/app/contacts', getContactsList)
router.get('/app/contacts/:id', getContactsIndex)
router.delete('/app/contacts/:id', deleteContactById)
router.put('/app/contacts/:id', updVariables)

module.exports = router
