'use strict'

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'test'
}

module.exports = config
