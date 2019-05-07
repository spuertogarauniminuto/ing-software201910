
'use strict'

const mysql = require('mysql')
const config = require('./config')

const connection = mysql.createConnection(config)

connection.connect((err) => {
  if (err) {
    console.error(err.message)
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

module.exports = connection
