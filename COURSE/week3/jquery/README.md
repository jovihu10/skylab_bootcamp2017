<h1>JQUERY</h1>

<h2>BOM (Browser Object Model)</h2>

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

##Accediendo a los nodos

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
    . <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType">nodeType</a>: Hay 13 tipos de nodos representados por números (1=element, 22=attribute, 3=text...)
    . <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName">nodeName</a>: Para las etiquetas HTML es el nombre de la etiqueta, y para los nodos de texto es #text
    .<a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue">nodeValue</a>: Para nodos de texto, será el texto.

. El nodo documentElement es el nodo raíz. Para documentos HTML es la etiqueta <html>

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

. Cada nodo puede tener #nodos hijo:
    . `hasChildNodes() :Este método nos devolverá <strong>true</strong> si el nodo tiene hijos nodo.

 
- http://learn.jquery.com/using-jquery-core/selecting-elements/

- http://learn.jquery.com/using-jquery-core/

- http://learn.jquery.com/using-jquery-core/manipulating-elements/

- http://learn.jquery.com/using-jquery-core/utility-methods/

- http://learn.jquery.com/using-jquery-core/iterating/


