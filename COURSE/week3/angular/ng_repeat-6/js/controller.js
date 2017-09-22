//Ponemos todos los controles dentro de otro angular.module
//le llamaremos myControllersContainer porque contendrá todos los controladores
angular.module('myControllersContainer', [])

    //MyController
    .controller('myController', function($scope) {
        //este es MyController lógico

        console.log("MyController logic...")

        //El $scope es compartido con el view (html) que usa este controller (ng-controller)
        //La gracia es que haciendolo así ya le decimos la info que ha de aparecer
        $scope.firstName = 'Sean';
        $scope.lastName = 'Citizen';

        //Añadimos la función greeting dentro del controller MyController, que funcionará en el $scope

        $scope.greeting = function() {
            return 'Greetings ' + $scope.firstName + ' ' + $scope.lastName;
        }
    })


    //myOtherController
    .controller('myOtherController', function($scope){
        console.log('myOtherController logic...')

        //Cada controller maneja su propio $scope
        $scope.firstName = 'Juanma';
        $scope.lastName = 'Guitar';
    });