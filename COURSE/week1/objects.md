<h1><a href="https://www.w3schools.com/js/js_objects.asp">OBJETOS</a></h1>

Un **objeto** es como un ```array``, pero con keys (nombre de las propiedades).
Las propiedades de un objeto van separados por coma. El valor de la propiedad va con ":"

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

Cuando una propiedad contiene una función, decimos que esta propiedad es un **método del objeto**

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


Todos los entornos de JS tienen un **global object** y todas las variables globales son propiedades de este objeto global. En el browser, este objeto global es llamado ```window```
 
Entonces, podemos acceder a una variable global **"a"**:

. Como una variable ```a```
. Como una propiedad del objeto global: ```window['a']``` o ```window.a```


Si declaramos una constructor function y la llamamamos sin el ```new```:

. Devolverá ```undefined```
. Todas las propiedades que sean declaradas con ```this``` se convertirán en propiedades de ```window```


```
>>> function Hero(name) { this.name = name; }
>>> var h = Hero('Leonardo');
>>> typeof h
"undefined"
>>> typeof h.name
Uncaught TypeError: Cannot read property 'name' of undefined(…)

>>> name
"Leonardo"
>>> window.name
"Leonardo"

>>> var h2 = new Hero('Michelangelo');
>>> typeof h2
"object"
>>> h2.name
"Michelangelo"
```


Hay maneras de de evitar "este accidente" (no llamar a la función sin el new) como por ejemplo activar el "strict mode". (Te creará una excepción en este caso).

Cuando creamos un objeto, este es siempre asignado a la propiedad constructor que contiene una referencia en la función del constructor usada para crear el objeto

```
>>> h2.constructor
Hero(name)

>>> var h3 = new h2.constructor('Rafaello');
>>> h3.name;
"Rafaello"

>>> var o = {};
>>> o.constructor;
Object()
>>> typeof o.constructor;
"function"
```

Con el operador ```instanceof``` podemos comprobar si un objeto ha sido creado por una específica constructor function

```
>>> function Hero(){}
>>> var h = new Hero();
>>> var o = {};
>>> h instanceof Hero;
true
>>> h instanceof Object;
false
>>> o instanceof Object;
true
```

<h2>Trabajando con Objetos</h2>

Otra manera de crear un  objeto es usando una función que devuelve un objeto

```
function factory(name) {
  return {
    name: name
  };
}
>>> var o = factory('one');
>>> o.name
"one"
>>> o.constructor
Object()
```

Podemos usar constructor functions y devolver objetos diferentes que los del ```this```

```
function factory(name) {
  return {
    name: name
  };
}
>>> var o = factory('one');
>>> o.name
"one"
>>> o.constructor
Object()

```


**new** siempre devolverá un objeto. Por eso  es que si la función del constructor devuelve **algo diferente que un objeto**, la llamada a esa función con ```new``` seguirá devolviendo el más cercano ```this```

<h3>Copiando objetos</h3>

Cuando copiamos un objeto o lo pasamos como parámetro de una función, estamos realmente pasando una referencia a ese objeto. Si hacemos un cambio a esa referencia, también modificaremos el objeto original.

```
>>> var original = { howmany: 1 };
>>> var copy = original;
>>> copy.howmany
1
>>> copy.howmany = 100;
100
>>> original.howmany
100

>>> var nullify = function(o) { o.howmany = 0; }
>>> nullify(copy);
>>> original.howmany
0
```

<h3>Comparando objetos</h3>
Cuando comparamos objetos, solo obtendremos ```true``` si comparamos dos referencias en el mismo objeto

```
>>> var fido = { breed: 'dog' };
>>> var benji = { breed: 'dog' };
>>> benji === fido
false
>>> benji == fido
false
>>> var mydog = benji;
>>> mydog === benji
true
>>> mydog === fido
false
```



