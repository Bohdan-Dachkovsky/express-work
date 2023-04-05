const { handleIndeIndentificatorVal } = require('../utils/fileValidator.js')
const fs = require('fs').promises
exports.generatorId = (req, res, next) => {
  let argum = 7
  req.id = Math.floor(Math.random(10) * Math.expm1(8) - 2 + argum++).toString()
  next()
}
exports.delNewArray = async (req, res, next) => {
  try {
    const { error, value } = handleIndeIndentificatorVal(req.params)
    const { id } = value
    console.log(id)
    if (error) return new IdError(403, error.details[0].message)
    const listContacts = JSON.parse(
      await fs.readFile('./data/listOfContacts.json'),
    )
    const contactsGrouped = listContacts.find((element) => element.id !== id)
    if (!contactsGrouped) return res.status(404).json({ message: 'Not found' })
    req.contactsArr = contactsGrouped
    next()
  } catch (error) {
    const err = new ErrorMessage()
    console.log(err)
  }
}
exports.updNewArray = async (req, res, next) => {
  try {
    const { error, value } = handleIndeIndentificatorVal(req.params)
    const { id } = value
    console.log(id)
    if (error) return new IdError(403, error.details[0].message)
    const listContacts = JSON.parse(
      await fs.readFile('./data/listOfContacts.json'),
    )
    const contactGrouped = listContacts.find((element) => element.id === id)
    if (!contactGrouped) return res.status(404).json({ message: 'Not found' })
    req.contactGrouped = contactGrouped
    next()
  } catch (error) {
    const err = new ErrorMessage()
    console.log(err)
  }
}
