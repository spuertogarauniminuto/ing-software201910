'use strict'

const express = require('express')
const app = express();
const routes = require('./routes')
const path = require('path')
const bodyParser = require('body-parser');

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', routes)
app.use(express.static('public'))
app.use(cookieParser())

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(session({
  secret: 'cats',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended : false}))

const port = process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) throw err
  console.log('server runnig  http://localhost:3000/')
})
