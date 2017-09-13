/*Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file link.txt

Hint: You need npm module -> request

##4. File list

Write a node.JS program that list the content of the current directory indicating if is a directory or a file
*/
//el modulo fs es el modulo de lectura/escritura de node
var fs = require('fs');
//el modulo request envia una peticion para leer el html
var request = require('request')
	//para hacerla sincrona hacemos el readFileSync
	var url = fs.readFileSync('link.txt', 'utf-8')

	request(url, function(err, response, body){
		//Esto quiere decir que si hay un error, lance un aviso de error de lectura
		if (err) throw err;
		var regExp = /src='(.*)'></
		itemsFound.pop;
	console.log(itemsFound)

});


//Request es un modulo, por tanto requiere el npm. En terminal hemos de hacer npm install
//No está acabado!
