import inquirer from "inquirer";
console.log(`Welcome to Heavy Bank To Continue Please Enter Your MPIN  `);
const userData = [
    {
        userId: 1,
        userName: "Ahmad",
        pin: "1245",
        balance: 100000000,
    },
];
const { userId, userName, pin, balance } = userData[0];
const answers = inquirer.prompt([
    {
        type: "string",
        name: "pin",
        message: "Enter Your 4 digit pin",
    },
]);
answers.then((answer) => {
    if (pin == answer.pin) {
        // if (answer.pin >= 5) {
        //   console.log("invalid Pin Enter 4 Digit Pin Code");
        // }
        console.log("Welcome " + userName);
    }
    else {
        console.log("Wrong  Pincode");
    }
});
// console.log(answers);
