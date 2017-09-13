
/* Escribe un programa de node js que cree un archivo de texto con el texto 
//pasado como parametro
$ node ex5.js "hey ho! let's go"
The file was saved!
$ cat myText.txt 
hey ho! let's go
Hint: You need fs.writeFile

*/

//hacemos un modulo fs almacenado en un var
var fs= require('fs');

//process.argv property devuelve un array con los argumentos de cuando node ha sido lanzado
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
//En process.argv, el 0 es carpeta, el 1 archiu i el 2 lo que hi ha dintre del arxiu
fs.writeFile('text.txt', process.argv[2], function(err){
	if(err) throw err;
		console.log("Success")
	
})
