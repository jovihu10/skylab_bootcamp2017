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
<br>


**<a href="https://www.w3schools.com/jsref/jsref_tostring_number.asp">.toString()</a>**

Convierte un número a string
```
var num = 15;
var n = num.toString();

// n="15" 
```




**<a href="https://www.w3schools.com/jsref/jsref_length_array.asp">.length</a>**
 
```
calcula el número de elementos de un array

var vocales = ["a", "e", "i", "o", "u"];
var numeroVocales = vocales.length; // numeroVocales = 5
```


**<a href="https://www.w3schools.com/jsref/jsref_concat_array.asp">.concat()</a>**



se emplea para concatenar los elementos de varios arrays
```
var array1 = [1, 2, 3];
array2 = array1.concat(4, 5, 6);   // array2 = [1, 2, 3, 4, 5, 6]
array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6]
```

**<a href="https://www.w3schools.com/jsref/jsref_join.asp">.join()</a>**

Para unir. Es la función contraria a split(). Une todos los elementos de un array para formar una cadena de texto. Para unir los elementos se utiliza el carácter separador indicado
```
var array = ["hola", "mundo"];
var mensaje = array.join(""); // mensaje = "holamundo"
mensaje = array.join(" ");    // mensaje = "hola mundo"
```


**<a href="https://www.w3schools.com/jsref/jsref_pop.asp">.pop()</a>**

Elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.
```
var array = [1, 2, 3];
var ultimo = array.pop();
// ahora array = [1, 2], ultimo = 3
```


**<a href="https://www.w3schools.com/jsref/jsref_push.asp">.push()</a>**
Añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)
```
var array = [1, 2, 3];
array.push(4);
// ahora array = [1, 2, 3, 4]
```

**<a href="https://www.w3schools.com/jsref/jsref_splice.asp">.splice()</a>**

Añade nuevos items y/o elimina en un array. El primer parámetro (2) dice la posición donde los nuevos elementos han de ser añadidos. El segundo parámetro (0) dice cuantos elementos han de ser eliminados. El resto de parámetros ("Lemon" , "Kiwi") dice los elementos que se han de añadir




**<a href="https://www.w3schools.com/jsref/jsref_shift.asp">.shift()</a>**
Elimina el primer elemento del array y lo devuelve. El array original se ve modificado y su longitud disminuida en 1 elemento.
```
var array = [1, 2, 3];
var primero = array.shift();
// ahora array = [2, 3], primero = 1
```

**<a href="https://www.w3schools.com/jsref/jsref_unshift.asp">.unshift()</a>**

Añade un elemento o más al principio del array. El array original se modifica y aumenta su longitud. 
```
var array = [1, 2, 3];
array.unshift(0);
// ahora array = [0, 1, 2, 3]
```

**<a href="https://www.w3schools.com/jsref/jsref_reverse.asp">.reverse()</a>**
Modifica un array colocando sus elementos en el orden inverso a su posición original:
```
var array = [1, 2, 3];
array.reverse();
// ahora array = [3, 2, 1]
```


**<a href="https://www.w3schools.com/js/js_objects.asp">OBJETOS</a>**
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


En JSON siempre se usan comillas dobles




