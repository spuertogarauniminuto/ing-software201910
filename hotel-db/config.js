'use strict'

const config = {
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'hotel'
}

module.exports = config
