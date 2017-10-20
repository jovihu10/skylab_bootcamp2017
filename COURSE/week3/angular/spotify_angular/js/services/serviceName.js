angular.module('spotyApp')
.factory('spotifyService', function($http){
	function getUserData (username){
		var token = 'BQBnGNIxPoUpDRXnyYa9PMdruA1M05E1UaEJDDWdsl4uXs8ZNp9RWB3AFGd91hH8hvxFF3_x-YK800NOjxDrBmOODW1DZr36zvnubkiTW8RNn2g1TkiPisslOOXB1s0ckARIX_VB'
		var url = 'https://api.spotify.com/v1/search?type=artist&query=' + username
		return $http.get(url, {
			headers: {'Authorization': 'Bearer' + token}
		})
	}
	return{
		getUserData: getUserData
	}
})