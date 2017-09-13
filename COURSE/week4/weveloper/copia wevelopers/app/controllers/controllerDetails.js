var app = angular.module('wevelopersApp')
app.controller('searchOffersController', function($scope, infoJobsFactory) {
    $scope.searchOffersIngenieros = function(query) {
        infojobsFactory.getOffersIngenieros(query)
            .then(function(response) {
                $rootScope.offersIngenieros = response;
            })
    }
    $scope.searchOffersInformaticos = function(query) {
        infojobsFactory.getOffersInformatica(query)
            .then(function(response) {
                $rootScope.offersInformatica = response;
            })
    }
})
	




