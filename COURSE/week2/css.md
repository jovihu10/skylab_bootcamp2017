<h1>HTML</h1>

**. html5** ➡ ```estructura```

**. css** ➡ ```diseño```

**. js** ➡ ```interactividad, dinamismo```

<a href="http://www.csszengarden.com/">Excelente página para ver ejemplos de diseño de CSS</a>





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

**!important** ➡ para forzar en css

**General Sibling Selector** ➡   h2 ~ p {...} ----- para seleccionar todos los elementos que vienen del mismo padre

**Adjacent Sibling Selector** ➡ h2 + p {...} ----Para seleccionar elementos que vienen después del elemento prioritario, en el cual ambos elementos comparten padre

**Attribute Contains Selector** ➡ a[href*="login"] {...}
**Attribute Begins With Selector** ➡ a[href^="https://"] {...}
**Attribute Ends With Selector** ➡ a[href$=".pdf"] {...}




**Link Pseudo-classes**
Define si un link ha sido visitado o no 
```
a:link {...}
a:visited {...}
```


**<a href="https://www.w3schools.com/cssref/sel_firstchild.asp">:first-child</a>**


 <a href="https://www.w3schools.com/cssref/sel_last-child.asp">:last-child</a> 

  :only-child**


  border-collapse y border-spacing en CSS
vertical-align para alinear verticalmente
:last-child


The first structural and position based pseudo-classes one is likely to come across are the :first-child, :last-child, and :only-child pseudo-classes. The :first-child pseudo-class will select an element if it’s the first child within its parent, while the :last-child pseudo-class will select an element if it’s the last element within its parent. These pseudo-classes are prefect for selecting the first or last items in a list and so forth. Additionally, the :only-child will select an element if it is the only element within a parent. Alternately, the :only-child pseudo-class could be written as :first-child:last-child, however :only-child holds a lower specificity.

Here the selector li:first-child identifies the first list item within a list, while the selector li:last-child identifies the last list item within a list, thus lines 2 and 10 are selected. The selector div:only-child is looking for a division which is the single child of a parent element, without any other other siblings. In this case line 4 is selected as it is the only division within the specific list item.




**:first-of-type, :last-of-type, & :only-of-type**
irst-of-type---->el primero de tipo tal. Por ejemplo el primero de tipo p




:nth-child(n), :nth-last-child(n), :nth-of-type(n), and :nth-last-of-type(n)
Target Pseudo-class---> :target Para si una id tiene dentro una palabra en concreto,que actúe el css



:before and :after generated content ----> para que haga algo antes o después de tal elemento. Por ejemplo, tenemos una lista y queremos que ponga una estrellita antes de empezar la lista 

box-sizing: border-box; ---->Quita los márgenes
box-sizing: content-box;----> elimina border, padding y margin
box-sizing: initial;----->le da a la propiedad los valores iniciales(resetea)
box-sizing: inherit;----->hereda las propiedades del elemento padre


clear:both --->para limpiar lo que hay en izq y derecha (solo limpia lo que son los float)
position: absolute----> se moverán todas las div en función del padre junto a él
<-index: marca que capa quedará por delante
box-shadow--> para poner sombra
opacity---->transparencia
___________

**Length**


**MEDIA QUERIES**
Si uso @media screen and (max-width: 479px) sólo afectará a pantallas.
Si uso @media all and (max-width: 479px) afectará a todo


@media all and (min-width: 320px) and (max-width: 780px) {...}
@media all and (orientation: landscape) {...}
@media all and (orientation: portrait) {...}
@media all and (min-device-aspect-ratio: 16/9) {...}
@media only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3) {...}


@font-face ---> para poner tipografías de letras externas
text-overflow ----> para decidir hasta donde se verá el texto. Si sobrepasa, se recortará en horizontal
                

