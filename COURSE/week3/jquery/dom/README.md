<h1>BOM (Browser Object Model)</h1>

`Es formado por todos los objetos que están fuera del archivo cargado y son parte del objeto window`

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/img/bom.png">

<a href="https://www.w3.org/DOM/"><h2>DOM (Document Object Model)</h2></a>

Es una manera de representar el archivo html como un árbol de nodos.
Usando los métodos del DOM y sus propiedades, podemos acceder a los elementos de la página, modificarlos, eliminarlos o añadir nuevos

```
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

```
<body>
    <p class="opener">first paragraph</p>
    <p><em>second</em> paragraph</p>
    <p id="closer">final</p>
    <!-- and that's about it -->
</body>
```

. El <a href="https://developer.mozilla.org/en-US/docs/Web/API/document">documento</a> node nos da acceso al documento (el punto de partida)

. Todos los nodos tienen las siguientes propiedades:

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType">nodeType</a>: Hay 13 tipos de nodos representados por números (1=element, 22=attribute, 3=text...)
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName">nodeName</a>: Para las etiquetas HTML es el nombre de la etiqueta, y para los nodos de texto es #text
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue">nodeValue</a>: Para nodos de texto, será el texto.

. El nodo <strong>documentElement</strong> es el <strong>nodo raíz</strong>. Para `documentos HTML` es la etiqueta `<html>`

```
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
    
  - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes">hasChildNodes()</a> :Este método nos devolverá <strong>true</strong> si el nodo tiene hijos nodo.
  
  - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes">childNodes</a>: Devolverá un array de todos los nodos hijo de un elemento. Al ser un <strong>array</strong>, podemos saber el número de hijos nodo con `childNodes.length`
  
  - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode">parentNode</a>: Nos devolverá el `nodo padre` de un hijo nodo.

```
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
  .<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element.hasAttributes()">hasAttributes()</a>: Devuelve true si el elemento tiene atributos.

  .<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute">getAttribute</a> : Devuelve el contenido de un atributo.

  ```
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

   - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent">TextContent</a>: Esta propiedad nos da el texto plano que hay dentro de una etiqueta. En **Internet Explorer** esta propiedad no existe (hemos de usar innerText).

   - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML">innerHTML</a>: Esta propiedad nos da el **contenido del html** qque hay dentro de una etiqueta.

```
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
<ul>
  <li><a href="https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp">`getElementsByTagName()`</a> Devuelve un array con todos los elementos al pasar la etiqueta como parámetro</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName">`getElementsByName()`</a>: Devuelve un <strong>array</strong> con todos los elementos al pasar el <strong>nombre</strong> como parámetro.</li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById">`getElementById()`</a>: Devuelve un elemento al pasar la ID como parámetro</li>
</ul>

```
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
<ul>
  <li>[`nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling): Devuelve el siguiente hermano</li>
  <li>[`previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling): Devuelve el hermano previo</li>
  <li>[`firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild): Devuelve el primer hijo</li>
  <li>[`lastChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild): Devuelve el último hijo</li>
</ul> 

```
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

<h2>[Modificando los nodos]</h2> (https://www.elated.com/articles/changing-page-elements-with-the-dom/)

. Para cambiar el contenido de una etiqueta, `podemos cambiar el contenido de innerHTML

```
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

```
>>> my.style.border = "1px solid red";
"1px solid red"
```

. También podemos modificar atributos, tanto si existen como si no

```
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

```
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

. También podemos copiar elementos existentes con [`cloneNode()](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

- http://learn.jquery.com/using-jquery-core/selecting-elements/

- http://learn.jquery.com/using-jquery-core/

- http://learn.jquery.com/using-jquery-core/manipulating-elements/

- http://learn.jquery.com/using-jquery-core/utility-methods/

- http://learn.jquery.com/using-jquery-core/iterating/


