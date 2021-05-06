//  require('dotenv').config();
//  import .config() from 'dotenv';
import Server from './models/server.js'
import dotenv from 'dotenv'
dotenv.config()

//  const Server = require('./models/server');

const server = new Server()

server.listen()
