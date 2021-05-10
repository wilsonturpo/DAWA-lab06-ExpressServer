const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
//  const bodyParser = require('body-parser')

const app = express()

const errorHandler = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

const { config } = require('./config')
const phoneApi = require('./routes/phoneApi')

app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
//  app.use(bodyParser())

app.use('/', phoneApi)

app.use(notFoundHandler)

app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`listening http://localhost:${config.port}`)
})
