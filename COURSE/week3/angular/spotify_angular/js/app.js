//https://developer.spotify.com/web-api/console/get-search-item/
console.log("receiving")
//1- Pasamos el token. Creamos una funcion onclick recoja los artista que cumplan la búsqueda
var token = 'BQBK3-HaWnVF5nvm7dDLdhgBWVcCNh6znXLv55eLSM7MCON-2BnoO_KsRL0YHXo8Sm5QRBxULDBYTBjuw09fWZBDg4Z9y-6ARXdEm99jLoP4PZj7QNChzMaNHqvH-iVu5f3NnCfN'
var albumId

/*
$("#submit").on('click', function(event) {

    event.preventDefault()


    //Esta variable es para almacenar lo que pongamos en el input
    var inputArtist = $('#inputArtist').val();
    console.log(inputArtist)


    //LLamada ajax para conseguir al artista que responda al nombre de la busqueda
    $.ajax({
            url: 'https://api.spotify.com/v1/search?type=artist&query=' + inputArtist,
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(function(oData) {
            var optionsArtists = oData.artists.items.map(function(artist) {
                return '<option value="' + artist.id + '">' + artist.name + '</option>'
            })

            $('.container').removeClass('hidden')
            $('.list-artists').removeClass('hidden')


            htmlSelect = optionsArtists.join('')
            $('.list-artists').html('<option disabled selected>Select an artist</option>' + htmlSelect)
            $('#artistImage').attr('src', artistImage)
        })
        .fail(function() {
            console.log("something has failed")
        })


    //Ahora que nos hace la búsqueda, si clickamos a un artista nos devuelve su id
    $('.list-artists').on('change', function() {
        event.preventDefault()
        var idArtist = $(this).val()
        console.log("idArtist es.." + idArtist)

        $.ajax({
                //https://api.spotify.com/v1/artists/<ID-ARTIST>/albums
                url: 'https://api.spotify.com/v1/artists/' + idArtist + '/albums',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            //Para la búsqueda de álbums
            .then(function(oData) {
                var optionsAlbums = oData.items.map(function(album) {

                    var albumName = album.name
                    console.log("albumName es " + albumName)
                    albumId = album.id
                    var albumUrl = album.url
                    var albumType = album.album_type
                    var link = album.external_urls.spotify
                    //var albumDescription = album.artists[0]


                    var albumImage = album.images[1].url
                    $('.info').removeClass('hidden')

                    //enviamos el nombre a la id con el mismo nombre
                    $('#albumName').html(albumName)
                    $('#albumImage').attr('src', albumImage)
                    $('#albumType').html(albumType)
                    $('#link').attr('href', link)
                    //$('#albumDescription').html(albumDescription)
                    console.log("link is ... " + link)
                    console.log("albumImage is ... " + albumImage)
                    console.log("la id de este album es " + albumId)
                    console.log("album name is.. " + albumName)
                    console.log("oData is... " + oData)
                    return '<option value="' + albumName + '">' + '</option>'

                })
                //Convertimos los elementos de album encontrados de array a string
                htmlSelect = optionsAlbums.join('')

                console.log("htmlSelect is" + htmlSelect)

                oData.hasOwnProperty('name') ? albumName = oData.name : albumName = "This album doesn't have name"
                $("#selectAlbum").removeClass('hidden')
                $('.list-albums').removeClass('hidden')
                $('.list-albums').html('<option disabled selected>Select an album</option>' + htmlSelect)


            })

            .fail(function() {
                alert("Something has failed when you were trying to get the albums about this artist")
            })



        //ahora que tenemos el nombre del album que hemos seleccionado, lo aprovechamos 
        //y hacemos lo mismo para sacar los tracks
        $('.list-albums').on('change', function(album) {
            var albumName = $(this).val()
            console.log("this album is " + albumName)
            console.log("albumId is ..." + albumId)
            $.ajax({

                    //https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks
                    url: 'https://api.spotify.com/v1/albums/' + albumId + '/tracks',
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })

                .then(function(oData) {

                    var optionsSongs = oData.items.map(function(song) {
                        var songPreview = song.preview_url
                        var songName = song.name
                        //	var trackNumber = song.track_number

                        return '<div><li><a value="' + songName + '" id="' + songPreview + '">' + songName + '</a></li></div>'
                        console.log(optionsSongs)
                        //  console.log("optionsTracks es... " + optionsTracks)
                        //oData.hasOwnProperty('tracks')
                    })
                    console.log("optionsSongs es... " + optionsSongs)

                    //Convertimos los elementos de song de array a string
                    htmlSelect = optionsSongs.join('')
                    $('#listSongs').removeClass('hidden')
                    $('#songPreview').html(htmlSelect)

                })

        })

    })

});
*/