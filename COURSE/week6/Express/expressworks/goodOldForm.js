const express = require('express')
var bodyparser = require('body-parser')
const port = process.argv[2]

const app = express()
app.use(bodyparser.urlencoded({ extended: false }))
app.get('/form', function(req, res) {
    res.end(req.body.str.split('').reverse().join(''))
})

app.listen(port)