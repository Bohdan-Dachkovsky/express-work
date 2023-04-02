const express = require('express')
const router = express.Router()
const {
  createUserContacts,
  getContactsList,
  getContactsIndex,
  deleteContactById,
  updVariables,
} = require('../controllers/userControllers.js')
const {
  generatorId,
  delNewArray,
  updNewArray,
} = require('../middlewares/usersMiddleware.js')

router.use(generatorId)
router.use('/app/contacts/:id', delNewArray)
router.use('/app/contacts/:id', updNewArray)
router.post('/app/contacts', createUserContacts)
router.get('/app/contacts', getContactsList)
router.get('/app/contacts/:id', getContactsIndex)
router.delete('/app/contacts/:id', deleteContactById)
router.put('/app/contacts/:id', updVariables)

module.exports = router
