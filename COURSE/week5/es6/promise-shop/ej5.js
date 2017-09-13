const promise = new Promise(function(fulfill, rejected){
	fulfill('PROMISE VALUE')
	rejected(new Error('I DID NOT FIRE'))
})

promise
	.then(console.log)

console.log('MAIN PROGRAM')