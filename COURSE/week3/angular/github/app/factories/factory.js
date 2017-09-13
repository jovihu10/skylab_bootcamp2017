var app = angular.module('githubApp')
app.factory('mainFactory', function($http){
	var showName = function(user){
		console.log('HEY FROM FACTORY BITCHES')
	}
	return {
		showName:showName
	}
})


//Es un saquito de funciones que va a hacer servir el controlador





app.directive ('installApp', function(){
  return{
    restrict:'e',
    scope:'{}',
    templateUrl:'js/directives/installApp.html',
  }
      
})



app.directive('installApp', function(){
  return{
    restrict:'e',
    scope:'{}',
    templateUrl:'js/directives/installApp.html',
    
  }
})



app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/installApp.html',
    