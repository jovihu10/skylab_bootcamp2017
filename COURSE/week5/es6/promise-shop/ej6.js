var promise = Promise.resolve('I FIRED')
var promise = Promise.reject(new Error('I DID NOT FIRE'))

promise
	.then(console.log)
	.catch(onRejected)



function onRejected(error){
	console.log(error.message)
}