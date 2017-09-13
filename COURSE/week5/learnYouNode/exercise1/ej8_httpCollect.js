/*
Escribe un programa que realice una petición HTTP GET a una URL provista como primer argumento del programa. Almacena todos los datos recibidos del servidor, es decir no sólo el primer evento "data", y luego escribe a consola dos líneas:

En la primera escribe la cantidad de caracteres recibidos.
En la segunda escribe la totalidad de caracteres recibidos (todo el string).
https://github.com/workshopper/learnyounode/blob/master/exercises/http_collect/problem.es.md
*/
var http = require('http')
var url = process.argv[2]

http.get(url, function(response) {
  response.on('err', function (err) {
    console.log(err)
  })
  response.setEncoding('utf8')
  var str = ''
  response.on('data', function (data) {
    str += data
  })
  response.on('end', function () {
    console.log(str.length)
    console.log(str)
  })
})
