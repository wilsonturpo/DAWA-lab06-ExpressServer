/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
module.exports = ({ ContactsRepository }) => {
  return async ({ id, name, number }) => { // parameters
    const newPerson = {
      name: name,
      number: number
    }
    return ContactsRepository.update(id, newPerson)
  }
}
