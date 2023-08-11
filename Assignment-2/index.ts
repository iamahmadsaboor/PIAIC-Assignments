// Question 1  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

// Question 2 - Write a program that calculates the percentage.

// Numb will take the number and the percent will take how much percent

let percentNumber = (numb, percent) => {
  let result: number = numb / percent;
  console.log(`The ${percent} % of ${numb} is ${result}`);
};
percentNumber(50, 10);
percentNumber(500, 10);
percentNumber(100, 10);

//  Question 3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

// Question 4- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
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
getDiscount(130);
getDiscount(4000);

// Question 5: Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

let ageDetector = (askAge) => {
  if (askAge >= 0 && askAge <= 12) {
    console.log(`Your Age is ${askAge} So You are child `);
  } else if (askAge >= 13 && askAge <= 19) {
    console.log(`Your Age is ${askAge} So You are TeenAger `);
  } else {
    console.log(`Your Age is ${askAge} So You are Adult `);
  }
};
ageDetector(23);
ageDetector(1);
ageDetector(14);

// Question 6:  Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

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
checkTemp(23);
checkTemp(32);
checkTemp(-4);
checkTemp(50);

// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

let divisibleChecker = (
  diviNumb: number,
  diviNumb1: number,
  diviNumb2: number
) => {
  if (diviNumb % diviNumb1 == 0 && diviNumb % diviNumb2 == 0) {
    console.log(`yes the number is divisble by ${diviNumb1} and ${diviNumb2}`);
  } else if (diviNumb % diviNumb1 == 0) {
    console.log(`yes the number is divisble only  by ${diviNumb1} `);
  } else if (diviNumb % diviNumb2 == 0) {
    console.log(`yes the number is divisble only by ${diviNumb2} `);
  } else {
    console.log(`Wrong Input ${diviNumb}`);
  }
};

divisibleChecker(30, 3, 5);
divisibleChecker(25, 3, 5);
divisibleChecker(9, 3, 5);

//  -Question  7 Write a program that checks if the given year is leap year or not.

let checkYear = (daysNumb: number) => {
  if (daysNumb === 365) {
    console.log(
      `As there are ${daysNumb} in this year so it is not a leap year`
    );
  } else if (daysNumb == 366) {
    console.log(`As there are ${daysNumb} in this year so it is  a leap year`);
  } else {
    console.log(`${daysNumb} is a Wrong Input`);
  }
};

checkYear(365);
checkYear(366);
checkYear(21);

//  - Question 8 Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

let checkDay = (askDayNumb) => {
  if (askDayNumb == 1) {
    console.log(`As it is day ${askDayNumb} so its Monday`);
  }
  if (askDayNumb == 2) {
    console.log(`As it is day ${askDayNumb} so its Tuesday`);
  }
  if (askDayNumb == 3) {
    console.log(`As it is day ${askDayNumb} so its Wednesday`);
  }
  if (askDayNumb == 4) {
    console.log(`As it is day ${askDayNumb} so its Thursday`);
  }
  if (askDayNumb == 5) {
    console.log(`As it is day ${askDayNumb} so its Friday`);
  }
  if (askDayNumb == 6) {
    console.log(`As it is day ${askDayNumb} so its Saturday`);
  }
  if (askDayNumb == 7) {
    console.log(`As it is day ${askDayNumb} so its Sunday`);
  } else {
    console.log(
      `As it is day ${askDayNumb} so its Wrong Input So Enter Between (1-7)`
    );
  }
};
checkDay(3);
checkDay(1);
checkDay(4);
checkDay(9);
checkDay(0);

// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.

let calcBill = (unitConsume, costUnit) => {
  if (unitConsume <= 100) {
    let electricityCost = unitConsume * costUnit;
    let tax = 0;
    let totalBill = electricityCost + tax;
    console.log(
      `Your Bill is ${totalBill}rs in which cost of electricity is ${
        unitConsume * costUnit
      }rs and tax is ${tax} rs`
    );
  } else if (unitConsume > 100 && unitConsume <= 200) {
    let electricityCost = unitConsume * costUnit;
    let tax = (electricityCost * 10) / 100;
    let totalBill = electricityCost + tax;
    console.log(
      `Your Bill is ${totalBill}rs of  in which cost of electricity is ${
        unitConsume * costUnit
      }rs and tax is ${tax}rs`
    );
  } else if (unitConsume > 200 && unitConsume <= 500) {
    let electricityCost = unitConsume * costUnit;
    let tax = (electricityCost * 15) / 100;
    let totalBill = electricityCost + tax;
    console.log(
      `Your Bill is ${totalBill}rs in which cost of electricity is ${
        unitConsume * costUnit
      }rs and tax is ${tax}rs`
    );
  } else if (unitConsume > 500) {
    let electricityCost = unitConsume * costUnit;
    let tax = (electricityCost * 25) / 100;
    let totalBill = electricityCost + tax;
    console.log(
      `Your Bill is ${totalBill}rs  in which cost of electricity is ${
        unitConsume * costUnit
      }rs and tax is ${tax}rs`
    );
  } else {
    console.log(`Your Input is Wrong`);
  }
};

// first how many unit consumed second is cost per unit
calcBill(123, 40);
calcBill(400, 40);
calcBill(600, 40);
calcBill(2, 40);


