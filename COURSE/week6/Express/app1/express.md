**Express**
Express es un modulo npm  web server que nos facilita la comunicación con el servidor

http methods:
- get
- post
- delete
- pot: para actualizar información

Con curl se puede especificar en el terminal el method

------
npm init----> para crear un paquete Json


**Route Params**
Ej:
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

Route params es una ruta que nos devolverá un objeto con esa propiedad

**Route handler**
Next---> sirve para que si tenemos una función, con el next pasaremos a la siguiente funcion en la cadena de funciones que haya definido


--------

Pug: es un modulo npm. Permite hacer páginas dinámicas y con mejor semántica
Además, permite tener mucho mejor SEO. Lo suyo es hacer toda parte que se haya de indexar con pug y lo demás con Angular.
Pug usa archivos '.pug'