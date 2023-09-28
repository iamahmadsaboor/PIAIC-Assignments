import inquirer from "inquirer";

console.log(`Welcome to Heavy Bank To Continue Please Enter Your MPIN  `);

const userData = [
  {
    userId: 1,
    userName: "Ahmad",
    pin: "1245",
    balance: 100000000,
  },
  {
    userId: 2,
    userName: "Ali",
    pin: "4212",
    balance: 200000,
  },
];
const { userId, userName, pin, balance } = userData[0];
const answers = inquirer.prompt([
  {
    type: "string",
    name: "pin",
    message: "Enter Your 4 digit pin",
    maxLength: 4,
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Do you want to check your balance?",
  },
]);
answers.then((answer) => {
  if (pin == answer.pin) {
    if (answer.pin > 4) {
      console.log("invalid Pin Enter 4 Digit Pin Code");
    } else {
      console.log("Welcome " + userName);
      if (answer.confirm == true && pin == answer.pin) {
        console.log(`Your Balance is ${balance}`);
      }
    }
  } else {
    console.log("Wrong  Pincode");
  }
});

// console.log(answers);
