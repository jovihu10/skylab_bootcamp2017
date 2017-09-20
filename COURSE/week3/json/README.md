<h1>JSON</h1>

<a href="https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/13-JSON">SLIDES</a>


http://json.org/json-es.html
http://www.etnassoft.com/2010/12/30/tutorial-json/
http://javascriptweblog.wordpress.com/2010/11/29/json-and-jsonp/
http://www.anieto2k.com/2007/08/03/toma-de-contacto-con-json/

    {
    "name": "Eric Clapton",
    "occupation": "Guitar Hero",
    "bands": ["Cream", "Blind Faith"]
    }
JSON (Javascript Object Notation) es un formato para intercambio de datos basado en notación literal de Javascript para la respresentación de objetos, strings, boleanos y números
http://tools.ietf.org/html/rfc4627

Ventajas de este formato respecto XML :

Es más ligero (su estructura necesita menos elementos que XML), por eso es ideal para peticiones de AJAX.

Es más fácil de transformar a un objeto de Javascript.
http://ajaxian.com/archives/json-vs-xml-the-debate
Stop Comparing JSON and XML

<h2>Particularities of JSON format vs literal notation of Javascript</h2>

- Cada valor va siempre con comillas dobles.

-JSON puede representar 6 tipos de valor: objetos, arrays, números, strings, boleanos y null.

- Fechas no son reconocidas como tipos de dato.

- Números no pueden empezar por 0 (pero sí decimales)
http://www.jsonlint.com/


Strings en JSON strings must be converted to Javascript objects so they can be used (and the opposite). To do this we can use:

eval(): Is note recommended using it directly
JSON.parse: Converts a JSON string in an Javascript object
JSON.stringify: Converts a Javascript object into a JSON string
jQuery.parseJSON: with jQuery we can also do the JSON parse
JSON object (and its methods JSON.parse and JSON.stringify) are available natively in all browsers compatible with ECMAScript 5

http://json.parser.online.fr/
https://developer.mozilla.org/En/Using_JSON_in_Firefox

>>> JSON.parse('{"bar":"new property","baz":3}')
Object { bar="new property", baz=3}
>>> JSON.stringify({ breed: 'Turtle', occupation: 'Ninja' });
"{"breed":"Turtle","occupation":"Ninja"}"