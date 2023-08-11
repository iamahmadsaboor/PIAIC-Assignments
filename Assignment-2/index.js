// Question 1  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// Write a program that calculates the percentage.
// Numb will take the number and the percent will take how much percent
var percentNumber = function (numb, percent) {
    var result = numb / percent;
    console.log("The ".concat(percent, " % of ").concat(numb, " is ").concat(result));
};
// percentNumber(50, 10);
// percentNumber(500, 10);
// percentNumber(100, 10);
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var getDiscount = function (oldPrice) {
    if (oldPrice >= 100) {
        var discount = (10 / 100) * oldPrice;
        var newPrice = oldPrice - discount;
        console.log("The actual Price was ".concat(oldPrice, " $ and You got discount of ").concat(discount, "$ and Now the New Price is ").concat(newPrice, "$ "));
    }
    else if (oldPrice < 100) {
        var discount = (5 / 100) * oldPrice;
        var newPrice = oldPrice - discount;
        console.log("The actual Price was ".concat(oldPrice, " $ and You got discount of ").concat(discount, "$ and Now the New Price is ").concat(newPrice, "$ "));
    }
    else {
        console.log("Wrong Input");
    }
};
getDiscount(30);
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
// let askAge: number = Number(prompt("Enter Age"));
var ageDetector = function (askAge) {
    if (askAge >= 0 && askAge <= 12) {
        console.log("Your Age is ".concat(askAge, " So You are child "));
    }
    else if (askAge >= 13 && askAge <= 19) {
        console.log("Your Age is ".concat(askAge, " So You are TeenAger "));
    }
    else {
        console.log("Your Age is ".concat(askAge, " So You are Adult "));
    }
};
// ageDetector(23);
// ageDetector(1);
// ageDetector(14);
//  Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
// let askTemp: number = Number(prompt("Enter the Temperature In Celcius"));
var checkTemp = function (askTemp) {
    if (askTemp >= 1 && askTemp <= 20) {
        console.log("The temperature is ".concat(askTemp, " C so wear warm clothers"));
    }
    else if (askTemp >= 21 && askTemp <= 40) {
        console.log("The temperature is ".concat(askTemp, " C so wear summer clothers"));
    }
    else if (askTemp <= 0 || askTemp >= 41) {
        console.log("The temperature is ".concat(askTemp, " C so be careful and dont go outside without any serious reason"));
    }
};
// checkTemp(23);
// checkTemp(32);
// checkTemp(-4);
// checkTemp(50);
// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
