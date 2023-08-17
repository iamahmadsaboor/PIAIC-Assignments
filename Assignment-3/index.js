// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
var a = ["ABC", "DEF", "XYZ"];
var addItems = function (index, value) {
    return a.splice(index, 0, value);
};
var removeItems = function (index) {
    return a.splice(index, 1);
};
var updateItems = function (index, value) {
    return a.splice(index, 1, value);
};
addItems(2, "GHQ");
console.log(a);
console.log("--------------------------------------------------------");
//  Write a program that uses a while loop to print the first 25 integers.
var val = 1;
while (val < 26) {
    console.log(val);
    val++;
}
console.log("--------------------------------------------------------");
// Write a program that uses a while loop to print the first 10 even numbers.
var numb = 0;
while (numb <= 10) {
    if (numb % 2 === 0) {
        console.log(numb);
    }
    numb++;
}
console.log("--------------------------------------------------------");
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
//  Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
