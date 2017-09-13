 Para arrancar el terminal siempre pondremos mongod --dbpath ~/ruta carpeta

Para abrir el shell, pondremos en una ventana del terminal sólo "mongo"

No utiliza SQL como lenguaje para gestionar datos.
Muy rápido de acceder a los datos (mucho más rápido que SQL pero menos flexible)

Un registro en mongo es un documento. Los documentos son muy parecidos a los archivos de Jason, pero mucho más ampliados (se llaman BSON)


La ruta para guardar los archivos temporales de mongo siempre ha de ser la misma.
mongod --dbpath ~/data/db

Para iniciar mongo
brew services start mongodb



show dbs
use test
show collections

//tasks es el nombre del objeto
db.tasks.find()


Para añadir una tarea. ej
db.tasks.insert({
id:2,
title: 'buy chocolat',
done: false
})


para eliminar la collection
db.tasks.drop()


db.tasks.find({done:false})

Para actualizar tarea:



para iterar entre datos hacemos servir el .next
Si queremos recorrer cada elemento de un array habrá que hacerlo siempre con un forEach



------
Si almacenamos fechas hacerlo con el timestamp

