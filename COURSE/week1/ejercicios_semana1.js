//EJERCICIO1

function returnTwoNumbers(x1, x2) {
    //Escribe una funcion que teniendo 2 enteros x1 y x2 devuelva todos los enteros entre ellos. 
    //Si  x2 es más pequeño que x1, debería devolver -1
    var result = [];
    if (x1 < x2) {
        for (var i = x1; i <= x2; i++) {
            result.push(i)
        }
    } else {
        for (var i = x1; i >= x2; i--) {
            result.push(i)
        }
    }
    return result;
}

returnTwoNumbers(2, 3);




//EJERCICIO2

//Tabla de multiplicar
//Escribe una función que escribe en la consola la tabla de multiplicación del 1 al 10
function table() {
    var arResult = [];
    var i = 1;


    for (i = 1; i <= 10; i++) {
        var iString = '';
        var count;
        for (count = 1; count <= 10; count++) {
            var result = i * count;
            iString = iString.concat(result + "\t ");


        }
        console.log("\n" + iString)
    }


}
table();
//REsult:
//1 2 3 4 5 6 7 8 9 10 

//2 4 6 8 10 12 14 16 18 20 

//3 6 9 12 15 18 21 24 27 30 

//4 8 12 16 20 24 28 32 36 40 

//5 10 15 20 25 30 35 40 45 50 

//6 12 18 24 30 36 42 48 54 60 

//7 14 21 28 35 42 49 56 63 70 

//8 16 24 32 40 48 56 64 72 80 

//9 18 27 36 45 54 63 72 81 90 

//10 20 30 40 50 60 70 80 90 100




//Multiplications table on demand
//EScribe una función que escribe en la consola la tabla de multiplicación (en una columna) de cualquier numero pasado como parametro

function multiplication(number) {
    var i;
    for (i = 1; i < 10; i++) {
        var result = number * i;
        console.log(result);
    }

}
multiplication(3);
// REsult: 
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27









//Calculation

//Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

//Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
//391 414 437 460 483
//Sum : 5313

//Método1
function multof23() {
    var sum = 0;
    var num = 0;
    while (num < 500) {
        if (num % 23 === 0) {
            sum += num;
            console.log(num);
        }
        num++;
    }
    console.log('The total sum is : ' + sum);
};




//Método2 (mi método)
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
        var copyI = i;
        var sum = copyI++;
        console.log("the sum is " + sum);

    }
    while (i < 500);


    //var result = number * number;
    //console.log(result);
    //Podría hacer la suma con un reduce
    https: //www.w3schools.com/jsref/jsref_reduce.asp


}
twentyThree();

//Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
//391 414 437 460 483
//Sum : 5313



















// maxOfThree() function
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
    var largest = Math.max(num1, num2, num3)
    return largest;
}
maxOfThree(1, 2, 3);









//isVowel() function
//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function vocalConsonante(a) {

    var result = '';
    switch (a) {
        case 'a':
            result = true;
            break;
        case 'e':
            result = true;
            break;
        case 'i':
            result = true;
            break;
        case 'o':
            result = true;
            break;
        case 'u':
            result = true;
            break;
        default:
            result = false;

    }
    return result;
}

//Tambien lo podríamos hacer con un filter
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter



//Hexadecimal
//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code
//Hint: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split
//>>> var a = getRGB ('#00FF00');
//>>> a;
//“rgb(0,255,0)”;

function getRGB(hexcolor) {
    var toRGB = { '00': 0, 'FF': 255 }
    var n1 = hexcolor[1] + hexcolor[2]
    var n2 = hexcolor[3] + hexcolor[4]
    var n3 = hexcolor[5] + hexcolor[6]
    var result = "rgb("
    result += toRGB[n1] + "," + toRGB[n2] + "," + toRGB[n3] + ")"
    return result
}

getRGB('#00FF00 ')
//REsult: getRGB ('#00FF00 ')







function getRGB() {
    var rr = color.slice(1, 3);
    var gg = color.slice(3, 5);
    var bb = color.slice(3, 7);
    var r10 = parseInt(rr, 16);
    // Ponemos rr, 16 en el parseInt para que sepa que se trata de un hexadecimal y no de un entero normal. Sino, si pusiéramos letras no me lo cogería
    var g10 = parseInt(gg, 16);
    var b10 = parseInt(bb, 16);
    return 'rgb(' + r10 + ', ' + g10 + ', ' + b10 + ')';
}



