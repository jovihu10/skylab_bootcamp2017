//https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>

//quizás cargarlo todo en una variable que contenga todo esto en una funcion 
$("#submit").on('click', function(event) {
    event.preventDefault()
    //Esta variable es para almacenar lo que pongamos en el input. El método será siempre igual
    var inputBeer = $("#inputBeer").val()

    $.ajax({
            //al loro. url va con :!!!
            url: 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + inputBeer

        })


        //El .then  añade  handlers para ser llamados cuando el objeto aplazado es resuelto resolved, denegado o todavía en progreso

        .then(function(beerData) {

            //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
            var optionsBeer = beerData.map(function(beer) {
                //Ir con cuidado con las comillas
                return '<option value="' + beer.id + '">' + beer.name + '</option>'

            })

            //Hacemos que esta id esté oculta con la class hidden y solo visible cuando clickemos
            $('.content').removeClass('hidden')
            $('#list-beers').removeClass('hidden')

            //almacenamos las opciones de cervezas y las juntamos con el método join
            htmlSelect = optionsBeer.join('')
            $('#list-beers').html(htmlSelect)
        })
    //Ahora tenemos una selección de cervezas
    //Como queremos ajuntarlas en un select, para seleccionar sólo una, hacemos el metodo .on()
    //https://api.jquery.com/on/

    //Ahora que nos hace la búsqueda, si clickamos a una beer nos devuelve su id
    $('#list-beers').on('change', function(event) {
        var idBeer = $(this).val()
        console.log(idBeer)

        $.ajax({
                url: 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
            })

            .then(function(beerData) {
                var beerImage
                var beerName
                var beerDescription
                //El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.
                //En este caso lo vamos a usar para comprobar la existencia de una propiedad, y si la tiene, que me lo introduzca (es un if else muy abreviado)

                //Si tiene imagenes, la beerImage será esto, sino este a href
                beerData.hasOwnProperty('labels') ? beerImage = beerData.labels.medium : beerImage = 'https://svoriginal.com/2192-thickbox_default/jarra-cerveza-lets-rock.jpg'
                beerData.hasOwnProperty('name') ? beerName = beerData.name : beerName = 'Unknown beer'
                beerData.hasOwnProperty('description') ? beerDescription = beerData.description : beerDescription = "At the moment we don't have a description for this beer"
                console.log(beerName)
                console.log(beerImage)
                console.log(beerDescription)
                //convertimos a las variables en html con innerHTML
                //Mucho ojo con las comillas, que es lo que me ha dado más quebraderos de cabeza!!
                var innerHtmlImg = '<img class="img-responsive" src="' + beerImage + '">'

                $("#beerTitle").html(beerName);
                $("#beerDescription").html(beerDescription);
                //https://stackoverflow.com/questions/18308876/jquery-how-to-dynamically-show-image-using-the-value-of-input-type-file-f/18309091
                $("#beerImage").html(innerHtmlImg)


            })

    })

})