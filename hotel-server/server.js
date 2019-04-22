'use strict'

const express = require('express')
const path = require('path')
const morgan = require('morgan');
const mysql = require('mysql');//añadido
const myConnection = require('express-myConnection');

const app = express()

const routes = require('./routes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'));
app.use(myConnection(mysql, {//añadido
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'hotel'
}, 'single'));//añadido

app.use('/', routes)
app.use(express.static('public'))

app.use(express.urlencoded({extended: false}));//añadido


const port = process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) throw err
  console.log('server runnig  http://localhost:3000/')
})
