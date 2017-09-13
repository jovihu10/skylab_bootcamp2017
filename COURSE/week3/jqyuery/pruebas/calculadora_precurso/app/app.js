
var results = []

function sum(){
	var n1 = document.getElementById("num1").value
	var n2 = document.getElementById("num2").value
	var suma = (parseFloat(n1) + parseFloat(n2))
	results.push(n1  + '➕' + n2 + ' = ' + suma)	
	document.getElementById('results').innerHTML = results.join("<br>")
}

function subs(){
	var n1 = document.getElementById("num1").value
	var n2 = document.getElementById("num2").value
	var resta = (parseInt(n1) - parseInt(n2))
	results.push(n1  + '➖' + n2 + ' = ' + resta)	
	document.getElementById('results').innerHTML = results.join("<br>")
}

function mult(){
	var n1 = document.getElementById("num1").value
	var n2 = document.getElementById("num2").value
	var multi = (parseInt(n1) * parseInt(n2))
	results.push(n1  + '✖️' + n2 + ' = ' + multi)	
	document.getElementById('results').innerHTML = results.join("<br>")
}

function div(){
	var n1 = document.getElementById("num1").value
	var n2 = document.getElementById("num2").value
	var div = (parseInt(n1) / parseInt(n2))
	results.push(n1  + '➗' + n2 + ' = ' + div)	
	document.getElementById('results').innerHTML = results.join("<br>")
}

function reset(){
	results = []
	document.getElementById('results').innerHTML = results
}