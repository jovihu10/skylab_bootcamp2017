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

<br>
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


<h2>CONSTRUCTOR FUNCTIONS</h2>
Otra manera de construir objetos es con las constructor functions. Para crear objetos con estas funciones, tenemos que usar el operador ```new```. La ventaja que los constructor function tienen es que aceptan parámetros para la creación de objetos


```
function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
  this.whoAreYou = function() {
    return "I'm " + this.name + " and I'm a " + this.occupation;
  }
}

>>> var h1 = new Hero('Michelangelo');
>>> var h2 = new Hero('Donatello');
>>> h1.whoAreYou();
"I'm Michelangelo and I'm a Ninja"
>>> h2.whoAreYou();
"I'm Donatello and I'm a Ninja"
```

##

Todos los entornos de JS tienen un **global object** y todas las variables globales son propiedades de este objeto global. En el browser, este objeto global es llamado ```window```
 
Entonces, podemos acceder a una variable global **"a"**:
    . Como una variable ```a```
    . Como una propiedad del objeto global: ```window['a']``` o ```window.a```

    
