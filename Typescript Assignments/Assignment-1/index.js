// First Assignment
// https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 2 : Personal Message- Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var Name = "Ahmad Saboor";
console.log("Hello ".concat(Name, " , would you like to learn some Python today? "));
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var nameInUC = Name.toUpperCase();
console.log(nameInUC);
var nameinLC = Name.toLowerCase();
console.log(nameinLC);
// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famousQuote = "A person who never made a mistake never tried anything new";
console.log("Albert Einstein once said , \"".concat(famousQuote, "\""));
// Question 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_Person = "Albert Einstein";
var message = "".concat(famous_Person, " once said , \"").concat(famousQuote, "\"");
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName = "\tSubhan \n";
console.log(personName);
var trimName = personName.trim();
console.log(trimName);
// Question 7 and 8 :   Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("The Result of Addition is ", 6 + 2);
console.log("The Result of Multiplication is", 4 * 2);
console.log("The Result of Division is", 32 / 4);
console.log("The Result of Subtraction is", 10 - 2);
// Question 9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNumber = 6;
console.log("Your Favourite Number is", favNumber);
// Question 10 : Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does
// Below will change the string to uppercase
var nameInUC1 = Name.toUpperCase();
console.log(nameInUC);
// Below will change the string to lowercase
var nameinLC1 = Name.toLowerCase();
console.log(nameinLC);
// Question : 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsArr = [
    "Ahmad",
    "Saad",
    "Arham",
    "Talha",
    "Subhan",
    "Zaid",
    "Bakar",
];
for (var items in friendsArr) {
    console.log(friendsArr[items]);
}
// Question : 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (var items in friendsArr) {
    console.log("I am ", friendsArr[items]);
}
// Question 13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var Vehicle = ["Motorcycle", "Cycle", "Car", "Truck"];
for (var veh in Vehicle) {
    console.log("i Would like to own a ".concat(Vehicle[veh]));
}
// Question 14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest = ["Ahmad", "Usama", "Zaid", "Bakar"];
for (var guest in Guest) {
    console.log(" ".concat(Guest[guest], " , You are invited to  a party"));
}
console.log("".concat(Guest[2], " has an important work to do is not available"));
// Question 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
Guest[2] = "Talha";
for (var guest in Guest) {
    console.log(" ".concat(Guest[guest], " You are invited to  a party Hope so we will enjoy it"));
}
console.log("We Have Finded A Bigger Dinner Table ".concat(Guest));
// Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
Guest.unshift("Kashif");
Guest.splice(4, 0, "Amir");
Guest.push("Sajjad");
for (var guest in Guest) {
    console.log("".concat(Guest[guest], " Well Done You are inited to have a lunch with me"));
}
console.log("Alas! Large Table is Not Available Can invite only two people");
// Question 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (Guest.length > 2) {
    var removeGuest = Guest.pop();
    console.log("Sorry ".concat(removeGuest, ", Alas! You are not joining us"));
}
for (var _i = 0, Guest_1 = Guest; _i < Guest_1.length; _i++) {
    var guest = Guest_1[_i];
    console.log("Dear ".concat(guest, ", Congrats still invited to dinner."));
}
Guest.pop();
Guest.pop();
console.log("Removed All elements");
console.log(Guest.length, Guest);
// Question:18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placesToVisit = [
    "Hunza",
    "Swat",
    "Malam Jaba",
    "Kalam",
    "Kashmir",
    "BabusarTop",
];
console.log(placesToVisit);
// From Low To High Order
var assendOrder = __spreadArray([], placesToVisit, true).sort(function (a, b) { return a.localeCompare(b); });
console.log("Now it is convert order", assendOrder);
console.log("This Print is after assend order", placesToVisit);
// From High to Low order we have to localecompare second argument with first argument and pass localeargument function parameter
var desendOrder = __spreadArray([], placesToVisit, true).sort(function (a, b) { return b.localeCompare(a); });
console.log("It is converted to descend order", desendOrder);
console.log("This Print is after desend order", placesToVisit);
var orderChg1 = placesToVisit.sort(function (a, b) { return a.localeCompare(b); });
console.log("Now it is converted to low to high", orderChg1);
console.log("Now the Order is Changed After low to high", placesToVisit);
var orderChg2 = placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Now it is converted to low to high", orderChg2);
console.log("Now the Order is Changed After this High to Low", placesToVisit);
// Question 19 :  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("The Memebers invited to lunch is ", Guest.length);
// Question : 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Question : 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var placesToLive = {
    Rivers: ["Chenab", "Ravi", "Satluj", "Bias", "jehlum"],
    Mountains: ["K2", "MountEverset"],
    Cities: ["Faisalabad", "Lahore", "Quetta", "Multan", "Rawalakot", "Balakot"],
    Language: ["Urdu", "Hindi", "Punjabi", "English", "javascript", "python"],
    Countries: ["Pakistan", "Sudan", "Palestine", "DHA", "India"],
};
console.log(placesToLive);
// Question 22 : Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var intentionalError = [23, 132, 432, 213, 2342, 213];
intentionalError[3] = intentionalError[9];
var element = intentionalError[3];
console.log(element);
// Question 23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var citizen = "Ahmad";
var place = "FSD";
console.log(citizen == "Ahad" ? "True" : "False"); //true
console.log(citizen == "Ahmad" ? true : false); //true
console.log(citizen == "" ? true : false); //false
console.log("The Result with OR Operator", citizen == "Ahmad" || place == "chiniot" ? true : false); //true
console.log("The Result with AND Operator", citizen == "Ahmad" && place == "chiniot" ? true : false); //false
console.log("The Result with Not Operator", citizen != "Ahad" && place != "chiniot" ? true : false); //true
console.log("The Result with Not Operator", citizen != "Ahmad" && place != "FSD" ? true : false); //false
console.log("AHMAD" > "Ahmad"); //false as a is greater than A in unicode in unicode a is 97 and A is 65
console.log("h" > "H"); //true
console.log(5 > 9 ? "yes 5 is grater than 9" : "5 is smaller than 9");
console.log("K" > "z" ? "yes K is grater than z" : "K is smaller than z");
console.log("true" > "false"
    ? "Yes True is Greater than false"
    : "No True is Smaller  than false");
