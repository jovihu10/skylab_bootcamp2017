<h1>HTML</h1>

**. html5** ➡ ```estructura```

**. css** ➡ ```diseño```

**. js** ➡ ```interactividad, dinamismo```







%i18n; = "Internationalitation " en inglés

##


**Head:** ➡ ```soporta scripts type, title``` 

**span:** ➡ ```es lo mismo que una div pero para elementos en linea```


**Para table**
```
<caption>, <thead>, <tbody>, and <tfoot>.
```



------


para validar, poniendo "required":

http://www.the-art-of-web.com/html/html5-form-validation/
ej:Your Name: <input type="text" name="name" required>


placeholder: para el campo dentro del input






<h1>CSS</h1>

**!important** ➡ ```para forzar en css```

**General Sibling Selector** ➡ ```h2 ~ p {...} ----- para seleccionar todos los elementos que vienen del mismo padre```

**Adjacent Sibling Selector** ➡ ```h2 + p {...} ----Para seleccionar elementos que vienen después del elemento prioritario, en el cual ambos elementos comparten padre```

**Attribute Contains Selector** ➡ ```a[href*="login"] {...}```
**Attribute Begins With Selector** ➡ ```a[href^="https://"] {...}```
**Attribute Ends With Selector** ➡ ```a[href$=".pdf"] {...}```




**Link Pseudo-classes**
Define si un link ha sido visitado o no 
```
a:link {...}
a:visited {...}
```


**<a href="https://www.w3schools.com/cssref/sel_firstchild.asp">:first-child</a>**


 <a href="https://www.w3schools.com/cssref/sel_last-child.asp">:last-child</a> 


```:only-child``` ➡ Afectará a cada elemento que sólo es hijo de su padre.


<a href="http://www.csszengarden.com/">Excelente página para ver ejemplos de diseño de CSS</a>



```:first-of-type```➡ el primero de tipo tal. Por ejemplo el primero de tipo p

```:last-of-type``` ➡ El último de tipo tal

```:only-of-type``` ➡ sólo los de tipo tal





```:nth-child(n)``` ➡ El primer hijo de

 ```:nth-last-child(n), :nth-of-type(n), and :nth-last-of-type(n)```
Target Pseudo-class ➡ :target Para si una id tiene dentro una palabra en concreto,que actúe el css



:before and :after generated content ➡ para que haga algo antes o después de tal elemento. Por ejemplo, tenemos una lista y queremos que ponga una estrellita antes de empezar la lista 

```
box-sizing: border-box; ➡ Quita los márgenes
box-sizing: content-box; ➡ elimina border, padding y margin
box-sizing: initial; ➡ le da a la propiedad los valores iniciales(resetea)
box-sizing: inherit; ➡ hereda las propiedades del elemento padre
```

```clear:both``` ➡  para limpiar lo que hay en izq y derecha (solo limpia lo que son los float).

```position: absolute``` ➡ se moverán todas las div en función del padre junto a él.

```z-index``` ➡ marca que capa quedará por delante
```box-shadow``` ➡ para poner sombra
```opacity`` ➡ transparencia
___________

<h2><a href="https://www.w3schools.com/cssref/css_units.asp">Unidades</a></h2>

- Píxels ➡ Sólo lo usaremos para cosas puntuales, como los heights.

- % ➡ Para casi todo, porque hará que se gradue el tamaño en función del tamaño.

-EM ➡ Relativo al tamaño de la fuente (2em significa 2 veces el tamaño de la fuente actual)




```@font-face``` ➡ para poner tipografías de letras externas
```text-overflow``` ➡ para decidir hasta donde se verá el texto. Si sobrepasa, se recortará en horizontal

<h2>LINKS INTERESANTES</h2>

```
- https://webgradients.com/ ➡ Para poner gradientes

- https://glyphicons.com/ ➡ Librería iconos

- http://fontawesome.io/ ➡ Librería iconos

- https://css-tricks.com/ ➡ Colección de trucos. Muy útil.

- https://www.w3schools.com/colors/colors_picker.asp ➡ Todas las gamas de colores en HEX.

- http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF ➡ Para gamas de colores en harmonía.

- https://coolors.co/ ➡ Para crear paletas de colores.
``
