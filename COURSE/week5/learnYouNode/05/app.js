/*Crea un programa que dado un directorio imprima una lista de archivos filtrados por la extensión. El primer argumento será la ruta al directorio (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.

Nota: el segundo argumento no incluye el punto '.'.

La lista de archivos a imprimir en consola debe hacerse un archivo por línea y debes utilizar Async I/O.

*/

//1)como queremos que lea un archivo, hacemos el require fs
var fs = require('fs')

//Hacemos process.argv para saber la ruta
var path = process.argv[2]
//Para el tipo de archivo hacemos lo mismo pero con argumento 3
var fileType = process.argv[3]
//Hacemos un readFile pasandole como argumento las var de path filetype 
var extLister = fs.readFile(path, filetype, 'utf-8', function (err, data) {
  // if (err) throw err
  // data.forEach(function (key){
  //   console.log(key)
  console.log(data)
  })

})


//
//
// var text = fs.readFile(process.argv[2], 'utf-8', function (err, data) {
//   if (err) throw err
//   var numLines = data.split('\n').length -1
//   console.log(numLines)
// })
