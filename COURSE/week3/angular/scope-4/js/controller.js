//Ponemos todos los controles dentro de otro angular.module
//le llamaremos myControllersContainer porque contendrá todos los controladores
angular.module('myControllersContainer', [])
    .controller('myController', function($scope) {
        //este es MyController lógico
        //Hacemos un console.log para ver que realmente está funcionando
        console.log("MyController logic...")

        //El $scope es compartido con el view (html) que usa este controller (ng-controller)
        //La gracia es que haciendolo así ya le decimos la info que ha de aparecer
        $scope.firstName = 'Sean';
        $scope.lastName = 'Citizen';
    })

    .controller('myOtherController', function($scope) {
        //Este es MyOtherController lógico
        console.log("MyOtherController logic...")

        //Cada controller controla su propio $scope
        $scope.firstName = 'Juanma';
        $scope.lastName = 'Guitar';
    });