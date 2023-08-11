// Question 1  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

// Write a program that calculates the percentage.

// Numb will take the number and the percent will take how much percent
let percentNumber = (numb, percent) => {
  let result: number = numb / percent;
  console.log(`The ${percent} % of ${numb} is ${result}`);
};
// percentNumber(50, 10);
// percentNumber(500, 10);
// percentNumber(100, 10);

// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let getDiscount = (oldPrice: number) => {
  if (oldPrice >= 100) {
    let discount: number = (10 / 100) * oldPrice;
    let newPrice: number = oldPrice - discount;
    console.log(
      `The actual Price was ${oldPrice} $ and You got discount of ${discount}$ and Now the New Price is ${newPrice}$ `
    );
  } else if (oldPrice < 100) {
    let discount: number = (5 / 100) * oldPrice;
    let newPrice: number = oldPrice - discount;
    console.log(
      `The actual Price was ${oldPrice} $ and You got discount of ${discount}$ and Now the New Price is ${newPrice}$ `
    );
  } else {
    console.log("Wrong Input");
  }
};

getDiscount(30);

// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

// let askAge: number = Number(prompt("Enter Age"));
let ageDetector = (askAge) => {
  if (askAge >= 0 && askAge <= 12) {
    console.log(`Your Age is ${askAge} So You are child `);
  } else if (askAge >= 13 && askAge <= 19) {
    console.log(`Your Age is ${askAge} So You are TeenAger `);
  } else {
    console.log(`Your Age is ${askAge} So You are Adult `);
  }
};
// ageDetector(23);
// ageDetector(1);
// ageDetector(14);

//  Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

// let askTemp: number = Number(prompt("Enter the Temperature In Celcius"));
let checkTemp = (askTemp) => {
  if (askTemp >= 1 && askTemp <= 20) {
    console.log(`The temperature is ${askTemp} C so wear warm clothers`);
  } else if (askTemp >= 21 && askTemp <= 40) {
    console.log(`The temperature is ${askTemp} C so wear summer clothers`);
  } else if (askTemp <= 0 || askTemp >= 41) {
    console.log(
      `The temperature is ${askTemp} C so be careful and dont go outside without any serious reason`
    );
  }
};
// checkTemp(23);
// checkTemp(32);
// checkTemp(-4);
// checkTemp(50);

// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

// let diviNumb:number=Number(prompt("Enter a Number to check whether it is diisble by 3 and 5 "))

// let diviNumb: number = 34;
// let diviNumb1: number = 3;
// let diviNumb2: number = 5;

let divisibleChecker = (
  diviNumb: number,
  diviNumb1: number,
  diviNumb2: number
) => {
  if (diviNumb % diviNumb1 == 0 || diviNumb % diviNumb2 == 0) {
    if (diviNumb % diviNumb1 == 0) {
      console.log(`yes the number is divisble by ${diviNumb1}`);
    } else if (diviNumb % diviNumb2 == 0) {
      console.log(`yes the number is divisble by ${diviNumb2}`);
    } else if (diviNumb % diviNumb1 == 0 && diviNumb % diviNumb2) {
      console.log(
        `Yes the number is divisible by ${diviNumb1} and ${diviNumb2}`
      );
    } else {
      console.log(`Wrong Input ${diviNumb}`);
    }
  }
};
divisibleChecker(30, 3, 5);
