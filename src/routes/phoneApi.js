const router = require('express').Router()
const validationHandler = require('../utils/middlewares/validationHandler')

const {
  createContactSchema,
  getContactSchema,
  updateContactSchema,
  deleteContactSchema,
  getDocumentInfo
} = require('../components/contacts/domain/contact')

const {
  getContacts,
  newContact,
  getContactById,
  updateContacto,
  deleteContact,
  getInfo
} = require('../components/contacts/controller')

router.get('/', (req, res) => {
  res.send('Hola, esta es la ruta inicial, ingrese a api/persons')
})

router.get(
  '/api/persons',
  validationHandler(getContactSchema),
  getContacts
)

router.get(
  '/info',
  validationHandler(getDocumentInfo),
  getInfo
)

router.get(
  '/api/persons/:id',
  validationHandler(getContactSchema),
  getContactById
)

router.put(
  '/api/persons',
  validationHandler(updateContactSchema),
  updateContacto
)

router.delete(
  '/api/persons/:id',
  validationHandler(deleteContactSchema),
  deleteContact
)

router.post(
  //  hacer las validaciones aqui:
  // validationHandler(authSchema, 'headers')
  '/api/persons',
  validationHandler(createContactSchema),
  newContact
)

module.exports = router
