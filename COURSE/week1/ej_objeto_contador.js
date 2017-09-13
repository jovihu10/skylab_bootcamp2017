 // Hacer un objeto que sea un contador
 // - con un método count que incrementa el contador de 1 en 1
 // - con un método getCount que deveulve el conteo
 function countObject() {
     var car = {
         motor: 'audi',
         class: 'a',
         brand: 'Wolswagen'


     }
     var i;
     for (i = 0; i < car.length; i++) {
         var result = i.length;
     }
     return result;

 }
 countObject();




 //Método Hernan
 var counter = {
         counter: 0,
         count: function() {
             this.counter += 1;
         },
         getCount: function() {
             return this.counter;
         }




         //Si quisiesemos que una función probara que funcione
         //A esto le llamamos Unit Testing, xq esta testeando una función, una unidad de una app entera
         function testCounterCountsUp() {
             counter.count();
             if count === 1 {
                 console.log('Ok')
             } else {
                 console.log('Wrong', counter.getCount());
             }

         }
         testCounterCountsUp();







         //- construir un calculator
         //- que sume 2 numeros con la funcion sum()
         //- que reste 2 numeros con la funcion sub()
         //- que divida 2 numeros con la funcion div()
         //- que multiplique dos numeros con la funcion mul()
         //- los numeros solo pueden ser de tipo number, es decir, enteros y decimales
         //- se espera que toda la implemetacion esté probada
var calculator = {
    sum: function(num1, num2) {
        return num1 + num2;
    },
    sub: function(num1, num2) {
        return num1 - num2;
    },
    div: function(num1, num2) {
        return num1 / num2;
    },

    mult: function(num1, num2) {
        return num1 * num2;
    }
};


function testSumOk() {
    if ((calculator.sum(1, 2) === 3) && (typeof calculator.sum(1, 2) === 'number')) {
        console.log('Perfect, suma');
    } else {
        console.log('No son números')
    }
}
testSumOk();


function testSumFail() {
    if ((calculator.sum(1, 2) === 5) && (typeof calculator.sum(1, 2) === 'number')) {
        console.log('Perfect, suma');
    } else {
        console.log('Falla. Bien. Tenía que fallar')
    }
}
testSumFail();


function testSubOk() {
    if ((calculator.sub(4, 4) === 0) && (typeof calculator.sub(4, 4) === 'number')) {
        console.log('Ok, resta');
    } else {
        console.log('No son números');
    }
}
testSubOk()

function testSubFail() {
    if ((calculator.sub(4, 2) === 0) && (typeof calculator.sub(4, 4) === 'number')) {
        console.log('Ok, resta');
    } else {
        console.log('Falla. Bien. Tenía que fallar');
    }
}
testSubFail()



function testDivOk() {
    if ((calculator.div(4, 2) === 2) && (typeof calculator.div(4, 2) === 'number')) {
        console.log('Ok, divide');
    } else {
        console.log('No son números');
    }
}
testDivOk()


function testDivFail() {
    if ((calculator.div(4, 3) === 2) && (typeof calculator.div(4, 2) === 'number')) {
        console.log('Ok, divide');
    } else {
        console.log('Falla. Bien. Tenía que fallar');
    }
}
testDivFail()


function testMulOk() {
    if ((calculator.mult(3, 2) === 6) && (typeof calculator.mult(3, 2) === 'number')) {
        console.log('Ok, multiplica');
    } else {
        console.log('No debería dar esto');
    }
}
testMulOk()


function testMulFail() {
    if ((calculator.mult(3, 2) === 9) && (typeof calculator.mult(3, 2) === 'number')) {
        console.log('Ok, multiplica');
    } else {
        console.log('Falla. Bien. Tenía que fallar');
    }
}
testMulFail()













//Método Ignasi Hernan
function Calculator() {

    function checkNumber(a, b) {
        return (typeof(a) === 'number' && typeof(b) === 'number');
    }

    this.sum = function(a, b) {
        if (checkNumber(a, b)) {
            return a + b;
        } else {
            return ('ERROR');
        }

    }
    this.sub = function(a, b) {
        if (checkNumber(a, b)) {
            return a - b;
        } else {
            return ('ERROR');
        }
    }
    this.div = function(a, b) {
        if (checkNumber(a, b)) {
            return a / b;
        } else {
            return ('ERROR');
        }
    }
    this.mul = function(a, b) {
        if (checkNumber(a, b)) {
            return a * b;
        } else {
            return ('ERROR');
        }
    }
}

// UNIT TESTS
function testSum() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed:' + a + ' + ' + b);

        if (typeof(calculator.sum(a, b)) === 'number') {

            if (calculator.sum(a, b) === a + b) {
                console.log('SUM ok! ' + 'Test: ' + calculator.sum(a, b) + '/ Should be: ' + (a + b));
            } else {
                console.log('SUM failed: ' + calculator.sum(a, b) + '. Result should be ' + (a + b));
            }
        } else if (calculator.sum(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}



function testSub() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed: ' + a + ' - ' + b);

        if (typeof(calculator.sub(a, b)) === 'number') {

            if (calculator.sub(a, b) === a - b) {
                console.log('SUB ok! ' + 'Test: ' + calculator.sub(a, b) + '/ Should be: ' + (a - b));
            } else {
                console.log('SUB failed: ' + calculator.sub(a, b) + '. Result should be ' + (a - b));
            }
        } else if (calculator.sub(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}

function testDiv() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed: ' + a + ' / ' + b);

        if (typeof(calculator.div(a, b)) === 'number') {

            if (calculator.div(a, b) === a / b) {
                console.log('DIV ok! ' + 'Test: ' + calculator.div(a, b) + '/ Should be: ' + (a / b));
            } else {
                console.log('DIV failed: ' + calculator.div(a, b) + '. Result should be ' + (a / b));
            }
        } else if (calculator.div(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}

function testMul() {
    var calculator = new Calculator();
    var num1 = 5;
    var num2 = 4;
    var str = 'abc';


    testResult(num1, num2);
    testResult(str, str);


    function testResult(a, b) {
        console.log('Parameters passed: ' + a + ' * ' + b);

        if (typeof(calculator.mul(a, b)) === 'number') {

            if (calculator.mul(a, b) === a * b) {
                console.log('MUL ok! ' + 'Test: ' + calculator.mul(a, b) + '/ Should be: ' + (a * b));
            } else {
                console.log('MUL failed: ' + calculator.mul(a, b) + '. Result should be ' + (a * b));
            }
        } else if (calculator.mul(a, b) === 'ERROR') {
            console.log('OK! Error detected: params were not numbers.');

        } else {
            console.log('Error detection failed! Function accepts NaN');
        }

    }
}

testSum();
testSub();
testDiv();
testMul();







