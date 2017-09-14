//Calculation

//Escribe un programa que escribe en la consola todos los multiplos de 23 hasta 500 y al final escribe la suma de todos ellos
function twentyThree() {
    var number = 23;
    var sum;;
    var i;
    do {

        for (i = 0; i < 500; i += 23) {

            console.log(i);


        }
        var sum = i * i;
        console.log(sum);

    }
    while (i < 500);


    //var result = number * number;
    //console.log(result);



}
twentyThree();

//Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
//391 414 437 460 483
//Sum : 5313