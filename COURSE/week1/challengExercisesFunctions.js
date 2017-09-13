/*
1) Fibonacci Challenge

The fibonacci sequence is a mathematical sequence of integers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

0, 1, 1, 2, 3, 5, 8, 13, ..

Define a function called fibonacci with a single argument n The function should return the nth number of the fibonacci sequence.

Hint: Use a recursive function

## String Calculator

Define a function called add with a single argument input. The input to the function will be a string containing a comma-separated list of numbers. The function must return the sum of the numbers. e.g.

add(1,2,3,4) // => 10
*/
function fibo(){
	var fibo = [0,1]
	for(var i = 0; i < 9; i++){
		var res = (fibo[i] + fibo[i+1])
		fibo.push(res)
	}
	
	console.log(fibo[i])

}

fibo()
//Result: 34




//2)Reverse Number
//Write a JavaScript function that reverse a number
//Example x = 32243;
//Expected Output : 34223 
function reverse() {
    var num = 358;
    var splitNum = num.toString().split("");
    console.log(splitNum)
    reverseNum = splitNum.reverse()
    console.log(reverseNum)

}
reverse()







// Is palindrome?

// Write a JavaScript function that checks whether a passed string is palindrome or not A palindrome is word, 
// phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function palindrome() {
    var value = "Ana";
    var valueToLowerCase = value.toLowerCase();

    var splitNum = valueToLowerCase.toString().split("");

    console.log(splitNum);
    var reverseNum = splitNum.reverse().join("");



    console.log("Reverse num " +reverseNum);
    
    if (valueToLowerCase === reverseNum) {
        return true
    } else {
        return false
    }


}
palindrome()
//Result: True








// String combinations

// Write a JavaScript function that generates all combinations of a string

// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
function combinations(){
	var string = 'dog';
	var splitString = string.split("");
    var arrString = [];
	console.log(splitString);
	for(var i=0; (i<splitString) && (splitString[0].length === 1); i++){
		console.log(splitString[i])
        arrString.push(splitString)
        var shiftSplitString = arrString.shift();
        console.log(arrString)
	}


}
combinations()



