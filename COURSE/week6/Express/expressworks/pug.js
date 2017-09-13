const express = require('express')
const path = require('path')
//puerto
const port = process.argv[2]
const file = process.argv[3]
const app = express()

app.set('views', file)

app.set('view engine', 'pug')

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(port)