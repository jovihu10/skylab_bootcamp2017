
//Escribe un programa de node.js que ejecuta una conexión al servidor y devuelve un mensaje de "Success, i'm listening from port: 3000"
//1) Creamos una var con el módulo http. Por ello usamos require
var http = require('http')


var server = http.createServer()
var PORT = process.env.PORT || 3000
var counter = 0

server.on('request', function(req, res){
  console.log('request number ' + (++counter) );
  res.end('request received...')
})

server.listen(PORT, function() {
  console.log('server is listening on PORT '+ PORT);
})