//                 Assignment 3
// Question 1 : Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
var modiArr = function (orgArray, index, value) {
    return orgArray.splice(index, 0, value);
};
var orgArray = ["Nadeem", "Faisal", "Ahmad", "Asim Muneer"];
modiArr(orgArray, 1, "Mubeen");
console.log(orgArray);
modiArr(orgArray, 0, "Siam");
console.log(orgArray);
// Question : 2 Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
var alphabets = ["ABC", "DEF", "XYZ"];
var addItems = function (index, value) {
    return alphabets.splice(index, 0, value);
};
var removeItems = function (index) {
    return alphabets.splice(index, 1);
};
var updateItems = function (index, value) {
    return alphabets.splice(index, 1, value);
};
addItems(2, "GHQ");
console.log(alphabets);
removeItems(1);
console.log(alphabets);
updateItems(4, "Ahmad");
console.log(alphabets);
console.log("--------------------------------------------------------");
//  Question 3 : Write a program that uses a while loop to print the first 25 integers.
var val = 1;
while (val < 26) {
    console.log(val);
    val++;
}
console.log("--------------------------------------------------------");
// Question:4 Write a program that uses a while loop to print the first 10 even numbers.
var numb = 0;
while (numb <= 10) {
    if (numb % 2 === 0) {
        console.log(numb);
    }
    numb++;
}
console.log("--------------------------------------------------------");
// Question :5 Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
var factorialNumber = function (numby) {
    var fact = 1;
    while (numby > 0) {
        fact = fact * numby;
        numby--;
    }
    return fact;
};
console.log(factorialNumber(54));
console.log("--------------------------------------------------------");
//  Question : 6 Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
var kickNegatice = function (numberArray) {
    var index = 0;
    while (numberArray.length > index) {
        if (numberArray[index] < 0) {
            console.log("The Negative Value is Removed it was ".concat(numberArray[index]));
            numberArray.splice(index, 1);
        }
        else {
            console.log("The Value is positive", numberArray[index]);
        }
        index++;
    }
};
var numberArray = [24, -42, 46, 76, -23, 87];
kickNegatice(numberArray);
console.log(numberArray);
console.log("--------------------------------------------------------");
// Question:7  Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
var calcSum = function (sumArray) {
    var sum = 0;
    var index = 0;
    while (index < sumArray.length) {
        sum += sumArray[index];
        index++;
    }
    return sum;
};
var sumArray = [2, 4, 6, 73, 2, 4, 6, 123, 132, 345];
console.log("The Sum Of Array is", calcSum(sumArray));
console.log("--------------------------------------------------------");
// Question : 8 Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
var temperatureConverter = function (tempInCelcius) {
    var index = 0;
    var result;
    var tempInFahrenheit = [];
    while (tempInCelcius.length > index) {
        result = tempInCelcius[index] * (9 / 5) + 32;
        // tempInCelcius.splice(index, 0, result);
        // console.log(result);
        tempInFahrenheit.push(result);
        index++;
    }
    console.log("The Temperature in Celcius was", tempInCelcius, "Then after conversion Temparture in farenheit array is", tempInFahrenheit);
};
var tempInCelcius = [23, 34, 39, 16];
temperatureConverter(tempInCelcius);
console.log("-------------------------THE END------------------------");