getRGB();










//translate()

// Escribe una función que traduzca a texto "rövarspråket"
// Dobla cada consonante y lugar y pon una "o" entre ellos
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate() {
    var arrName = [];

    var originalName = "this is fun";
    var splitName = originalName.split('');

    var i;
    for (i = 0; i < splitName.length; i++) {
        if (splitName[i] != 'a' || splitName[i] != 'e' || splitName[i] != 'i' || splitName[i] != 'o' || splitName[i] != 'u' || splitName[i] != ' ') {
            var result = splitName[i] + 'o' + splitName[i];


        }

        //var lastResult =result.join("")
        arrName.push(result);



    }

    var lastResult = arrName.join('');
    console.log(lastResult)



}
translate();
//REsult: 
// tothohioisos o ioisos o fofuounon







// sum() & multiply()

// Define a function sum() and a function multiply() that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Si faig un function, lo ideal es ferho amb una funció anonima
//Metodo1


//El reduce siempre lo hará la operación entre 2 elementos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
function sum() {
    var numbers = [1, 2, 3, 4];
    var totalSum = numbers.reduce(function(a, b) { return a + b; }, 0);
    console.log(totalSum);
    var numbers1 = [1, 2, 3, 4];
    var totalmult = numbers1.reduce(function(a, b) { return a * b; }, 1)
    console.log(totalmult)
}
sum()
// Result: 
// 10
// 24




//otra manera (esta es mucho más eficiente)
function sum(nums) {
    //esto de acum y val es de referencia para mi. Acum será lo acumulado de anteriores operaciones 
    // y valor el valor por el que ha de hacer la operación
    return nums.reduce(function(acum, val) { return acum + val; })

}
sum([1, 2, 3])
//REsult: 6




//Otra manera de hacerlo. Aquí lo han hecho con arguments
function sum() {
    var acc = 0
    for (n in arguments[0]) {
        acc += arguments[0][n]
    }
    console.log("Sum ➡️ " + acc)
}

function multiply() {
    var acc = 1
    for (n in arguments[0]) {
        acc *= arguments[0][n]
    }
    console.log("Mult ➡️ " + acc)
}


sum([1, 2, 3, 4])
multiply([1, 2, 3, 4])







// reverse()

// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(word) {
    var splitReverse = word.split("");
    var wordReverse = splitReverse.reverse();
    result = wordReverse.join('');
    console.log(result);


}
reverse("jag testar")
//Result: ratset gaj





// translate()
// Represent a small bilingual lexicon as a Javascript object in the following fashion
// {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
// and use it to translate your Christmas cards from English into Swedish.
//Método1
function translate() {
    var lexicon = {
        "merry": "god",
        "christmas": "jul",
        "and": "och",
        "happy": "gott",
        "new": "nytt",
        "year": "år"
    }
    var swedish = lexicon.merry + (' ') + lexicon.christmas + (' ') + lexicon.and + (' ') + lexicon.happy + lexicon.year;
    console.log(swedish)



}


translate();
//REsult: god jul och gottår







//Método2
function translate(phrase) {
    var lexicon = {
        "merry": "god",
        "christmas": "jul",
        "and": "och",
        "happy": "gott",
        "new": "nytt",
        "year": "år"
    };
    var text = '';
    var x;
    for (x in lexicon) {
        text += lexicon[x] + ' ';

    }
    console.log(text)





}


translate("Merry christmas and happy year");
//Result: god jul och gott nytt år 








//findLongestWord()

//Write a function findLongestWord() that takes an array of words 
// and returns the length of the longest one.
//Ferho amb un length de cada element
//Metodo1
function findLongestWord(arrayWords) {
    do {
        for (var i = 0; i < arrayWords.length; i++) {
            if ((arrayWords[0].length < arrayWords[1].length)) {
                arrayWords.shift()
            } else {
                arrayWords.splice(0, 1);
            }
        }
    } while (arrayWords.length !== 1)

    console.log(arrayWords);
    console.log(arrayWords[0].length);
}

findLongestWord(['house', 'big', 'camel', 'music', 'abracadabra']);

//Result: abracadabra
//No trabajar con recortar el array cuando está dentro de un for







