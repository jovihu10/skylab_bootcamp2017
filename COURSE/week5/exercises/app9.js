//9. Compare values Write a node.JS program that search information in .txt file and returns you how much coincidences find.

//If you search about "John", and in your txt files are 2 John, should return 2

//Hint: You can try save all data in one array and compare with search..
//Siempre se cumple que hacemos un require fs y luego un readFile o writeFile
var fs = require('fs');
fs.readFile('text.txt','utf-8', function(err, data){
	if(err){
		throw err;
	
	}
	//ES posa la g al regex per a que el resultat del array sigui global i així ens pugui trobar tots els resultats que coincideixin
	var regExp = (/John/g)

	//fem un regex amb la condicio per a detectar tots els "john"
	var arr = data.match(regExp)
	console.log(arr)
	console.log(arr.length)
})
