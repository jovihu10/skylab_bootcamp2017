<a href="https://skylabcoders.github.io/bootcamp-julio2017/?full#114">Slides del Bootcamp</a>

<h1>BOM (Browser Object Model)</h1>

`Es formado por todos los objetos que están fuera del archivo cargado y son parte del objeto window`

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/img/bom.png">

<a href="https://www.w3.org/DOM/"><h2>DOM (Document Object Model)</h2></a>

Es una manera de representar el archivo html como un árbol de nodos.
Usando los métodos del DOM y sus propiedades, podemos acceder a los elementos de la página, modificarlos, eliminarlos o añadir nuevos

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/
xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <title>Página sencilla</title>
    </head>
    <body>
        <p>Esta página es <strong>muy sencilla</strong></p>
    </body>
</html>
```

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/img/dom.png">

</br>

<h3>Accediendo a los nodos</h3>

```html
<body>
    <p class="opener">first paragraph</p>
    <p><em>second</em> paragraph</p>
    <p id="closer">final</p>
    <!-- and that's about it -->
</body>
```


. El [`documento`](https://developer.mozilla.org/en-US/docs/Web/API/document) node nos da acceso al documento (el punto de partida)

. Todos los nodos tienen las siguientes propiedades:

- [`nodeType`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType): Hay 13 tipos de nodos representados por números (1=element, 22=attribute, 3=text...)

- [`nodeName`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName): Para las etiquetas HTML es el nombre de la etiqueta, y para los nodos de texto es #text

- [`nodeValue`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue): Para nodos de texto, será el texto.

. El nodo <strong>documentElement</strong> es el <strong>nodo raíz</strong>. Para `documentos HTML` es la etiqueta `<html>`

```javascript
>>> document.documentElement
<html>
>>> document.documentElement.nodeType
1
>>> document.documentElement.nodeName
"HTML"
>>> document.documentElement.tagName
"HTML"
```

. Cada nodo puede tener <strong>nodos hijo:</strong>
    
  - [`hasChildNodes()`] (https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes) :Este método nos devolverá <strong>true</strong> si el nodo tiene hijos nodo.
  
  - [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes): Devolverá un array de todos los nodos hijo de un elemento. Al ser un <strong>array</strong>, podemos saber el número de hijos nodo con `childNodes.length`
  
  - [`parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode): Nos devolverá el `nodo padre` de un hijo nodo.

```javascript
>>> document.documentElement.hasChildNodes()
True
>>> document.documentElement.childNodes.length
2
>>> document.documentElement.childNodes[0]
<head>
>>> document.documentElement.childNodes[1]
<body>
>>> document.documentElement.childNodes[1].parentNode
<html>
>>> var bd = document.documentElement.childNodes[1];
>>> bd.childNodes.length
9
```

