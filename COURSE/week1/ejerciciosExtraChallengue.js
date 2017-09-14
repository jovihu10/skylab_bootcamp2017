//Calculator

//Define a function called calculator that receives an operation and 
//two numbers and returns the result of the operation applied to the values passed as parameters

//calculator("suma",10,5) // 15
//calculator("resta",10,5) // 5
//calculator("multiplicacion",10,5) // 50
//calculator("division",10,5) // 2

function calculator(act, num1, num2) {

    if (act === "suma") {
        return num1 + num2;
    } else if (act === "resta") {
        return num1 - num2;
    } else if (act === "mult") {
        return num1 * num2;
    } else if (act === "div") {
        return num1 / num2;
    } else {
        return "escribe suma, resta, mult, div";
    }

}

console.log(calculator("suma", 4, 6));







// Versión Ignasi
function calculator(op, num1, num2) {

    switch (op) {
        case 'sum':
            return num1 + num2;
            break;
        case 'subtract':
            return num1 - num2;
            break;
        case 'multiply':
            return num1 * num2;
            break;
        case 'divide':
            return num1 / num2;
    }
}



////Versión Yasmina
function calculator(operation, n1, n2) {
    var result;
    switch (operation) {
        case 'suma':
            result = n1 + n2;
            break;
        case 'resta':
            result = n1 - n2;
            break;
        case 'multiplicacion':
            result = n1 * n2;
            break;
        case 'division':
            result = n1 / n2;
            break;
    }
    return result
}

calculator('suma', 1, 2)
















//Calculator Plus

//Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

//calculator("suma",10,5,2,3) // 20
//calculator("resta",10,5,1) // 4
//calculator("multiplicacion",10,5,2) // 100
//calculator("division",10,5) // 2

// Ignasi
//Ignasi lo ha hecho con arrow functions
function calculator() {
    var nums = Array.from(arguments);

    switch (nums.shift()) {
        case 'sum':
            return nums.reduce((total, item) => total + item);
        case 'subtract':
            return nums.reduce((total, item) => total - item);
        case 'multiply':
            return nums.reduce((total, item) => total * item);
        case 'divide':
            return nums.reduce((total, item) => total / item, 1);
    }
}
calculator()







//Santi
function calculator() {
    var args = Array.prototype.slice.call(arguments);
    var operation = args.splice(0, 1).toString();
    switch (operation) {
        case 'suma':
            return args.reduce(function(a, b) { return a + b; });
            break;
        case 'resta':
            return args.reduce(function(a, b) { return a - b; });
            break;
        case 'multiplication':
            return args.reduce(function(a, b) { return a * b; });
            break;
        case 'division':
            return args.reduce(function(a, b) { return a / b; });
            break;
    }
}



//Versión Marc
function calcuPlus() {
    var numbers = Array.prototype.slice.call(arguments);
    var operacion = numbers.shift();
    resultado = numbers.reduce(function(a, b) {
        switch (operacion) {
            case 'suma':
                return a + b;
            case 'resta':
                return a - b;
            case 'multiplicacion':
                return a * b;
            default:
                return a / b;
        }
    })
    return resultado;
}



//Versión Yasmina

function calculator(operation) {
    var numbers = Array.prototype.slice.call(arguments)
    numbers.shift()
    var result;
    switch (operation) {
        case 'suma':
            result = numbers.reduce(function(a, b) { return a + b });
            break;
        case 'resta':
            result = numbers.reduce(function(a, b) { return a - b });
            break;
        case 'multiplicacion':
            result = numbers.reduce(function(a, b) { return a * b });
            break;
        case 'division':
            result = numbers.reduce(function(a, b) { return a / b });
            break;
    }
    return result;
}

calculator('suma', 10, 2, 5)








//3)getFullName
//Define a function called ​getFullName​ that receives a name and a surname and return the string "Your full name is " with the name & surname concatenated
//getFullName( "juanma", "garrido") // "Your full name is "juanma garrido""
//Método1
function getFullName(name, surname) {
    if (name && surname) {
        return 'Your full name is ' + name + (' ') + surname;
    } else {

    }
}
getFullName('Juanma', 'Garrido')







