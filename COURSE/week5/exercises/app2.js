var fs = require('fs')
//Seria 2 en el array porque el 0 sería el path de node y el 1 el path de este archivo y el 2 lo que le pases después
var pathFile = process.argv[2]
//Fs es para leer texto, y readFile el método para leerlo
fs.readFile(pathFile, 'utf-8', function(err, data){
	//El if throw sería "si hay un error, que culmine la función y muestre cual y donde está el error"
	if(err) throw err
	console.log(data)
})


// node app2.js text.txt



//Metodo 2 si queremos una funcion para un archivo especifico
var fs = require('fs')

fs.readFile('text.txt', 'utf-8', function(err, data){
	
	console.log(data)
})