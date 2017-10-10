<h1>Spotify APP</h1>

Crea una app que:

.Nos permita buscar por artista.
.Debería mostrar una lista de artistas encontrados
.Cuando clickemos a un artista, debería mostrar una lista de albums
.Cuando clickemos un album, debería mostrar una lista de tracks.
.Cuando clickemos un track, este debería reproducir un preview de la canción (30")

Resources:

-https://developer.spotify.com/web-api/
-https://developer.spotify.com/web-api/search-item/
-https://developer.spotify.com/web-api/get-artists-albums/
-https://developer.spotify.com/web-api/get-albums-tracks/

Hints:

```
    dataType: "json"
    https://api.spotify.com/v1/search?type=artist&query=<ARTIST-NAME>
    https://api.spotify.com/v1/artists/<ID-ARTIST>/albums
    https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks

```


[`La api de Spotify requiere access token`](https://developer.spotify.com/news-stories/2017/01/27/removing-unauthenticated-calls-to-the-web-api/)