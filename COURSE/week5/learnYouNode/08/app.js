var http = require('http')
var url = process.argv[2]
http.get(url, function(response) {
  response.on('err', function (err) {
    console.log(err)
  })
  response.setEncoding('utf8')
  var str = ''
  response.on('data', function (data) {
    str += data
  })
  response.on('end', function () {
    console.log(str.length)
    console.log(str)
  })
})
