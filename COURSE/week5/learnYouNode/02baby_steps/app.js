/*Escribe un programa que reciba uno o más números como argumentos de la consola e imprima la suma de dichos números a consola(stdout).

*/
var aNumbers = process.argv.splice(2)
var result = aNumbers.reduce(function (acc, num) {
  return acc + (num*1)
}, 0)

console.log(result)
