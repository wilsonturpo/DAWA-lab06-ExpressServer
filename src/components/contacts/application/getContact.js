/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
module.exports = ({ ContactsRepository }) => {
  return async ({ id }) => {
    if (!id) throw new Error('User does not exist')
    return ContactsRepository.getById(id)
  }
}
