'use strict'

const config = {
  username: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'hotel'
}

module.exports = config
