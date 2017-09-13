function sayHi(){
	return 'Hello'
}

var sayHi = function({
	return 'hello'
})


--------------------------
var sayHi = () => 'hello'
var sayHi = name => 'hello' + name

------
(arg1, arg2, ...) => expr
var sayHi => (name, location) => {
	var shoutName = name.toUpperCase()
} 

-------------------------
var myName ="juanma"
var myLocation = "Barcelona"
var myage = 42
var msg = "Hello, I'm ${myName} and I live in {myLocation}"