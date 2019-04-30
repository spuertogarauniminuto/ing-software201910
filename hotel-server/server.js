'use strict'

const express = require('express')
const app = express();
const routes = require('./routes')
const path = require('path')
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', routes)
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended : false}))

const port = process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) throw err
  console.log('server runnig  http://localhost:3000/')
})