// Question :24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var smallName = "ahmad";
var largeName = "Ahmad";
console.log(smallName == largeName
    ? "yes small name is large name"
    : "no small name and large name are different thing"); //becaue a and A are not equal
// • Tests using the lower case function
console.log(smallName.toLowerCase() == largeName.toLowerCase()
    ? "yes they are same"
    : "no they are not");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 <= 5.1); //true
console.log(5 < 5.1); //true
console.log(5 > 5.1); //false
console.log(5 >= 5.1); //false
// • Tests using "and" and "or" operators
// in or any one must be true
console.log("age" == "age" || "name" == "name" ? "Yes its true" : "No Both are falses");
// in and both must be true
console.log("age" == "age" && "name" == "name" ? "Yes its true" : "No any one is falses");
// • Test whether an item is in a array
var arrChk = [3, 4, 5, 6];
console.log("It is array or not ".concat(arrChk, " "), Array.isArray(arrChk)); //true as it is an array
// • Test whether an item is not in a array
var chkArr2 = true;
console.log("it is an array or not ".concat(chkArr2), Array.isArray(chkArr2)); //false it is boolean
// Question:25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
console.log(alien_color == "green" || "Green" ? "You earnerd 5 Points" : "Choose a Color");
// Question:26  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color2 = "green";
if (alien_color2 != "green") {
    console.log("player just earned 10 points");
}
else {
    console.log("You Just Earned 5 Points as your color is green");
}
// Question:27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color3 = "yellow";
if (alien_color3 == "green") {
    console.log("you Just earned 5 points");
}
else if (alien_color3 == "yellow") {
    console.log("you Just earned 10 points");
}
else if (alien_color3 == "red") {
    console.log("you Just earned 15 points");
}
// Question 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var personAge = 2;
var personAgeResult = personAge < 2
    ? "Person is baby"
    : personAge >= 2 && personAge < 4
        ? "Person is Todler"
        : personAge >= 4 && personAge <= 13
            ? "Person is a kid"
            : personAge >= 13 && personAge < 20
                ? "Person is a teenager"
                : personAge >= 20 && personAge <= 65
                    ? "Person is an adult"
                    : personAge >= 65
                        ? "Person is an elder"
                        : "Enter an age";
