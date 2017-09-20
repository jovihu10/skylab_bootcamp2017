//Ponemos todos los controles dentro de otro angular.module
//le llamaremos myControllersContainer porque contendrá todos los controladores
angular.module('myControllersContainer', [])
    .controller('myController', function($scope) {
        //este es MyController lógico
        //Hacemos un console.log para ver que realmente está funcionando
        console.log("MyController logic...")
    })

    .controller('myOtherController', function($scope) {
        //Este es MyOtherController lógico
        console.log("MyOtherController logic...")
    });