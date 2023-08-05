"use strict";
// Question 1 : Print a message like "Hey Abu Hurairah, I have started learning TYPESCRIPT."
let Name = "Ahmad";
console.log(`Hey ${Name} , I have started learning Typescript`);
// Question: 2 Store your name in a variable and print it
let firstName = "Ahmad";
let lastName = "Saboor";
console.log(`${firstName} ${lastName}`);
// Question: 3 Store 10 numbers in different variables.
let numOne = 23;
let numTwo = 32;
let numThree = 76;
let numFour = 43;
let numFive = 21;
let numSix = 34;
let numSeven = 12;
let numEight = 56;
let numNine = 212;
let numTen = 78;
// part-I Add all of them and print the SUM.
let resultAdd = numOne +
    numTwo +
    numThree +
    numFour +
    numFive +
    numSix +
    numSeven +
    numEight +
    numNine +
    numTen;
console.log(`The Result of Addition is ${resultAdd}`);
// Part II - Print the Difference (subtraction).
let resultSub = numOne -
    numTwo -
    numThree -
    numFour -
    numFive -
    numSix -
    numSeven -
    numEight -
    numNine -
    numTen;
console.log(`The Result of Subtraction is ${resultSub}`);
//  Part III  - Print the result after multiplying all.
let resultMultiply = numOne *
    numTwo *
    numThree *
    numFour *
    numFive *
    numSix *
    numSeven *
    numEight *
    numNine *
    numTen;
console.log(`The Result of Multiply is ${resultMultiply}`);
// Question 4 : Take two numbers and print the division result.
let resultDivide = resultMultiply / resultAdd;
console.log(`The Divsion result of ${resultMultiply} / ${resultAdd} = ${resultDivide}`);
// Question 5: Now, perform all four operations with the given numbers, print the results, and observe the order in which the operations take place.
let chkOrderPrecedence = numOne +
    numTwo -
    (numThree * numFour) / numFive +
    numSix -
    (numSeven * numEight) / numNine +
    numTen;
//   first (numThree * numFour) =3268 second   (numSeven * numEight)  =672
// third (numThree * numFour) / numFive =3268/21=155.62 fourth (numSeven * numEight) / numNine = 3.17
// Then from left to right
console.log(chkOrderPrecedence);
