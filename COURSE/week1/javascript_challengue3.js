// randomLargest()

// Randomizes three numbers in range (0.. 100) and prints the largest one.
function randomLargest(num1, num2, num3) {
    if ((num1 >= num2) && (num1 >= num3)) {
        var largest = num1;
        return 'the num1 is the largest number and is ' + largest;
    } else if ((num2 >= num1) && (num2 >= num3)) {
        var largest = num2;
        return 'the num2 is the largest number and is ' + largest;
    } else {
        var largest = num3;
        return 'the num3 is the largest number and is ' + largest;

    }

}
randomLargest(Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0), Math.floor((Math.random() * 100) + 0));






//randomEven()

//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
function randomEven(number) {
    var arResult = [];
    console.log('the number is ' + number)
    var i;
    for (i = 0; i < number; i++) {
        arResult.push(i);
        var result = arResult.join();

    }
    return 'The result is ' + result;

}
randomEven(Math.floor((Math.random() * 100) + 0));
//REsult: The result is 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90





//randomOdd()

//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed
function randomOdd(number) {
    var arResult = [];
    console.log('the number is ' + number)
    var i;
    for (i = 0; i < number; i++) {
        if ((i % 3 === 0) && (i < 40)) {
            arResult.push(i)

        }


    }
    return 'The result is ' + arResult;

}
randomOdd(Math.floor((Math.random() * 100) + 0));
//Result: "The result is 0,3,6,9,12,15,18,21,24,27,30,33,36,39"






//randomOddSmallers()

//Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)
function randomOddSmallers(number) {
    var arResult = [];
    console.log('the number is ' + number)
    var i;
    for (i = 0; i < number; i++) {
        if ((i % 3 === 0) && (i < 40)) {
            arResult.push(i);

        }
        var reverseArr = arResult.reverse()
        var result = arResult.join(',')

    }
    return 'The result is ' + result;

}
randomOddSmallers(Math.floor((Math.random() * 100) + 0));

//REsult: "The result is 36,30,24,18,12,6,0,3,9,15,21,27,33,39"





//randomRandom()

//Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.

function randomRandom(number) {
    console.log('number1 is ' + number);
    //Creo números random que van del random anterior (number) a 0
    var number2 = Math.floor((Math.random() * number) + 0);
    var number3 = Math.floor((Math.random() * number) + 0);
    var number4 = Math.floor((Math.random() * number) + 0);

    console.log('The second number is ' + number2 + ' and the third ' + number3);
    if ((number2 > number3) && (number2 > number4)) {
        console.log('the largest number is the 2, ' + number2);
    } else if ((number3 > number2) && (number3 > number4)) {
        console.log('the largest number is the 3, ' + number3);

    } else {
        console.log('the largest number is the 4, ' + number4);
    }

}
randomRandom(Math.floor((Math.random() * 100) + 0));









//randomSum()

//Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14
function randomSum() {
    var random = Math.floor((Math.random() * 9999) + 1000);
    console.log('The number is ' + random)
    var arrNum = random.toString().split("");
    var result = arrNum.reduce(function(a, b) {
        return parseInt(a) + parseInt(b)
    });
    //Importante, como los numeros están a string, aquí en la función anónima del reduce tenemos que decirle que lo pase a parseInt
    return result;

}
randomSum()
// Result: The number is 1760
// 14









//randomOne()

//Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly until you reach one digit only. For instance, if the randomized number was 1049, program should print 5
function randomOne() {
    var random = Math.floor((Math.random() * 9999) + 1000);
    console.log('The number is ' + random)
    var arrNum = random.toString().split("");
    var resulTwoNumbers = arrNum.reduce(function(a, b) {
        return parseInt(a) + parseInt(b)
    });
    //Importante, como los numeros están a string, aquí en la función anónima del reduce tenemos que decirle que lo pase a parseInt
    console.log('Now we have ' + resulTwoNumbers);

    var definitiveArrNum = resulTwoNumbers.toString().split("");
    var result = definitiveArrNum.reduce(function(a, b) {
        return parseInt(a) + parseInt(b)
    });
    return 'and the definitive number is ' + result
    //Ahora tenemos dos numeros. Así que repetimos y lo convertimos a split y aplicamos reduce de nuevo
}
randomOne()





//randomSmallest()
//Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.

//Aleatoriza dos números e imprime el número más pequeño que es mayor que uno, de modo que ambos números se dividen por él sin resto. Por ejemplo, para 9 y 6 debe imprimir 3. Si no hay uno, debe imprimirse una nota apropiada.
function randomSmallest(num1, num2) {
    if (num1 < num2) {
        console.log('the bigger number is the two ,' + num2)
    } else {
        console.log('the bigger number is the one ,' + num1)

    }




}
randomSmallest(Math.floor((Math.random() * 10) + 0), Math.floor((Math.random() * 10) + 0));
//No me queda claro






//randomLeastCommon()
//Randomizes two numbers and prints their least common multiplication of them. (use http://en.wikipedia.org/wiki/Least_common_multiple for details) Randomizes two numbers and prints their average and standard deviation.

randomLeastCommon() {
    var numRandom1 = Math.floor((Math.random() * 10) + 1);
    var numRandom2 = Math.floor((Math.random() * 10) + 1);

}
randomLeastCommon()