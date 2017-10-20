angular.module('spotyApp')
.factory('spotifyService', function($http){
	function getUserData (username) {
		var token = 'BQD_f64vnaE-NFb9AJfK0uHhqsMvmeGA3z4fI1zxI1lW3EFaz7S0U5JUOGOyO-qGx31Y63LEbzoRnegI4xM_CdjgN0YDcA-TaoZ0U48leyYTCy2hHbNQhR1N0CCKa5XtjZcdrLtq'
		var url ='https://api.spotify.com/v1/albums/'+trackName+'/tracks'
		return $http.get(url,{
			headers: {'Authorization': 'Bearer ' + token}
		})
	}
	return {
		getTrackData: getTrackData
	}

})