<h1>AJAX (Asynchronous JavaScript And XML)</h1>

<a href="https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/14-AJAX">SLIDES</a>



Realizar peticiones al servidor y esperar respuesta **puede consumir tiempo** (el tiempo necesario para recargar una página completa). **Para agilizar los desarrollos web surgió Ajax**, una tecnología que **busca evitar las demoras propias de las peticiones** y respuestas del servidor mediante la transmisión de datos en segundo plano usando un protocolo específicamente diseñado para la ```transmisión rápida de pequeños paquetes de datos```.

```
Con Ajax, se hace posible <strong>realizar peticiones al servidor y obtener respuesta 

de este en segundo plano</strong> (sin necesidad de recargar la página web completa) y 

usar esos datos para, a través de JavaScript, modificar los contenidos de la 

página creando efectos dinámicos y rápidos.
```

En el esquema anterior vemos las ideas en torno a Ajax de forma gráfica. En la parte superior hemos representado lo que sería **un esquema de comunicación tradicional:** ```el cliente solicita una página web completa al servidor. El servidor recibe la petición, se toma su tiempo para preparar la respuesta y la envía.``` El resultado, **una pequeña demora debido al tiempo que tarda en llegar la petición al servidor**, el tiempo que éste tarda en preparar la respuesta, y el tiempo que tarda en llegar la respuesta más recargarse en el navegador.



<img src="https://www.aprenderaprogramar.com/images/stories/Cursos/CU011/CU01193E_1.png">

En la parte inferior vemos lo que sería **un esquema de comunicación usando Ajax:** ```el cliente tiene una página web cargada (puede ser una página web completa, o sólo el esqueleto de una página web). El cliente sigue trabajando y en segundo plano (de ahí que hayamos dibujado con líneas punteadas las comunicaciones) le dice al servidor que le envíe un paquete de datos que le hacen falta. El servidor procesa la petición.``` **Ahora la respuesta es mucho más rápida: no tiene que elaborar una página web completa, sino sólo preparar un paquete de datos.** Por tanto **el tiempo de respuesta es más rápido**. El servidor envía el paquete de datos al cliente y el cliente los usa para cambiar los contenidos que se estaban mostrando en la página web.

<h2>VENTAJAS DE USAR AJAX</h2>

```
a) No es necesario recargar y redibujar la página web completa, con lo que todo es más rápido.

b) El usuario no percibe que haya demoras: está trabajando y al ser las 
comunicaciones en segundo plano no hay interrupciones.

c) Los pasos que antes podía ser necesario dar cargando varias páginas web pueden quedar condensados en 

una sola página que va cambiando gracias a Ajax y a la información recibida del servidor.
```


<h2>INCONVENIENTES</h2>

```
a) El usuario puede perder la capacidad para hacer cosas que hacía con webs 

tradicionales puesto que no hay cambio de página web. Por ejemplo usar los 

botones de avance y retroceso del navegador o añadir una página a favoritos 

puede dejar de ser posible. Esto en algunos casos no es deseable.


b) El desarrollo de aplicaciones web se puede volver más complejo. Supongamos 

que antes tuviéramos un proceso en el que avanzábamos a través de varias 

páginas web como 1, 2, 3. De este modo la organización resulta sencilla. Si 

condensamos todo en una sola página web: 1, escribir y depurar el código puede 

volverse más complicado. En sitios complejos, puede ser muy difícil depurar errores.


c) Existen problemas y restricciones de seguridad relacionados con el uso de 

Ajax. Hay que tener en cuenta que por motivos de seguridad no todos los 

procesos se pueden realizar del lado del cliente (que por su propia naturaleza 

es “manipulable”). También existen restricciones de seguridad para impedir la 

carga de contenidos mediante Ajax desde sitios de terceras partes.


d) La indexación para los motores de búsqueda se ve dificultada, con lo cual 

nuestros sitios web pueden perder visibilidad en los buscadores. No es lo 

mismo un contenido “constante” o aproximadamente estático, fácilmente 

rastreable para un buscador, que un contenido “cambiante” en función de la 

ejecución de JavaScript, difícilmente rastreable para un buscador.

```