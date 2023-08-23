//  - Question - 1 Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// Here we are supposing our n is 30

let sum = 0;
for (let val: number = 0; val <= 30; val++) {
  if (val % 2 == 0) {
    // console.log(val)
    sum += val;
    if (val == 30) {
      console.log(`The Sum of Even number is `, sum);
    }
  }
}

// Question 2 - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arrNumb: number[] = [
  1, 21, 234, 654, 234, 546, 12, 123, 453, 76, 127, 768, 999, 888,
];
for (let val in arrNumb) {
  if (arrNumb[val] % 2 == 0) {
    console.log("The Even Value is", arrNumb[val]);
  }
}

// Question 3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

let numbArray: number[] = [1, 2, 4, 5, 7, 9, 0, 3, 123, 324, 876, 129];
let newArray: number[] = numbArray.filter((value) => value % 2 !== 0);
console.log(newArray);

//Question 4 - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

let areaOfCircle = (radius: number) => {
  let area = Math.PI * radius ** 2;
  console.log(`The Area of Circle is ${area.toFixed(2)}`);
};

areaOfCircle(2);
areaOfCircle(4);
areaOfCircle(199);

// Question 5 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let arrOfAllGrades: number[] = [23, 43, 83, 54, 99, 67, 88, 50, 1, 43, 49.999];
let arrOfGoodGrades = arrOfAllGrades.filter((value) => value >= 50);
console.log(arrOfGoodGrades);

// Question 6 - Write a program that uses a function to find the largest element in an array of numbers.

let largestElement = (arrOfNumby: number[]) => {
    let largestElementIs: number=arrOfNumby[0];
    for (let i in arrOfNumby) {
    for (let j in arrOfNumby) {
      if (arrOfNumby[i] > arrOfNumby[j]) {
        largestElementIs = arrOfNumby[i];
      } else {
        largestElementIs = arrOfNumby[j];
      }
    }
  }
  console.log(`The largest element is`, largestElementIs);
};

let arrOfNumby: number[] = [2, 4, 5, 7, 8, 2, 1, 5, 78];
largestElement(arrOfNumby);
