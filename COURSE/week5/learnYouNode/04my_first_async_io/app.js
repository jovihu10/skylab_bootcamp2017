/*Escribe un programa que use operación de sistema de archivos asíncrona para leer un archivo e imprimir en consola el número de saltos de línea ('\n') que contiene. 
Similar a ejecutar cat file | wc -l.

El programa recibirá la ruta al archivo como único argumento.
*/

//El ejercicio es similar al anterior, sólo que al ser asíncrono lo haremos con una funcion como parámetro para el err data
var fs = require('fs')

var text = fs.readFile(process.argv[2], 'utf-8', function (err, data) {
  if (err) throw err
  var numLines = data.split('\n').length -1
  console.log(numLines)
})
