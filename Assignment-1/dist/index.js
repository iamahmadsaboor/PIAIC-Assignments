"use strict";
// First Assignment
// https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
// Question 2 : Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let Name = "Ahmad Saboor";
console.log(`Hello ${Name} , would you like to learn some Python today? `);
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let nameInUC = Name.toUpperCase();
console.log(nameInUC);
let nameinLC = Name.toLowerCase();
console.log(nameinLC);
// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famousQuote = 'A person who never made a mistake never tried anything new';
console.log(`Albert Einstein once said , "${famousQuote}"`);
// Question 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_Person = 'Albert Einstein';
let message = `${famous_Person} once said , "${famousQuote}"`;
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = '\tSubhan \n';
console.log(personName);
let trimName = personName.trim();
console.log(trimName);
// Question 7 and 8 :   Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log('The Result of Addition is ', 6 + 2);
console.log('The Result of Multiplication is', 4 * 2);
console.log('The Result of Division is', 32 / 4);
console.log('The Result of Subtraction is', 10 - 2);
// Question 9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNumber = 6;
console.log('Your Favourite Number is', favNumber);
// Question 10 : Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does
// Below will change the string to uppercase
let nameInUC1 = Name.toUpperCase();
console.log(nameInUC);
// Below will change the string to lowercase
let nameinLC1 = Name.toLowerCase();
console.log(nameinLC);
// Question : 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsArr = ['Ahmad', 'Saad', 'Arham', 'Talha', 'Subhan', 'Zaid', 'Bakar'];
for (let items in friendsArr) {
    console.log(friendsArr[items]);
}
// Question : 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let items in friendsArr) {
    console.log("I am ", friendsArr[items]);
}
// Question 13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let Vehicle = ['Motorcycle', 'Cycle', 'Car', 'Truck'];
for (let veh in Vehicle) {
    console.log(`i Would like to own a ${Vehicle[veh]}`);
}
// Question 14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest = ['Ahmad', 'Usama', 'Zaid', 'Bakar'];
for (let guest in Guest) {
    console.log(` ${Guest[guest]} , You are invited to  a party`);
}
console.log(`${Guest[2]} has an important work to do is not available`);
// Question 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
for (let guest in Guest) {
    console.log(` ${Guest[guest]} You are invited to  a party Hope so we will enjoy it`);
}
