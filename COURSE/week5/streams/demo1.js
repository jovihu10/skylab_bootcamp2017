var fs = require('fs')
console.log('Reading file')
var readableStream =fs.createReadStream('data.txt')
var counter = 0


readableStream.on('data', function(chunk){
	contentFile += chunk.toString()
});

readableStream.on('end', function(){
console.log(contentFile)
});  

