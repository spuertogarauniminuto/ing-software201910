'use strict'

const db = require('../.')

db.query('SELECT 1+1', function (error, results, fields) {
  if (error) throw error
  // connected!
  console.log('connected')
  console.log(results)
  console.log(fields)
})