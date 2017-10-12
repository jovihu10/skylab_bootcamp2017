//https://developer.spotify.com/web-api/console/get-search-item/
console.log("receiving")
var token = 'BQC3pxbEfZ8M0TBhPUkbJ0f6WtJaot38mafW2ErlCA34tnyDdzdM6tH6GE2RHP1tmLvEOxLmr1FBoqVBN_Sl7hLieHu7J4jhMTwenlPWMkgSBFqUk8Wy-WrlV2gW_OYhah6uSvMo'

$("#submit").on('click', function(event) {

    event.preventDefault()


    //Esta variable es para almacenar lo que pongamos en el input
    var inputArtist = $('#inputArtist').val();
    console.log(inputArtist)



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
            $('.list-artists').html(htmlSelect)


        })
        .fail(function() {
            console.log("something has failed")
        })


    //Ahora que nos hace la búsqueda, si clickamos a un artista nos devuelve su id
    $('.list-artists').on('change', function() {
        var idArtist = $(this).val()
        console.log(idArtist)

        $.ajax({
        	url: 'https://api.spotify.com/v1/artists/' + idArtist + '/albums',
        })

        .then(function(albumData){

        	console.log(albumData)
        	var artistImage
            var artistName
            var artistTitle
            var albumName
            //El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
            //En este caso lo vamos a usar para comprobar la existencia de una propiedad, y si la tiene, que me lo introduzca (es un if else muy abreviado)
	        //Si tiene imagenes, la artistImage será esto, sino este a href

	        oData.hasOwnProperty('name') ? albumName = albumData.items.name : albumName = "this album doesn't have name"
	        console.log(albumName)
	       // var innerHtmlImg = '<img class="img-responsive" src="' + artistImage + '">'
        	$("#albumName").html(albumName)

        })

        .fail(function(){
        	console.log("Something has failed when you were trying to get the albums about this artist")
        })




    })




    /*
        

            oData.hasOwnProperty('artists') ? artistName = oData.artists.name : artistName = 'there are not artists with this search'
            console.log(artistName)
            alert(artistName)
*/



});