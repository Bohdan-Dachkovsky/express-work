const Joi = require('joi')
exports.handleContactsValidator = (data) =>
  Joi.object({
    name: Joi.string().max(15).required(),
    email: Joi.string().max(35).required(),
    phone: Joi.string().min(9).max(13).required(),
    id: Joi.string().min(1).max(25),
  }).validate(data)

exports.handleIndeIndentificatorVal = (data) =>
  Joi.object({
    id: Joi.string().min(1).max(25).required(),
  }).validate(data)
