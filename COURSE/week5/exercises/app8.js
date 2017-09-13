//8. Show Hour Write a node.JS program that shows you the local hour of server.
//Hint: You need npm module -> strftime
//habiendo instalado en terminal el npm así: npm install strftime
//El módulo strftime formatea la hora
var strftime= require('strftime');

//Creamos el objeto date con el modulo strftime. Así ya tenemos hora y formateada
 console.log(strftime('%F %T', new Date())) // => 2011-06-07 18:51:45



