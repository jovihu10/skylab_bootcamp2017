var number;
var operatorrr;

//Esto para que me memorice el primer num

function num1() {

    $(".num").click(function() {
        number = $(this).html();
        //Esto lo mostramos así porque queremos mostrar en el display el num concatenado
        //el valor de display + concatenado al number
        $('#display').val($('#display').val()+number);

        console.log($(this).html());

    });

    }
num1()




    function operator() {

        $(".op").click(function() {
            operatorrr = $(this).html();
            $('#display').val(operatorrr);

            console.log($(this).html());

        });

    }
    operator()












	/*
	$("p").click(function(){
    alert("The paragraph was clicked.");
});
*/


	//if ($("one".click,))
	
/*
	if(param1 + param2){
		var result =param1+param2;
		return result;
	}else if(param1 - param2){
		var result= param1 - param2;
		return result;

	}else if(param1 * param2){
		var result= param * param2;
		return result;
	}else if(param1 / param2){
		var result = param1 / param2;
		return result;

	}
	*/





