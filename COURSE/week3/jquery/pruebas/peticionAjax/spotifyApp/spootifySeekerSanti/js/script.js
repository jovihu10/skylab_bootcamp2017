
	var token= 'BQCY6FxM28Mz6-ygeEEW7huV26mQkxXz7AYFKy-pRFVbGceX9-ORmAwQrUEXt9MNitnSzo47dGvBdx7fHGryshREmNzjWcQBcBrdLLgHlTvMSfFOSmUcnvtWT_4WjPE8Ujt1kXaST3o';
	$(document).submit(function(event){event.preventDefault();});
	$('button').click(function(){	
			var search=	$('#artistSearch').val();	
			var url = 'https://api.spotify.com/v1/search?q=+'+search+'&type=artist';
			searchArtist(url);
	})
			
	function searchArtist(url){
		$.ajax({
				url: url,
				headers: {
			        Authorization: 'Bearer ' + token
			     }
			})
			.done(function(results){			//recibimos los datos
				 listingArtists(results.artists.items);
				 $('.artist-item').click(function(){
				 	searchAlbum($(this).attr('data-id'));
				 })
			})
			.fail(function(){
				alert('conexion faild');
			});	
	}
	

	function searchAlbum(artistId){
		var urlAlbumSearch='https://api.spotify.com/v1/artists/'+artistId+'/albums';
			$.ajax({
				url: urlAlbumSearch,
				headers: {
			        Authorization: 'Bearer ' + token
			     }
			})
			.done(function(results){			   //recibimos los datos
				 $('#albumList').empty();
				 $('#songsList').empty();
				 listingAlbums(results.items);
				 $('.album-item').click(function(){
				 	listingSongs($(this).attr('data-id'));
				 	imageBackground(($(this).attr('data-image')));
				 }) 
			})
			.fail(function(){
				alert('conexion faild');
			});	
	}		

	function listingArtists(results){
			$('#artistsList').empty();
			$('#albumList').empty();
			$('#songsList').empty();
			var repeatedArtist='';
			results.forEach(function(artist){
				if(artist.name!==repeatedArtist){
					repeatedArtist=artist.name;
					$('#artistsList').append('<li><a class="artist-item" data-id="' + artist.id + '" href="#">'+artist.name+'</a></li>')
				}else{}
			})
	}

	function listingAlbums(results){
			var repeatedAlbum='';
			results.forEach(function(album){
				if(album.name!==repeatedAlbum){
					repeatedAlbum=album.name;
					$('#albumList').append('<li><a class="album-item" data-id="' + album.id + '" data-image="'+album.images[0].url+'" href="#">'+album.name+'</a></li>')
				}else{}
			})
	}
	function listingSongs(song){
		var songUrl= 'https://api.spotify.com/v1/albums/'+song+'/tracks';
			$.ajax({
				url: songUrl,
				headers: {
			        Authorization: 'Bearer ' + token
			     }
			})
			.done(function(results){
				$('#songsList').empty();
				var repeatedSong='';
				results.items.map(function(item){
					if(item.name!==repeatedSong){
						repeatedSong=item.name;
						$('#songsList').append('<li><a class="songs-item" data-song="'+item.preview_url+'" href="#">'+item.name+'</a></li>');
					}else{}
				})	
				$('.songs-item').click(function(){
					reproduce($(this).attr('data-song'), $(this).text());
				})		   
			})
			.fail(function(){
				alert('conexion faild');
			});	
	}
	function reproduce(urlPreview, title){
				if(urlPreview == 'null'){
					$('.modal-title').text(title);
	                $('.modal-body').text("I'm sorry, this song is unavailable");
	                $('#modal').modal('show');
				}
				else{
					$('.modal-title').text(title);
	                $('.modal-body').html('<audio controls><source src="'+urlPreview+'" type="audio/mpeg"></audio>');
	                $('#modal').modal('show');
	            }

	}
	function imageBackground(img){
			var image= 'url("'+img+'")';
				$('#modal').css('background-image', image);
				$('#modal').css('background-repeat', 'no-repeat');
				$('#modal').css('background-size', 'cover');

	}