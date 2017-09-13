var http = require('http');
var server = http.createServer();
server.on("request", function (req, res){
	res.end("this is the response");

});

server.listen(3000);

//El puerto de la conexión va a ser el 3000
//Siempre habrá que especificar el puerto. Por normal el 3000 es el standar