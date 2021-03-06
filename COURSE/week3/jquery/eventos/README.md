<h1>Eventos</h1>

<h6>http://www.quirksmode.org/js/introevents.html</h6>
<h6>http://www.sprymedia.co.uk/article/Visual+Event</h6>

- Cada acción (click, change..) que sucede en el navegador es comunicado(a quien lo quiere recibir) como un `evento`. Desde Javascript podemos escuchar esos eventos y **asociarlos a una función** (incluso un handler), que será ejecutado cuando el evento sucede.

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/eventos/img/events.png">

- Cuando clickamos a un link ( `a` ), también hacemos click en su contenedor ( `li`, `ul` ), en el `body` y finalmente en el documento. Ésto es lo que es llamado **propagación de evento**

<div id="capturando-eventos"><h2>Capturando eventos</h2></div>

<h6>http://ejohn.org/projects/flexible-javascript-events/</h6>

<h6>http://www.webmonkey.com/2010/02/javascript_events/</h6>

<h6>http://www.elated.com/articles/events-and-event-handlers/</h6>

<h6>http://www.anieto2k.com/2006/10/16/gestion-de-eventos-en-javascript/</h6>

```js
function callback(evt) {
        // prep work
        evt = evt || window.event;
        var target = (typeof evt.target !== 'undefined') ? evt.target :
        evt.srcElement;
        // actual callback work
        console.log(target.nodeName);
    }
    
    // start listening for click events
    if (document.addEventListener){ // FF
        document.addEventListener('click', callback, false);
    } else if (document.attachEvent){ // IE
        document.attachEvent('onclick', callback);
    } else {
        document.onclick = callback;
    }
```

- Podemos capturar eventos de la [manera tradicional](https://www.quirksmode.org/js/events_tradmod.html)

Este modelo consiste en **asignar una función a la propiedad onclick**, onchange,... del elemento del DOM. Con este método podemos asignar `SÓLO UNA FUNCIÓN a cada elemento. 

Este método **funciona igual** en todos los **navegadores**.


- También podemos capturar eventos con el [modelo avanzado](https://www.quirksmode.org/js/events_advanced.html)
    
Con este método, podemos asignar muchas funciones al mismo evento.

Para linkar/deslinkar una función a un evento con este modelo, podemos usar:

[`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) y [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener)


Pasamos 2 parámetros:

1. Tipo de evento: `click`, `change`,...

2. Función a ejecutar(handler, callback): Recibe un objeto `e` con información sobre el evento.
    . En `e.target` tenemos el [elemento que dispara el evento](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event)

El [`soporte a addEventListener](http://caniuse.com/#feat=addeventlistener) es bastante extendido en todos los navegadores más populares, y por ello su `uso es altamente recomendado`

<div id="parando-flujo-eventos"><h2>Parando el flujo de los eventos</h2></div>

- Algunos elementos tienen un `comportamiento por defecto` (por ejemplo cuando clickamos un link, la página carga su URL).

Esta acción por defecto es ejecutada al final de la cola ,como última acción delevento (si tenemos otras funciones asignadas al evento)
Para desactivar la acción por defecto, podemos usar el método [`e.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

- Podemos parar la [propagación del evento](https://developer.mozilla.org/en/Gecko_DOM_Reference/Examples#Example_5:_Event_Propagation) con este método [`e.stopPropagation()`](https://developer.mozilla.org/en/DOM/event.stopPropagation)

- Cuando [`la función asignada al evento devuelve`](http://stackoverflow.com/questions/1357118/javascript-event-preventdefault-vs-return-false) `false`, los métodos [`e.preventDefault()`] y `e.stopPropagation()` son aplicados automáticamente.

</br>

<div id="delegacion-eventos"><h2>Delegación de eventos</h2></div>

<h6>http://blogs.sitepoint.com/javascript-event-delegation-is-easier-than-you-think/</h6>
<h6>http://lab.distilldesign.com/event-delegation/</h6>

- Hablando de la ventaja de la propagación de eventos y la detección del target_ , podemos optimizar (en algunos casos) nuestro control de eventos con el **event s delegation**.

- Para los casos que tenemos que capturar los eventos de muchos elementos (por ejemplo, los clicks en una table), podemos capturar el evento del container (el table) y detectar cual de sus hijos (qué celda) activó el evento.

- Las principales ventajas de este sistema son:

    - Muchas menos definiciones de eventos. Menos espacio de memoria y mejor eficiencia.

    - No necesidad de volver a capturar eventos para los elementos que han sido añadidos dinámicamente. 


<div id="eventos-jquery"><h2>Eventos de jQuery</h2></div>

<h6>http://api.jquery.com/category/events/</h6>

<h6>http://jqfundamentals.com/book/index.html#chapter-5</h6>

- Con jQuery podemos hacer manejo de eventos sin preocuparnos sobre las diferencias de cada browser.
    - [`$().on()`](http://api.jquery.com/on) y [`$().off()`](http://api.jquery.com/off/): con los métodos `addEventListener` / `removeEventListener`

    ```
    .on( events [, selector ] [, data ], handler )
    .off( events [, selector ] [, handler ] )
    ```

    - El handler(manipulador) recibe un [`evento`](http://api.jquery.com/category/events/event-object/) objeto exclusivo de jQuery.
    - los tipos de evento que podemos capturar son: `blur`, `focus`, `focusin`, `focusout`, `load`, `resize`, `scroll`, `unload`, `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mousemove`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`, `change`, `select`, `submit`, `keydown`, `keypress`, `keyup`, `error`
    - También podemos crear [nuestro propio tipo de evento](http://api.jquery.com/category/events/event-object/)
- [`$().trigger()`](http://api.jquery.com/trigger): Nos permit ejecutar todos los handlers asociados a un evento.

```
    .trigger( eventType, extraParameters )
```

- [`$().toggle()`](http://api.jquery.com/toggle-event/): Adjunta muchas funciones a un elemento que será ejecutado en muchos clicks

```
    .toggle( handler(eventObject), handler(eventObject), [ handler(eventObject) ] ) 
```

- [`event.preventDefault()`](http://api.jquery.com/event.preventDefault/):el cross-browsing `e.preventDefault`
- [`event.stopPropagation()`](http://api.jquery.com/event.stopPropagation/): el cross-browsing `e.stopPropagation`
- [`event.stopImmediatePropagation()`](http://api.jquery.com/event.stopImmediatePropagation/): Además de hacer cross-browsing, `e.stopPropagation` para el resto de handlers asociados al mismo evento.
- [`event.target`](http://api.jquery.com/event.target/): El cross-browsing `e.target` (elemento que ha activado el evento)
- [`event.type`](http://api.jquery.com/event.type/): El tipo de evento iniciado


