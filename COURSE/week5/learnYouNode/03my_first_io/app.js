/*
Escribe un programa que, usando una llamada síncrona al sistema de archivos, lea un archivo recibido por argumento e imprima a consola la cantidad de saltos de línea ('\n') que contiene. Similar a ejecutar cat file | wc -l.

El programa recibirá la ruta al archivo como único argumento.
*/

//1)Al tener que hacerlo con una llamada sincrona lo hacemos sin funcion

var fs = require('fs')
//2) como tiene que leer un archivo, primero hacemos el require fs y el readFileSync
var text = fs.readFileSync(process.argv[2], 'utf-8')
//Como quiere que contemos los saltos de linea, hacemos un split para tenerlo en array y marcándole que el separador sea el salto de linea (\n)
var numLines = text.split('\n').length -1
console.log(numLines)
