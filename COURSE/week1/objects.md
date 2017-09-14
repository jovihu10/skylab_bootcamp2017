<h1><a href="https://www.w3schools.com/js/js_objects.asp">OBJETOS</a></h1>

Un objeto es como un array, pero con keys (nombre de las propiedades).
Las propiedades de un objeto van separados por coma. El valor de la propiedad va con :

```
var hero = {
  breed: 'Turtle',
  occupation: 'Ninja'
};
```


Las keys pueden ir entre comillas, pero no es recomendable definirlo de esta manera.

```
var o = {prop: 1};
var o = {"prop": 1};
var o = {'prop': 1};
```

Cuando una propiedad contiene una función, decimos que esta propiedad es un método del objeto

```
var dog = {
  name: 'Benji',
  talk: function(){
    alert('Woof, woof!');
  } 
};
```


En **JSON** siempre se usan comillas dobles.

##

➡➡➡ Hay dos maneras de acceder a las propiedades  de un objeto:
    . Con las brackets notation: ```hero[ocupation]```
    . Con la dots notation: ```hero.ocupation```

Los objetos pueden <strong>contener otros objetos </strong>

```
var book = {
  name: 'Catch-22',
  published: 1961,
  author: {
    firstname: 'Joseph',
    lastname: 'Heller'
  }
};
>>> book.author.firstname
"Joseph"
>>> book['author']['lastname']
"Heller"
>>> book.author['lastname']
"Heller"
>>> book['author'].lastname
"Heller"
```

Podemos definir un **objeto vacío** y luego **añadir (y eliminar) sus propiedades y métodos**

```
>>> var hero = {};
>>> typeof hero.breed
"undefined"
>>> hero.breed = 'turtle';
>>> hero.name = 'Leonardo';
>>> hero.sayName = function() {return hero.name;};
>>> hero.sayName();
"Leonardo"
>>> delete hero.name;
true
>>> hero.sayName();
reference to undefined property hero.name
```

Cuando estamos dentro de un method, la palabra especial **this**, apunta al objeto que posee el método ( “this object” )

```
var hero = {
  name: 'Rafaelo',
  sayName: function() {
    return this.name;
  }
}
>>> hero.sayName();
"Rafaelo"
```



 
