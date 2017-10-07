//He mirado como se hace aquí http://api.jquery.com/jquery.getjson/
//https://www.w3schools.com/jquery/html_attr.asp
const url = "youtube.json";
console.log(url)

$.getJSON(url)
    .done(function(data) {
        console.log("success");

        //Seleccionamos la id title y le aplicamos el metodo text()
        //data del parametro data que pasamos, el otro data del primer elemento del objeto, 
        //accedemos a items, que contiene un array de objetos y como el title está dentro del primer objeto del array, será el 0 
        $("#title").text(data.data.items[0].title);

        //attr (atribute) nos permite decir donde poner lo que extraigamos del json.
        //(en este caso un anchor y un src∫)
        $("a").attr("href", data.data.items[0].player.default);
        $("img").attr("src", data.data.items[0].thumbnail.hqDefault);
    })

    .fail(function() {
        console.log("fail")
    });