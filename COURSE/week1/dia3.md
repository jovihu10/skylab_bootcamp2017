**CONCATENAR**
```
+= ➡ tanto para strings como arrays
var1.concat(var2)
```


**HEXADECIMAL**
```
0...9ABC... F
0...9,10,11..15
A partir de F es el num 15
```



**BINARIO**
```
  1  2  3  4   5   6   7
0 1 10 11 100 101 110 111
```






**<a href="https://www.w3schools.com/js/js_array_methods.asp">3.5.2. Métodos útiles para arrays</a>**


A continuación se muestran algunas de las funciones más útiles para el manejo de arrays:

length, calcula el número de elementos de un array

var vocales = ["a", "e", "i", "o", "u"];
var numeroVocales = vocales.length; // numeroVocales = 5
concat(), se emplea para concatenar los elementos de varios arrays

var array1 = [1, 2, 3];
array2 = array1.concat(4, 5, 6);   // array2 = [1, 2, 3, 4, 5, 6]
array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6]
join(separador), es la función contraria a split(). Une todos los elementos de un array para formar una cadena de texto. Para unir los elementos se utiliza el carácter separador indicado

var array = ["hola", "mundo"];
var mensaje = array.join(""); // mensaje = "holamundo"
mensaje = array.join(" ");    // mensaje = "hola mundo"
pop(), elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.

var array = [1, 2, 3];
var ultimo = array.pop();
// ahora array = [1, 2], ultimo = 3
push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)

var array = [1, 2, 3];
array.push(4);
// ahora array = [1, 2, 3, 4]
shift(), elimina el primer elemento del array y lo devuelve. El array original se ve modificado y su longitud disminuida en 1 elemento.

var array = [1, 2, 3];
var primero = array.shift();
// ahora array = [2, 3], primero = 1
unshift(), añade un elemento al principio del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)

var array = [1, 2, 3];
array.unshift(0);
// ahora array = [0, 1, 2, 3]
reverse(), modifica un array colocando sus elementos en el orden inverso a su posición original:

var array = [1, 2, 3];
array.reverse();
// ahora array = [3, 2, 1]







**OBJETOS**
var hero = {
  breed: 'Turtle',
  occupation: 'Ninja'
};
An objeto is like an array but where we define the indexes To define an object we use the braces {} ( object literal notation )
The elements of an object ( properties ) are separated by commas
The pair key/value is splitted by 2 dots

The keys (names of the properties) can go between quotes, but is not recommended define them in this way

var o = {prop: 1};
var o = {"prop": 1};
var o = {'prop': 1};
When a property contains a function, we say this property is a method of the object

var dog = {
  name: 'Benji',
  talk: function(){
    alert('Woof, woof!');
  } 
};




En JSON siempre se usan comillas dobles




