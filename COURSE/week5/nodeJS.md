con nodeJS podremos:
- hacer llamadas a APIS
- crear un servidor web
- manipular sistema de archivos (leer archivos, crear archivos, mover carpetas..)
- Cada arvhico que manejemos en node tendrá 2 versiones:la síncrona y asíncrona. Podríamos hacerlas con una función callback o un then. La gracia es que las manejemos de manera asíncrona.
Sincrona sería cuando hago un for, o un console.log, por ejemplo


Node js funciona a base de modulos. Para que funcionen, se usa la palabra "require"


Todo lo que no sea los elementos primitivos (string, numero, undefined, array, boleano) es un objeto. Una función tb es un objeto.
cuando usemos variables que contengan funciones constructoras, su nombre tiene que empezar por máyuscula.


------
readFile ---> para asíncrono
readFileSync ---> para síncrono


------------
Para los npm es usual ponerlos en un archivo llamados package Json y ponerle 
npm install -g

o 

npm install --global

(Ambos te lo instalan en global. Si no pongo nada, el npm es local)

npm init es un package Json vacío.


-----

**variables de entorno**

Si pongo esto en el terminal: $ echo $PATH
podré saber totes les carpetetes on s' enmagatzmen tots el comandos
Path
/bin
/sbin
/usr/bin
/usr/sbin


**MODULOS**
-http:

-url:

-path: para poner la ruta. 
path.extname('index.html')---> devolvería la extensión de la ruta
path.isAbsolute('/foo/bar') // true   --->normalizaría la ruta


