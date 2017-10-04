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

<li><a href="https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp">getElementsByTagName()</a></li>

<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName">getElementsByName()</a>: Devuelve un **array** con todos los elementos con el **nombre** pasado como parámetro.</li>
</ul>

 
- http://learn.jquery.com/using-jquery-core/selecting-elements/

- http://learn.jquery.com/using-jquery-core/

- http://learn.jquery.com/using-jquery-core/manipulating-elements/

- http://learn.jquery.com/using-jquery-core/utility-methods/

- http://learn.jquery.com/using-jquery-core/iterating/


