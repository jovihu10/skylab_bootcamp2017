/*6. Processing values

Write a node program that process local txt and return values as a Array.

Hint: You need npm module -> concat-stream

##8. Show Hour Write a node.JS program that shows you the local hour of server.

Hint: You need npm module -> strftime*/
//1)hacemos un require fs
var fs= require('fs');
//2) hacemo que lea el archivo de texto. Le damos una funcion por si falla que corte
fs.readFile('text.txt', 'utf-8', function(err, data)
{
	if(err) throw err;
		
		//creamos un array vacío, y con push introducimos  ahí toda la data
		var arr=[];
		arr.push(data);
		//hacemos console.log del array para ver que se cumple
		console.log(arr)
	
})



