var http = require ('http')
var fs = require ('fs')
var port = process.argv[2]
var filePath = process.argv[3]
var server = http.createServer(function(req, res){
	//Això ens llegeix el arxiu

var readStream = fs.createReadStream(filePath);
readStream.pipe(res)
//readStream.end()
}).listen(port)
