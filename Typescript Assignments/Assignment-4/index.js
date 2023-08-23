//  - Question - 1 Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// Here we are supposing our n is 30
var sum = 0;
for (var val = 0; val <= 30; val++) {
    if (val % 2 == 0) {
        // console.log(val)
        sum += val;
        if (val == 30) {
            console.log("The Sum of Even number is ", sum);
        }
    }
}
// Question 2 - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
var arrNumb = [
    1, 21, 234, 654, 234, 546, 12, 123, 453, 76, 127, 768, 999, 888,
];
for (var val in arrNumb) {
    if (arrNumb[val] % 2 == 0) {
        console.log("The Even Value is", arrNumb[val]);
    }
}
// Question 3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
var numbArray = [1, 2, 4, 5, 7, 9, 0, 3, 123, 324, 876, 129];
var newArray = numbArray.filter(function (value) { return value % 2 !== 0; });
console.log(newArray);
//Question 4 - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
var areaOfCircle = function (radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The Area of Circle is ".concat(area.toFixed(2)));
};
areaOfCircle(2);
areaOfCircle(4);
areaOfCircle(199);
// Question 5 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var arrOfAllGrades = [23, 43, 83, 54, 99, 67, 88, 50, 1, 43, 49.999];
var arrOfGoodGrades = arrOfAllGrades.filter(function (value) { return value >= 50; });
console.log(arrOfGoodGrades);
// Question 6 - Write a program that uses a function to find the largest element in an array of numbers.
var largestElement = function (arrOfNumby) {
    var largestElementIs = arrOfNumby[0];
    for (var i in arrOfNumby) {
        for (var j in arrOfNumby) {
            if (arrOfNumby[i] > arrOfNumby[j]) {
                largestElementIs = arrOfNumby[i];
            }
            else {
                largestElementIs = arrOfNumby[j];
            }
        }
    }
    console.log("The largest element is", largestElementIs);
};
var arrOfNumby = [2, 4, 5, 7, 8, 2, 1, 5, 78];
largestElement(arrOfNumby);
