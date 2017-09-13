const express = require('express')
const stylish = require('stylish')
const port = process.argv[2]
const app = express()
//app.use(require('stylus').middleware('/path/to/folder'))
app.use(require('stylus').middleware('public'))
app.post(process.argv[3], function(req, res) {
   
})
app.listen(port)



