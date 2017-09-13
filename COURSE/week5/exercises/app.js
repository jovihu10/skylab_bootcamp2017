// Write a node.JS program that execute a connection to server and return success message like "Success, i'm listening from port: 3000"

//1) Creamos una var con un require
var http = require('http')

var server = http.createServer()
var PORT = process.env.PORT || 3000
var counter = 0

//ESto habilita en servidor local. Hay que hacerlo siempre así
server.on('request', function(req, res){
  console.log('request number ' + (++counter) );
  res.end('request received...')
})

//Aquí l' hi estàs dient on vols que s' habiliti(hem posat port, però podriem haver posat el 3000)
server.listen(PORT, function() {
  console.log('server is listening on PORT '+ PORT);
})
