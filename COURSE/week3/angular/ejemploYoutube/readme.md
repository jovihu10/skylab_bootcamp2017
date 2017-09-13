primero creamos la app y se lo asignamos en el index al html el nombre de la app (en este caso myApp)

2º) Creamos una variable myApp en el js "myApp" así:
var myApp = angular.module('myApp', []);

3º)creamos carpeta controller con el archivo mainController.js
4º) en el body del index le damos ng-controller y el nombre del controller.
(en este caso <body ng-controller="mainController">)