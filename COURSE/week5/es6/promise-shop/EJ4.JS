const promise = new Promise(function(fulfill, rejected){
	fulfill('I FIRED')
	rejected(new Error('I DID NOT FIRE'))
})

promise
	.then(console.log,onRejected)



function onRejected(error){
	console.log(error.message)
}