console.log(personAgeResult);
//Question:29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["apple", "mango", "banana"];
for (var fruit in favorite_fruits) {
    if (favorite_fruits[fruit] == "pineapple") {
        console.log("You really like ".concat(favorite_fruits[fruit]));
    }
    if (favorite_fruits[fruit] == "tomato") {
        console.log("You really like ".concat(favorite_fruits[fruit]));
    }
    if (favorite_fruits[fruit] == "banana") {
        console.log("You really like ".concat(favorite_fruits[fruit]));
    }
    if (favorite_fruits[fruit] == "apple") {
        console.log("You really like ".concat(favorite_fruits[fruit]));
    }
    if (favorite_fruits[fruit] == "mango") {
        console.log("You really like ".concat(favorite_fruits[fruit]));
    }
}
// Question 30 : Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usersInArr = ["Admin", "Ahmad", "Saad", "Eric", "Subhan", "Ashfaq"];
for (var users in usersInArr) {
    if (usersInArr[users] == "Admin") {
        console.log("Hello ".concat(usersInArr[users], " , would you like to see a status report?"));
    }
    else {
        console.log(" Hello ".concat(usersInArr[users], " thank you for logging in again."));
    }
}
//  Question:31  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let usersInArr1=['']
var usersInArr1 = ["Admin", "Ahmad", "Saad", "Eric", "Subhan", "Ashfaq"];
for (var users in usersInArr1) {
    if (usersInArr1[users] == "Admin") {
        console.log("Hello ".concat(usersInArr1[users], " , would you like to see a status report?"));
    }
    if (usersInArr[users] == usersInArr[users] && usersInArr[users] != "Admin") {
        console.log(" Hello ".concat(usersInArr1[users], " thank you for logging in again."));
    }
    else {
        console.log("We Need Some Users");
    }
}
// Question 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = [
    "Ahmad",
    "Ali",
    "Subhan",
    "Hadi",
    "Hamza",
    "Jawad",
    "Hammad",
];
var new_users = ["ahMad", "ali", "Haider", "khaliq", "Taha"];
for (var user in new_users) {
    if (current_users[user].toLowerCase() != new_users[user].toLowerCase()) {
        console.log(current_users[user]);
        console.log("".concat(new_users[user], " username is available"));
    }
    else {
        console.log("".concat(new_users[user], " Username is not available"));
    }
}
// Question 33 :Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var ordinal_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var num in ordinal_Numbers) {
    if (ordinal_Numbers[num] == 1) {
        console.log("".concat(ordinal_Numbers[num], "st"));
    }
    else if (ordinal_Numbers[num] == 2) {
        console.log("".concat(ordinal_Numbers[num], "nd"));
    }
    else if (ordinal_Numbers[num] == 3) {
        console.log("".concat(ordinal_Numbers[num], "rd"));
    }
    else {
        console.log("".concat(ordinal_Numbers[num], "th"));
    }
}
// Question : 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favPizza = ["HomeTown", "MalaiBoti", "Tikka", "Fajita", "FireHouse"];
for (var pizza in favPizza) {
    console.log("I Like  ".concat(favPizza[pizza], " "));
}
console.log("I Really Like Pizza");
// Question 35 : Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["cat", "dog", "rabit", "parrot"];
for (var animy in animals) {
    console.log("".concat(animals[animy], " would make a good pet"));
}
console.log("Any of these animals would make a great pet!");
// Question : 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
var make_shirt = function (size, text) {
    console.log("The Size is ".concat(size, " and the text that should print on shirt is \"").concat(text, "\""));
};
make_shirt("Large", "Main Arha Houn");
// Question : 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var make_shirt1 = function (size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love TypeScript"; }
    console.log("The Size is ".concat(size, " and the text that should print on shirt is \"").concat(text, "\""));
};
make_shirt1();
make_shirt1("Medium", "I Love TypeScript");
make_shirt1("small", "Main Houn Kon");
//  Question:38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
var describe_city = function (city_name, country_name) {
    if (city_name === void 0) { city_name = "Karachi"; }
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log("".concat(city_name, " is in ").concat(country_name));
};
describe_city();
describe_city("Lahore");
describe_city("New York");
describe_city("Sydney");
describe_city("Delhi");
// Question:39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
var city_country = function (city, country) {
    console.log("\"".concat(city, ",").concat(country, "\""));
};
city_country("Faisalabad", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");
// Question:40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
var make_album = function (name, album_title, numberOfTracks) {
    var music_album = {
        name: name,
        album_title: album_title,
        numberOfTracks: numberOfTracks,
    };
    return music_album;
};
var albumOne = make_album("Ahmad", "ma houn jawan");
console.log(albumOne);
var albumTwo = make_album("subhan", "ma houn Koun");
console.log(albumTwo);
var albumThree = make_album("Typescript", "ma houn static", 321);
console.log(albumThree);
// Question 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician_name = ["Zaid", "Bakar", "Taha", "Ahmad"];
var show_magicians = function () {
    for (var name_1 in magician_name) {
        console.log(magician_name[name_1]);
    }
};
show_magicians();
// Question 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicianName = ["Zaid", "Bakar", "Taha", "Ahmad"];
var copyMagician = magicianName;
var make_great = function () {
    for (var magician in magicianName) {
        magicianName[magician] = "the Great " + magicianName[magician];
    }
};
var show_magician = function () {
    for (var name_2 in magicianName) {
        console.log(magicianName[name_2]);
    }
};
make_great();
show_magician();
// Question 43:  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
make_great();
var show_magician1 = function () {
    for (var name_3 in magicianName) {
        console.log(magicianName[name_3]);
    }
};
show_magician1();
var show_magician2 = function () {
    for (var name_4 in copyMagician) {
        console.log(copyMagician[name_4]);
    }
};
show_magician2();
// Question 44 :Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) { return console.log("".concat(item)); });
}
makeSandwich("lettuce", "mayo");
makeSandwich("maxica", "swiss", "tomato");
makeSandwich(" butter");
//  Question 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function Carmanufacturer(manufacturer, model_name) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carComponents = __assign({ manufacturer: manufacturer, model_name: model_name }, options);
    return carComponents;
}
var first_car = Carmanufacturer("Toyota", "Prius", { color: "Black" });
var second_car = Carmanufacturer("Honda", "Civic", { color: "White" });
console.log(first_car);
console.log(second_car);
