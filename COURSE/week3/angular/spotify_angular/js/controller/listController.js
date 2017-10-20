angular.module('spotyApp')



.factory('spotifyService', function ($http) {
  var token = 'BQBQkqgD8A9Cjv4lP0JDrdVyYN3V6Ef-K2ZpLDOkSz4MEbZ2DyH3KpCEDabuGTZ9fwmmDHLM-1WqUS5M2SLyhR30n3Bd9p0wzOTRV1iYr6tb2kFujt1yLtIo3_3Ksq0QmQIr9vkC9l4'
   
   function getUserData (username) {
    var url = 'https://api.spotify.com/v1/search?type=artist&query=' + username
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }


  function getArtistData (artistName) {
    var url = 'https://api.spotify.com/v1/artists/'+artistName+'/albums' 
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }

  
  function getTrackData (trackName) {
    var url = 'https://api.spotify.com/v1/albums/'+trackName+'/tracks'
    return $http.get(url, {
      headers: {'Authorization': 'Bearer ' + token}
    })
  }

  // function trackPlay (trackId) {
  //   var url = 'https://api.spotify.com/v1/tracks/'+trackId
  //   return $http.get(url, {
  //     headers: {'Authorization': 'Bearer ' + token}
  //   })
  // }
  
  return {
    getUserData: getUserData,
    getTrackData: getTrackData,
    getArtistData: getArtistData,
    // trackPlay: trackPlay
  }
})
