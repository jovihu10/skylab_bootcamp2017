// Escribe un programa de node js que lea y muestre en la consola el código html de una pag externa. El link de la pag externa deberia ser leido desde un archivo link.txt
//Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file link.txt

// el modulo fs es de "file system"
var fs = require('fs')

//hacemos una peticion, por eso hacemos un request
var request = require('request')
//despues de la peticion, hacemos un readFileSync con el fs para que lo lea
var url = fs.readFileSync('link.txt', 'utf-8')

//hacemos una peticion de url. Si alguno de los parametros no los coge (que de err)
// que se corte la acción
request(url, function (err, response, body) {
  if (err) throw err;
  console.log(body);



//Request es un modulo, por tanto requiere el npm. En terminal hemos de hacer npm install
  /*

  var regExp = /src='.*'><\/script>/g
  var itemsFound = body.match(regExp)
  var aJsLoaded = itemsFound.map( function( urlJs ) {
    var urlCleaned = urlJs.replace("src=\'", '').replace("\'></script>", '')
    var oUrl = url.parse(urlCleaned);
    var pathName = oUrl.pathname
    var fileName = pathName.split('/').pop()
    return fileName

  })
  console.log(aJsLoaded);

 */


});

