
//Crear archivo node que le pasemos un string y el programa le genere un html y que ponga como titulo el string y lo devuelva


//Access this HTML with http://localhost:8080 from your browser


//1)L' ordre aquí es creeem l' arxiu amb l' encapçalat
//2) creem l' arxiu html amb 
//3)Creem el server
// 4) fem 
var http = require('http');
var fs = require('fs');
var html = '<h1>Hola que tal</h1>'
	fs.writeFile('index.html',html, function(err, html){
		if(err) throw err
		console.log('arixu creat')

	//creem el server
	    var server = http.createServer();
	    server.on("request", function (req, res){
		//Finalitzem la crida
		//res.writeHeader(200, {"Content-Type": "text/html"})
		res.write(html)
		res.end('request');
})
	    
	})
//El coloquem
//De la callback del request leo el fichero y hago un write