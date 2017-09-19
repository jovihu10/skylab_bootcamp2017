var token = 'BQCY6FxM28Mz6-ygeEEW7huV26mQkxXz7AYFKy-pRFVbGceX9-ORmAwQrUEXt9MNitnSzo47dGvBdx7fHGryshREmNzjWcQBcBrdLLgHlTvMSfFOSmUcnvtWT_4WjPE8Ujt1kXaST3o';
$(document).submit(function(event) { event.preventDefault(); });

$('button').click(function() {
    var search = $('#artistSearch').val();
    searchArtist(search, listArtists);
});

$('button').click();

function searchArtist(artistQuery, callback) {
    $.ajax({
            url: 'https://api.spotify.com/v1/search?q=+' + artistQuery + '&type=artist',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .done(function(results) { //recibimos los datos
            callback(results.artists.items);
        })
        .fail(function() {
            alert('conexion faild');
        });
}

function listArtists(artists) {
    $('#artistsList').empty();
    $('#albumList').empty();
    $('#songsList').empty();
    var repeatedArtist = '';
    artists.forEach(function(artist) {
        if (artist.name !== repeatedArtist) {
            repeatedArtist = artist.name;
            $('#artistsList').append('<li><a class="artist-item" data-id="' + artist.id + '" href="#">' + artist.name + '</a></li>')
        }
    });
    $('.artist-item').click(function() {
        searchAlbum($(this).attr('data-id'), listAlbums);
    });
}

function searchAlbum(artistId, callback) {
    $.ajax({
            url: 'https://api.spotify.com/v1/artists/' + artistId + '/albums',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .done(function(results) { //recibimos los datos
            callback(results.items);
        })
        .fail(function() {
            alert('conexion faild');
        });
}

function listAlbums(albums) {
    $('#albumList').empty();
    $('#songsList').empty();
    var repeatedAlbum = '';
    albums.forEach(function(album) {
        if (album.name.toLowerCase() !== repeatedAlbum) {
            repeatedAlbum = album.name.toLowerCase();
            $('#albumList').append('<li><a class="album-item" data-id="' + album.id + '" data-image="' + album.images[0].url + '" href="#">' + album.name + '</a></li>')
        }
    });
    $('.album-item').click(function() {
        searchSongs($(this).attr('data-id'), listSongs);
        imageBackground(($(this).attr('data-image')));
    });
}

function searchSongs(albumId, callback) {
    $.ajax({
            url: 'https://api.spotify.com/v1/albums/' + albumId + '/tracks',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .done(function(results) {
        	callback(results.items);
        })
        .fail(function() {
            alert('conexion faild');
        });
}

function listSongs(songs) {
    $('#songsList').empty();
    var repeatedSong = '';
    songs.forEach(function(item) {
        if (item.name !== repeatedSong) {
            repeatedSong = item.name;
            $('#songsList').append('<li><a class="songs-item" data-song="' + item.preview_url + '" href="#">' + item.name + '</a></li>');
        }
    })
    $('.songs-item').click(function() {
        openSongPlayer($(this).attr('data-song'), $(this).text());
    })
}

function openSongPlayer(url, title) {
    if (url == 'null') {
        $('.modal-title').text(title);
        $('.modal-body').text("I'm sorry, this song is unavailable");
        $('#modal').modal('show');
    } else {
        $('.modal-title').text(title);
        $('.modal-body').html('<audio controls><source src="' + url + '" type="audio/mpeg"></audio>');
        $('#modal').modal('show');
    }

}

function imageBackground(img) {
    var image = 'url("' + img + '")';
    $('#modal').css('background-image', image);
    $('#modal').css('background-repeat', 'no-repeat');
    $('#modal').css('background-size', 'cover');

}