//Método2 (de Marc)
function findLongestWord(listwords) {
    var res = listwords.reduce(function(a, b) {
        if (a < b.length) return b.length;
        else return a;
    }, listwords[0].length);
    console.log(res);
}










//filterLongWords()

//Write a function filterLongWords() that takes an array of words and an integer i 
//and returns the array of words that are longer than i.
//Método Hernan
function filterLongWords(array, len) {
    return array.filter(function(word) {
        return word.length >= len;
    });
}

filterLongWords(['hola', 'que', 'tal', 'otorrinolaringologo', 'onomatopeya', 'lol', 'ta'], 5);

(2)["otorrinolaringologo", "onomatopeya"]










//charFreq()

// Write a function charFreq() that takes a string and builds a frequency 
// listing of the characters contained in it. Represent the frequency listing as a Javascript object. 
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
//Método Hernan
function charFreq(text) {
    var freq = {};
    var arrayOfText = text.split('');
    arrayOfText.map(function(char) {
        if (isNaN(freq[char])) {
            freq[char] = 1;
        } else {
            freq[char] += 1;
        }
    })
    return freq;
}

charFreq("abbabcbdbabdbdbabababcbcbabx");






// Método Ignasi
function charFreq(str) {
    var obj = {};
    var arr = str.split('');

    arr.forEach(function(item) {
        if (Object.keys(obj).indexOf(item) < 0) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
    });

    return obj;
}
charFreq("abbabcbdbabdbdbabababcbcbab");








//Método Alex
//Alex

function charFreq(str) {
    var frequency = {}

    function addFrequency(character) {
        frequency[character] ? frequency[character] += 1 : frequency[character] = 1
    }
    str.split('').forEach(addFrequency)
    return frequency
}

charFreq("asdfasdasaaasdsdfgsdfsd")









    -- -- -- -- -- -- -- -- -- -



    function Hero(name) {
        this.name = name;
        this.occupation = 'Ninja';
        this.whoAreYou = function() {
            return "I'm " + this.name + " and I'm a " + this.occupation;
        }
    }

var h1 = new Hero('Michelangelo');
var h2 = new Hero('Donatello');
h1.whoAreYou();

h2.whoAreYou();



-- -- -- -- -- -- -- -- --

// EJEMPLO CONSTRUCTOR DE OBJETOS

function human(name, weight, gender, eyesColor, skinColor) {
    this.name = "Manuel";
    this.surname = surname;
    this.age = 0;
    this.height = height;
    this.weight = weight;
    this.skincolor = skincolor
    this.gender = gender;
    this.ocupation = "none";
    this.nationality = nationality;
    this.maritalStatus = "single";
    this.eyesColor = eyesColor;
    this.criminalRecords = "none";
    this.getFullName = function() {
        return this.name + '' + this.surname;
    }

    this.cry = function() {
        console.log("buahhh");
    }
    this.pop = function() {
        console.log("pssss");
    }
    this.eat = function(food) {
        console.log("eat" + "food")
    }
    this.sleep = function() {
        console.log("Szzzzz");
    }

    function Manu(workingCompany, ) {
        this.workingCompany = workingCompany;
        this.program = function(language) {
            console.log("tkxk tkxkx " + language);

        };
        // al hacer prototype a manu, crearemos el objeto manu con herencia del objeto human y le podremos añadir nuevas características, 
        // porque manu es un objeto propio
        Manu.prototype = new human("Manuel", "Barzi", 74, 1, 78, "male", "olive", "white", "argentinian");


    }
}










//funcion que con array de entrada (parametro)devuelva cualquier valor del array en modo random
//version mia. acabarla
function random(parametro) {
    for (var i = 0; i < random.length; i++) {
        var randomize = Math.random(random[i]);
    }
    console.log(randomize)
}
random(["hola, que, tal"])


//Versión Ignasi

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}











-- -- -- -- --




function fun() {
    var x = 5;
    return function() {
        return x;
    }

}
fun()

var o = fun();




-- -- --



function safebox(thing) {
    var secret = thing;
    return function(pasword) {
        if (pasword === 'dame un besito') {
            return secret
        }
        return 'no comprendo'
    }

}
safebox()

var caja = new safebox('me gusta jugar al futbol en pel ...');
caja('psss');
caja('dame un besito')