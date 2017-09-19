$('form').submit(function() {

    //El trim es por si pones espacios vacios que te los quite
    var searching = $('input').val().trim();


    //Hacemos un if para si no escribes nada que no ponga nada ni añada un li
    if (searching != '') {
        //El &check es para que aparezca el simbolo de checkeado
        $('ul').append('<li>' + searching + '<a href="#"> &check;</a> </li>')

        $('input').val('');

    }
    return false;

});

