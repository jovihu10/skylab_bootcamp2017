// santi's spotify seeker (OOP)

var token = 'BQBr16ylrqmwWWKU3iWtGV5463T_pWh-7xRFD71zFZFVaejr-WvXl7rEdGmXfdiN6qlxyB0C4-LPj5irNq9i19kdXBFJC5rRK492s3tYHY3yr_XTxgPe0k5lB9u2oRH0SSxCqt9ftPI';
$(document).submit(function(event) { event.preventDefault(); });

$('button').click(function() {
    var search = $('#artistSearch').val();
    spotifyService.searchArtist(search, seekerView.listArtists);
});

// business logic

var spotifyService = {
    searchArtist: function(artistQuery, callback) {
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
    },
    searchAlbums: function(artistId, callback) {
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
    },
    searchSongs: function(albumId, callback) {
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
};

// presentation logic

var seekerView = {
    listArtists: function(artists) {
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
            spotifyService.searchAlbums($(this).attr('data-id'), seekerView.listAlbums);
        });
    },

    listAlbums: function(albums) {
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
            spotifyService.searchSongs($(this).attr('data-id'), seekerView.listSongs);
            seekerView.imageBackground(($(this).attr('data-image')));
        });
    },

    listSongs: function(songs) {
        $('#songsList').empty();
        var repeatedSong = '';
        songs.forEach(function(item) {
            if (item.name !== repeatedSong) {
                repeatedSong = item.name;
                $('#songsList').append('<li><a class="songs-item" data-song="' + item.preview_url + '" href="#">' + item.name + '</a></li>');
            }
        })
        $('.songs-item').click(function() {
            seekerView.openSongPlayer($(this).attr('data-song'), $(this).text());
        })
    },

    openSongPlayer: function(url, title) {
        if (url == 'null') {
            $('.modal-title').text(title);
            $('.modal-body').text("I'm sorry, this song is unavailable");
            $('#modal').modal('show');
        } else {
            $('.modal-title').text(title);
            $('.modal-body').html('<audio controls><source src="' + url + '" type="audio/mpeg"></audio>');
            $('#modal').modal('show');
        }

    },

    imageBackground: function(img) {
        var image = 'url("' + img + '")';
        $('#modal').css('background-image', image);
        $('#modal').css('background-repeat', 'no-repeat');
        $('#modal').css('background-size', 'cover');

    }
};

// WARN: delete after tests

$('button').click();