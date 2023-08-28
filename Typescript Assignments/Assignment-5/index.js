// Write a program that uses filter to remove all negative numbers from an array of numbers
var numbersArr = [
    1, 24, 5, 7, 9, -2, -778, -12, -354, 123, 456, -123,
];
numbersArr = numbersArr.filter(function (value) { return value >= 0; });
console.log(numbersArr);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
var numbyArr = [1, 2, 3, 4, 5];
var newArr = numbyArr.map(function (value) { return value * 2; });
console.log(newArr);
