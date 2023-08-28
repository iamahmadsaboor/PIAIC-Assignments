// Question 1 - Write a program that uses filter to remove all negative numbers from an array of numbers
let numbersArr: number[] = [
  1, 24, 5, 7, 9, -2, -778, -12, -354, 123, 456, -123,
];

numbersArr = numbersArr.filter((value) => value >= 0);
console.log(numbersArr);

// Question 2 - Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

const numbyArr: number[] = [1, 2, 3, 4, 5];
let newArr: number[] = numbyArr.map((value) => value * 2);
console.log(newArr);

//Question 3 - Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

let fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];
const myFruits: string[] = fruits.filter((fruit) => fruit.length > 5);
console.log(myFruits);

// Question 4 - Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

let valuesArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenSquaredArray: number[] = valuesArray
  .filter((value) => value % 2 == 0)
  .map((values) => values ** 2);

console.log(evenSquaredArray);

// Question 5 - Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temperatureInCelcius: number[] = [0, 10, 20, 30, 40];
const temperatureInFarenheit: number[] = temperatureInCelcius.map(
  (temperature) => (temperature * 9) / 5 + 32
);
console.log(temperatureInFarenheit);

// Question 6 - Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

let givenArray: number[] = [3, 6, 9, 12, 15, 18];
let oddDoubledValues = givenArray
  .filter((values) => values % 2 !== 0)
  .map((oddValue) => oddValue ** 2);
console.log(oddDoubledValues);

// Question 7 - Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

// First Method -- To Simply Console One By one

let arrOfGivenNames: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
arrOfGivenNames.forEach((nameValue) => console.log(`${nameValue}!`));

// Second Method -- to Store in An Array

arrOfGivenNames.forEach((nameValue, index) => {
  arrOfGivenNames[index] = nameValue + " !";
});

console.log(arrOfGivenNames);