.Podemos comprobar la existencia de atributos y acceder a sus atributos.
  .[`hasAttributes()`](https://developer.mozilla.org/en-US/docs/Web/API/Element.hasAttributes()): Devuelve true si el elemento tiene atributos.
  .[`getAttribute`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) : Devuelve el contenido de un atributo.

```html
   >>> bd.childNodes[1]
<p class="opener">
>>> bd.childNodes[1].hasAttributes()
True
>>> bd.childNodes[1].attributes.length
1
>>> bd.childNodes[1].attributes[0].nodeName
"class"
>>> bd.childNodes[1].attributes[0].nodeValue
"opener"
>>> bd.childNodes[1].attributes['class'].nodeValue
"opener"
>>> bd.childNodes[1].getAttribute('class')
"opener"
```


</br>

  . Podemos acceder al contenido de una etiqueta:

   - [`TextContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent): Esta propiedad nos da el texto plano que hay dentro de una etiqueta. En **Internet Explorer** esta propiedad no existe (hemos de usar innerText).

   - [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML): Esta propiedad nos da el **contenido del html** qque hay dentro de una etiqueta.

```javascript
>>> bd.childNodes[1].nodeName
"P"
>>> bg.childNodes[1].textContent
"first paragraph"
>>> bd.childNodes[1].innerHTML
"first paragraph"
>>> bd.childNodes[3].innerHTML
"<em>second</em> paragraph"
>>> bd.childNodes[3].textContent
"second paragraph"
>>> bd.childNodes[1].childNodes.length
1
>>> bd.childNodes[1].childNodes[0].nodeName
"#text"
>>> bd.childNodes[1].childNodes[0].nodeValue
"first paragraph"
```

.Podemos **acceder directamente en algunos elementos** sin la necesidad de repasar todo el árbol de nodos:

.[`getElementsByTagName()`](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp): Devuelve un array con todos los elementos al pasar la etiqueta como parámetro.

.[`getElementsByName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName): Devuelve un <strong>array</strong> con todos los elementos al pasar el <strong>nombre</strong> como parámetro.

.[`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById"): Devuelve un elemento al pasar la ID como parámetro.


```html
>>> document.getElementsByTagName('p').length
3
>>> document.getElementsByTagName('p')[0]
<p class="opener">
>>> document.getElementsByTagName('p')[0].innerHTML
"first paragraph"
>>> document.getElementsByTagName('p')[2]
<p id="closer">
>>> document.getElementsByTagName('p')[2].id
"closer"
>>> document.getElementsByTagName('p')[0].className
"opener"
>>> document.getElementById('closer')
<p id="closer">
```

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/img/parent-child.png">

</br>

. Desde El nodo podemos acceder a sus hermanos y el primero o el último de sus hijos.

-[`nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling): Devuelve el siguiente hermano.
  
-[`previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling): Devuelve el hermano previo.
  
-[`firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild): Devuelve el primer hijo.
  
-[`lastChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild): Devuelve el último hijo.


```javascript
>>> var para = document.getElementById('closer')
>>> para.nextSibling
"\n "
>>> para.previousSibling
"\n "
>>> para.previousSibling.previousSibling
<p>
>>> para.previousSibling.previousSibling.previousSibling
"\n "
>>>
para.previousSibling.previousSibling.nextSibling.nextSibling
<p id="closer">
>>> document.body.previousSibling
<head>
>>> document.body.firstChild
"\n "
>>> document.body.lastChild
"\n "
>>> document.body.lastChild.previousSibling
Comment length=21 nodeName=#comment
>>> document.body.lastChild.previousSibling.nodeValue
" and that's about it "
```

<a href="https://www.elated.com/articles/changing-page-elements-with-the-dom/"> Modificando los nodos</a>

. Para cambiar el contenido de una etiqueta, `podemos cambiar el contenido de innerHTML`

```javascript
>>> var my = document.getElementById('closer');
>>> my.innerHTML = '<em>my</em> final';
>>> my.firstChild
<em>
>>> my.firstChild.firstChild
"my"
>>> my.firstChild.firstChild.nodeValue = 'your';
"your"
```

. Los elementos tienen la propiedad [`style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style), que podemos usar para modificar sus estilos.

https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle

```javascript
>>> my.style.border = "1px solid red";
"1px solid red"
```

. También podemos modificar atributos, tanto si existen como si no

```javascript
>>> my.align = "right";
"right"
>>> my.name
>>> my.name = 'myname';
"myname"
>>> my.id
"closer"
>>> my.id = 'further'
"further"
```

</br>

<h2>Creando y modificando nodos</h2>

. Para crear elementos podemos usar los métodos [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) y [`createTextNode`] (https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)

Una vez han sido creados, podemos añadirlos al `DOM` con [`appendchild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

```javascript
>>> var myp = document.createElement('p');
>>> myp.innerHTML = 'yet another';
"yet another"
>>> myp.style
CSSStyleDeclaration length=0
>>> myp.style.border = '2px dotted blue'
"2px dotted blue"
>>> document.body.appendChild(myp)
<p style="border: 2px dotted blue;">
```

. También podemos copiar elementos existentes con [`cloneNode()``](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode). `cloneNode` acepta uun parámetro boleano (Si es `true`, copia de verdad el nodo con todos sus hijos, y si es `false`, sólo copia el nodo)

```javascript
>>> var el = document.getElementsByTagName('p')[1];
<p><em>second</em> paragraph</p>
>>> document.body.appendChild(el.cloneNode(false))
>>> document.body.appendChild(document.createElement('p'));
>>> document.body.appendChild(el.cloneNode(true))
```

. Con [`insertBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore), podemos especificar el elemento después del cual queremos insertar los nuestros.

```javascript
document.body.insertBefore(
    document.createTextNode('boo!'), 
    document.body.firstChild
);
```

. Para **eliminar** los nodos del DOM podemos usar [`removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) o [`replaceChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild).

`removeChild()` elimina los elementos y `replaceChild()` los reemplaza por otro que ha sido pasado como parámetro.

`replaceChild()` y `removeChild()` devuelven el nodo eliminado.


```javascript
>>> var myp = document.getElementsByTagName('p')[1];
>>> var removed = document.body.removeChild(myp);
>>> removed
<p>
>>> removed.firstChild
<em>
>>> var p = document.getElementsByTagName('p')[1];
>>> p
<p id="closer">
>>> var replaced = document.body.replaceChild(removed, p);
>>> replaced
<p id="closer">
```

<h2>Objetos del DOM sólo para html</h2>

. En el DOM tenemos disponible un conjunto de selectores y colecciones sólo para `html`:

-[`document.body`](https://developer.mozilla.org/en-US/docs/Web/API/Document/body): `document.getElementsByTagName(‘body’)[0]`

-[`document.images`](https://developer.mozilla.org/en-US/docs/Web/API/document/images): `document.getElementsByTagName(‘img’)`

-[`document.applets`](https://developer.mozilla.org/en/DOM/document.applets): `document.getElementsByTagName(‘applet’)`

-[`document.links`](https://developer.mozilla.org/en-US/docs/Web/API/Document/links): Devuelve un array de todos los links con atributo `href`

-[`document.anchors`](https://developer.mozilla.org/en/DOM/document.anchors): Devuelve un array con todos los links con atributo `name`

-[`document.forms`](https://developer.mozilla.org/en/DOM/document.forms): `document.getElementsByTagName('form')`
Podemos acceder a los elementos del formulario(inputs, buttons) con `elements`

```js
>>> document.forms[0]
>>> document.getElementsByTagName('forms')[0]
>>> document.forms[0].elements[0]
>>> document.forms[0].elements[0].value = 'me@example.org'
"me@example.org"
>>> document.forms[0].elements[0].disabled = true;
>>> document.forms[0].elements['search']; // array notation
>>> document.forms[0].elements.search; // object property
```

. Tenemos tambien disponible el método `document.write()` pero su uso no está recomendado ;-)

. Algunas propiedades del objeto del documento son:

-`document.cookies`:Contiene una string de texto con los cookies asociados al documento.

-[`document.title`](https://developer.mozilla.org/en/DOM/document.title): Nos permite cambiar el título de una página que aparece en el browser. 
Esto no cambia el contenido de la etiqueta `title`.

-[`document.referrer`](https://developer.mozilla.org/en/DOM/document.referrer): Contiene la URL con la que accedemos a la página.

-[`document.domain`](https://developer.mozilla.org/en/document.domain):Contiene el dominio de la página.

<h2>Selección avanzada de elementos</h2>

http://mootools.net/slickspeed/

http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier

http://www.quirksmode.org/css/contents.html




- http://learn.jquery.com/using-jquery-core/selecting-elements/

- http://learn.jquery.com/using-jquery-core/

- http://learn.jquery.com/using-jquery-core/manipulating-elements/

- http://learn.jquery.com/using-jquery-core/utility-methods/

- http://learn.jquery.com/using-jquery-core/iterating/


