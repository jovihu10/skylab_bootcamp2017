
**REGULAR EXPRESSIONS**

Siempre usaremos para esto el método .test


**<a href="https://scotch.io/tutorials/understanding-hoisting-in-javascript">HOISTING</a>**

En Javascript una variable puede ser declarada después de ser usada. Haciéndolo así, una variable siempre será global

Ejemplo 1
```
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```

Ejemplo 2
```
var v = 1;
function fun() {
    console.log(v);
    v = 5;
    console.log(v);
    var v;
}

fun();
```





**PROTOTYPE**

Array.prototype.random = function random() {
    return this[Math.floor(Math.random() * this.length)];
}

function randomArg() {
     return Array.prototype.random.call(arguments);
}







// clean prototyping

function Animal(type, name) {
    this.setType(type);
    this.setName(name);
}
Animal.prototype.setType = function(type) {
    this._type = type;
};
Animal.prototype.getType = function() {
    return this._type;
};
Animal.prototype.setName = function(name) {
    this._name = name;
};
Animal.prototype.getName = function() {
    return this._name;
};
Animal.prototype.heal = function() {
    console.log('healing...');
};

**Closures**










**typeof**
Te dice si un item es un numero, un string o qué es


**Math.max(...arr);**
Si hacemos esto, nos recorrerá todo un array y nos dirá el item más grande
http://droidscript.org/javascript/Global_Objects/Math/max.html

