/*
Escribe un programa que reciba como argumento una URL y realice una petición HTTP GET a la misma. Luego, deberá imprimir por consola el contenido de cada evento "data" de la petición, uno por línea.

PISTAS

Para este ejercicio necesitas el módulo http incluido en Node.

La documentación del módulo http puede verse en: {rootdir:/node_apidoc/http.html}

El método http.get() es versión simplificada para peticiones GET y conviene que la uses para la solución. El primer parámetro de http.get() es la URL y el segundo es un callback.

A diferencia de otros callbacks la firma es:

function callback (response) { /* ... */ }

/*
Siendo response un objeto Stream de Node. En Node los Streams emiten eventos, a los cuales puedes suscribir callbacks. Para este ejercicio sólo nos interesan los eventos: "data", "error" y "end". Para escuchar un evento debes hacer:

response.on("data", function (data) { /* ... */ }) /*
El evento "data" se dispara cuando un chunk, conjunto de datos, está disponible para procesarse. El tamaño del chunk depende de la implementación.

Nota: Por omisión, los objetos 'data' recibidos son Buffers de Node que deben ser convertidos a Strings para luego ser escritos en consola. Sin embargo, el objeto response que obtienes de http.get() tiene un método setEncoding() que permite definir cómo se leen los bytes obtenidos. Si lo llamas con parámetro "utf8" recibirás Strings en los eventos emitidos.

*/
var http = require('http')
var url = process.argv[2]
http.get(url, function(readableResponse) {
  readableResponse.setEncoding('utf8')
  // También podríamos hacer el set encoding así:
  //
  readableResponse.on('data', function (data) {
    console.log(data)
  })
  readableResponse.on('error', function (err) {
    console.log(err)
  })
})




//Un método más elegante de escritura
/*
var http = require('http')  //requiriendo http
var through2 = require('through2')
var link =process.argv[2]  //capturas el parametro "info" del link

var streamTransform = through2( function(chunk, _, next) {
  chunk = chunk + '\n'
  this.push(chunk)
  next()
})

http.get(urlToGet, function( readableResponse ) {

  readableResponse.setEncoding('utf8')

  readableResponse
    .pipe(streamTransform)
    .pipe(process.stdout)

})


*/
