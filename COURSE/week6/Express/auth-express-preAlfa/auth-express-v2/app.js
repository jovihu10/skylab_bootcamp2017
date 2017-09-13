const express = require('express')
const path = require('path')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const app = express()

const routesApp = require('./routes/')
const PORT = 3001

app.set('view engine', 'pug')
app.use( express.static( path.join(__dirname, 'public' )) )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'authExpressDemoCookie',
  keys: ['superSecrettglWwSUbo']
}))

app.use(routesApp)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);