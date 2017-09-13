//10. Saving Write a node.JS program that sum all integers saved in other txt file.
//El ejercicio es muy parecido al anterior
// 1)hacemos un require fs y un readFile del archivo que queremos que lea
var fs = require('fs');
//hacemos esta funcion anonima para que en caso de error corte y guardar el resultado
//En todas las llamadas asíncronas hay que pasarle esta funcion
fs.readFile('text.txt','utf-8', function(err, data){
	if(err){
		throw err;
	
	}
//hacemos que todo el texto que esté separado por comas me lo separe y lo convierta en un 
//elemento de un array. Con el map modificamos el array y convertimos todo a parseInt
	var splitData = data.split(',').map(function(num){
		return parseInt(num);	

	});
	//con splitData, hacemos un reduce para que me junte todos los resultados
	//El num será el del array y el acc empezará por 0 porque se lo matizamos. 
	// En cada pasada, el acc será el resultado de la suma de los dos numeros, hasta que acc haya recorrido todo el array
	var result = splitData.reduce(function(num,acc){
		return num + acc
	},0)


	console.log(result)
})



//El path es para convertir un archivo de Json a html
//el stringify es para convertir un archivo de html a JSON