// 4)isNumber
// Define a function called ​isNumber​ that receives a value and return true if the value received is a number

// isNumber(3) // true
// isNumber("3") // false
// isNumber("asass") // false
function isNumber(value) {

    if (typeof value !== 'number') {
        return false;

    } else {
        return true
    }

}
isNumber(3);
//REsult: true.
//en el if, si no pongo las comillas en number no funciona
//lo hacemos con typeof, que determina qué es ese item, si un numero, string...





//Método Marc
function isNumber(value) {
    return !isNaN(value);
}





//5)isString

//Define a function called ​isString​ that receives a value and return true if the value received is a string
function isString(value) {
    if (typeof value !== 'number') {
        return true;

    } else {
        return false;
    }

}


isString("Hi")
//REsult: true





//6) isBoolean

//Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean

// isBoolean(3) // false
// isBoolean("true") // false
// isBoolean(true) // true

function isBoolean(value) {
    if (typeof value === 'boolean') {
        return true;
    } else {
        return false;
    }

}
isBoolean(true);
//Result: true









//7)encodeWord

//Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:

//7 instead of T
//4 instead of A
//5 instead of S
//0 instead of O


function encodeWord(string) {
    var splitString = string.split('');

    var i;
    for (i = 0; i < splitString.length; i++) {
        if (splitString[i] === 't') {
            splitString[i] = 7;
        } else if (splitString[i] === 'a') {
            splitString[i] = 4;

        } else if (splitString[i] === 's') {
            splitString[i] = 5;
        } else if (splitString[i] === 'o') {
            splitString[i] = 0;

        }
    }
    var result = splitString.join('');
    return result;

}
encodeWord('What is your name?')
// Result: "Wh47 i5 y0ur n4me?"
// Vale la pena probar de hacerlo con replace
// https://www.w3schools.com/jsref/jsref_replace.asp





//Método Marc
marc

function encodeWord(word) {
    var wEncoded = word.replace(/T/gi, 7).replace(/A/gi, 4).replace(/S/gi, 5).replace(/O/gi, 0);
    return wEncoded;
}





//Método hernan
function encodeWord(text) {
    return text.replace(text, function(letter) {
        switch (letter.toUpperCase()) {
            case 'T':
                //case't':
                return 7;
                break;
            case 'A':
                //case 'a':
                return 4;
                break;
            case 'S':
                //case 's':
                return 5;
                break;
            case 'O':
                //case 'o':
                return 0;
                break;
        }
    })
}

encodeWord('hello World');



//Método Ignasi
//Ignasi
function encodeWord(str) {
    var arr = str.split('');

    var newArr = arr.map(function(item) {
        switch (item) {
            case 'T':
                return '7';
            case 'A':
                return '4';
            case 'S':
                return '5';
            case 'O':
                return '0';
            default:
                return item;
        }
    });

    return newArr.join('');
}








//encodeWordPlus
//Improve the previous function to add a random number between 0 and 1000 every 7 characters
function encodeWordPlus(string) {
    string = string.toLowerCase().split('');
    var i;
    for (var i = 7; i < string.length; i += 7) {
        string.splice(i, 0, Math.floor((Math.random() * 1000) + 0));
    }
    var result = string.join('');
    return result;

}
encodeWordPlus('What is your name?');
//falta el join






//Versión Marc


function encodeWord(word) {
    var wEncoded = word.replace(/T/gi, 7).replace(/A/gi, 4).replace(/S/gi, 5).replace(/O/gi, 0);
    ar wEncoded2 = wEncoded.split('');
    for (var i = 1; i < (wEncoded2.length - 1) / 7; i++) {
        wEncoded2.splice(i * 7, 0, Math.floor(Math.random() * 1000));
    }
    return wEncoded2.join('');
}


// Versión Yasmina
function encodeWordPlus(string) {
    var code = string.replace(/T/gi, 7).replace(/A/gi, 4).replace(/S/gi, 5).replace(/O/gi, 0).split('')
    for (i = 7; i <= code.length; i += 7) {
        code.splice(i, 0, Math.round(Math.random() * 1000))
    }
    return code.join('')
}