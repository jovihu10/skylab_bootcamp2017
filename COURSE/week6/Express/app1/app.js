//1)Cargamos modulo express
//2) Cargamos app express
//3) Definimos rutas
const express = require('express')
const path = require('path')
const app = express()
//En el loggin posariem de require el teu propi modul
const loggin = require()

//Con esto le decimos donde estarán los archivos publicos
//app.use( 'static', express.static('public'))
app.get('/', (req, res) =>{
	res.send('root')
})
//del app.get al req.params de aquí se le llama route handler
app.get('/users/:userId/books/:bookId', function (req, res) {
	//Req params es un objeto predefinido de express donde se almacenan todos los methods
	const {bookId, userId} = req.params
  res.send(req.params)
})
//app.use( 'static', express.static(path.join(__dirname,'public'))
//Para acceder a la ruta del route params, en este ejemplo sería
const userId = req.params.userId
const bookId = req.params.bookIdg

/*
app.get('/', (req, res) =>{
	res.send('Hello World')
})

*/
/*
app.post('/', (req, res) =>{
	res.send('Post -> Hello World')
})

app.delete('/', (req, res) =>{
	res.send('Delete -> Hello World')
})

app.put('/', (req, res) =>{
	res.send('Put -> Hello World')
})
*/
app.listen(3001)



//Para cada end point podremos acceder mediante un add get o un add post