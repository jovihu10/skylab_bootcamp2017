//Hacemos que myApp reciba el controlador myController y una funcion 
//la clave es que tenga de parametro el $scope 
myApp.controller('mainController', function($scope){

	//1ª Probamos que recibe el scope con este console.log
	//console.log($scope);

	//podemos hacer darle atributos al $scope. por ejemplo el atributo name, así
	// ha de ser con = !
	$scope.name = "Joël";
	console.log($scope)
	$scope.getName = function(){
		return $scope.name; 
	}
});