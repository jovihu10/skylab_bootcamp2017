<h1>Spotify APP</h1>

Crea una app que:

.Nos permita buscar por artista.
.Debería mostrar una lista de artistas encontrados
.Cuando clickemos a un artista, debería mostrar una lista de albums
.Cuando clickemos un album, debería mostrar una lista de tracks.
.Cuando clickemos un track, este debería reproducir un preview de la canción (30")

Resources:

- https://developer.spotify.com/web-api/

- https://developer.spotify.com/web-api/search-item/

- https://developer.spotify.com/web-api/get-artists-albums/

- https://developer.spotify.com/web-api/get-albums-tracks/

Hints:

```
    dataType: "json"
    https://api.spotify.com/v1/search?type=artist&query=<ARTIST-NAME>
    https://api.spotify.com/v1/artists/<ID-ARTIST>/albums
    https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks

```

https://github.com/juanmaguitar/exercises-javascript/tree/master/04-jquery-spotify-API

[`La api de Spotify requiere access token`](https://developer.spotify.com/news-stories/2017/01/27/removing-unauthenticated-calls-to-the-web-api/)

</br>

</br>


Para conseguir tu token tienes que:

1- ir a [`My applications`](https://developer.spotify.com/my-applications/#!/) en Spotify Developer

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/spotify-app/img/mis_aplicaciones.jpeg">

2- Login (click **LOGIN**) usando tu usuario o crea uno nuevo si no tienes.

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/spotify-app/img/auth-window.jpeg">

3- [`Ves al sandbox`](https://developer.spotify.com/web-api/console/get-search-item/) y genera un token clickando en **GET AUTH TOKEN**

4- Clicka directamente en **REQUEST TOKEN** (no necesitamos marcar ningún checkbox)

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/spotify-app/img/token-scope.png">

5- Clicka **OK** para conectar a tu cuenta y poder generar el token

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/spotify-app/img/connect-account.png">

6- Copia el OAuth Token generado para usar en tu código Javascript

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/spotify-app/img/oauth-token.png">

7- Con este token puedes hacer la AJAX request añadiendo los headers apropiados así:

```javascript
    // Use your own token (this is just an example)
    var token = 'BQAYEJLwOQoF03BzsUP0dRHaduLOEx-hZgDZOnIYUq_cM59jLN3VHjTsIPgXeCU-geVfQsJeqJS6UCh4jWOgfJaCXXXXXXXXXXXXXXXXXXXXXXXev8ojT3QoT1gBTVSHA2BZoi0vccbyoLp8b'

    $.ajax({
      url: 'https://api.spotify.com/v1/search?type=artist&query=beatles'
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then( function(oData) {
      console.log(oData);
    })



``

