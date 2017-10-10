<h1>Beers App</h1>

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/beers-app/img/screen.jpg">

Crea una app con jQuery y Bootstrap que lea el valor entrado por el usuario en un input y usa este valor para buscar las cervezas que encajan con la consulta usando la siguiente URL.

```
https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>
```

Por ejemplo, para `mahou` podemos usar la siguiente URL (AJAX request) para conseguir una lista de cervezas que encajan con este valor

```
https://quiet-inlet-67115.herokuapp.com/api/search/all?q=mahou
```

Cada resultado (beer) tiene una id.

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/beers-app/img/json-beers.png">

Podemos usar esta ID para conseguir más infor sobre cervezas usando esta otra URL (AJAX request)

```
https://quiet-inlet-67115.herokuapp.com/api/beer/<%ID-BEER%>
```

Por ejemplo, para la beer con ID `iT9pf4`, podemos conseguir más info sobre esta cerveza iendo a 

```
https://quiet-inlet-67115.herokuapp.com/api/beer/iT9pf4
```

El diseño de la app depende de ti (pero debería ser UX-friendly) y el usuario debería ser capaz (de alguna manera) de buscar cervezas, obteniendo una lista de resultados y luego obteniendo más información sobre cada cerveza clickando sobre ellas. 
