<h1>Eventos</h1>

http://www.quirksmode.org/js/introevents.html
http://www.sprymedia.co.uk/article/Visual+Event

. Cada acción (click, change..) que sucede en el navegador es comunicado(a quien lo quiere recibir) como un `evento`. Desde Javascript podemos escuchar esos eventos y **asociarlos a una función** (incluso un handler), que será ejecutado cuando el evento sucede.

<img src="https://github.com/jovihu10/skylab_bootcamp2017/blob/master/COURSE/week3/jquery/eventos/img/events.png">

. Cuando clickamos a un link ( `a` ), también hacemos click en su contenedor ( `li`, `ul` ), en el `body` y finalmente en el documento. Ésto es lo que es llamado **propagación de evento**

<h2>Capturando eventos</h2>

http://ejohn.org/projects/flexible-javascript-events/

http://www.webmonkey.com/2010/02/javascript_events/

http://www.elated.com/articles/events-and-event-handlers/

http://www.anieto2k.com/2006/10/16/gestion-de-eventos-en-javascript/

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

. Podemos capturar eventos de la [manera tradicional](https://www.quirksmode.org/js/events_tradmod.html)

    Este modelo consiste en asignar una función a la propiedad onclick, onchange,... del elemento del DOM. Con este método podemos asignar SÓLO UNA FUNCIÓN a cada elemento. 

    Este método funciona igual en todos los navegadores.


. También podemos capturar eventos con el [modelo avanzado](https://www.quirksmode.org/js/events_advanced.html)
    
    Con este método, podemos asignar muchas funciones al mismo evento.

    Para linkar/deslinkar una función a un evento con este modelo, podemos usar:

    [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) y [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener)