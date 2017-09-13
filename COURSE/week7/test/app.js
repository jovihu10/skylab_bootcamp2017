const mongoClient = require('mongodb').MongoClient
// Connection URL 
//Lo que hay 
const urlDb = 'mongodb://localhost:27017/nuevaCarpetaMongo'
const name = 'joel'
// Use connect method to connect to the Server 
mongoClient.connect(urlDb, function(err, db) {
    if (err) throw err
    console.log('Connected correctly to server')

	db.collection('restaurants')
		//.find({borough: 'Manhattan'})
		//.find( { "grades.score": { $gt: 30 } } ) // greater than
		//.find({address.zip.'code'})
		//.find( { "cuisine": "Italian", "address.zipcode": "10075" }) // AND
		.find().sort( { "borough": 1, "address.zipcode": 1 } )
		.toArray((err, doc) => console.log(doc.length))
	

		//.forEach( (myDoc) => console.log(doc))

		//para convertir a array
		//.toArray( (err, doc) => console.log(doc))


    //db.close();
});