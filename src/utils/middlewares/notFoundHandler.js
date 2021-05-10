const createError = require('http-errors')
//  import createError from 'http-errors'

module.exports = (_, __, next) => {
  next(createError(404))
}