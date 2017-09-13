**Router**
Se pueden crear unas miniaplicaciones express y en app express requerir esos archivos y luego ensamblarlos
const express =express()
const router =express.router

1)Haciendolo así, todas las rutas no las definiremos sobre app, sino sobre router. Donde ponga app.whatever, lo cambiaremos por router.whatever
2)Crearemos en la raíz una carpeta routes
3)Haremos una ruta get, post y delete.
4)Hay que tener en cuenta que si un array u objeto tiene que ser llamado, al modularizarlo todo, una opcion es convertir el array, objeto u array de objetos en global en vez de local.
Para eso pondremos global."nombre de la variable".
5)Tambien cada modulo lo metermos dentro de una funcion (no anónima)
y abajo de todo el modulo pondremos "module.exports = router"
6) hay que instalar el npm sessions. Esto nos genera un middleware 
En terminal:(npm install npm sessions)
En app.js --->const sessions =require(express-sessions)


Haciéndolo así, cada vez que me conecte, el server adquirirá una cockie diferente de cada usuario. Esto vendrá del servidor express. si abro un puerto diferente, se abriría una cockie para cada puerto.
los datos de las cockies se encuentran en req.session.nombre de la variable


7)instalar npm session file-store. Este npm es para que te guarde las cockies de usuario (npm install session-file-store). Habrá que poner el require y hacer que te lo guarde (app.use(function(req, res,next){
    req.session.nombre de la variable donde se almacena
}). Entonces te lo guardará en una carpeta que contendrá un JSON


---
Para no tener problemas en el terminal con nodemon al hacerlo
nodemon app.js --ignore "nombre de la carpeta a ignorar, que será la creada por el session file-store"


----
npm start
