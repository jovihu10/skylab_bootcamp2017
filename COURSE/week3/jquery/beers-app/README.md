<h1>Beers App</h1>

Crea una app con jQuery y Bootstrap que lea el valor entrado por el usuario en un input y usa este valor para buscar las cervezas que encajan con la consulta usando la siguiente URL.

```
https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>
```

Por ejemplo, para `mahou` podemos usar la siguiente URL (AJAX request) para conseguir una lista de cervezas que encajan con este valor

```
https://quiet-inlet-67115.herokuapp.com/api/search/all?q=mahou
```

Cada resultado (beer) tiene una id.