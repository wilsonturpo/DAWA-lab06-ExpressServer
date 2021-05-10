/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
module.exports = ({ ContactsRepository }) => {
  return async () => { // parameters
    return ContactsRepository.getAll()
  }
}
