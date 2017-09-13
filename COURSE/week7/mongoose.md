Mongoose trabaja con modelos. Los modelos estarán interconectados con un collection.

Con mongoose podemos definir estructura datos, que tipo de datos son, etc y encapsularlo todo en un modelo
model.find loquesea
model.insert loquesea

Modulos a instalar en un proyecto:
-mongoose, 
-body parser, 
-express (y hacer el const app= express()   )
-npm install nodemon --save (para facilitar al usuario que lo pueda hacer servir)

hacer el mongoose.promise = global.promise
const URL_DB ='mongodb://localhost:27017/test' (o como se diga la carpeta)
const PORT = 3000
module.exports =mongoose.model('Task, TaskSchema')

Para devolver cosas al servidor, siempre usaremos res

**curl**
//Si no poso el pretty m' ho mostra en una linea
db.tasks.find().pretty()