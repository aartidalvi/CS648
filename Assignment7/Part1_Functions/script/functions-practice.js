//Problem 1
function halfNumber(number) {
    return number / 2;
}

//Problem 2
function squareNumber(number) {
    return number * number;
}

//Problem 3
function percentOf(num1, num2) {
    return (num1 / num2) * 100;
}

//Problem 4
function findModulus(num1, num2) {
    return num2 % num1;
}

//Problem 5
function sumNumbers(input_numbers) {
    var result = 0;
    for (var i = 0; i < input_numbers.length; i++) {
        result += Number(input_numbers[i]);
    }
    return result;

}

//Problem 1
var number = 20;
console.log("Half of " + number + " is " + halfNumber(number));

//Problem 2
var number = 5;
console.log("The result of squaring the number " + number + " is " + squareNumber(number));

//Problem 3
var num1 = 2;
var num2 = 4;
console.log(num1 + " is " + percentOf(2, 4) + "% of " + num2);

//Problem 4
var num1 = 4;
var num2 = 10;
console.log(findModulus(num1, num2) + " is the modulus of " + num1 + " and " + num2);

//Problem 5
var input = prompt("Enter a list of intergers delimited by commas");
var numbers = input.split(',');
console.log("The result of adding all inputs is " + sumNumbers(numbers));