//esto es la función de calculadora. Ya coge el valor de los numeros y operadores al ponerlo en texto
//e de element pero podriamos poner event
//https://www.w3schools.com/jquery/event_result.asp
var result = $('button').click(function(e){
	var num = e.target.innerText
	$('#display').val(num);
	
})


//ESto es para que no aparezca el simbolo de los operadores
$('#igual').click(function(){
	var inputNumbers = $('#display').val()
	console.log(inputNumbers)
})










//function result o display result