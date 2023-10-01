import inquirer from "inquirer";

console.log(`Welcome to Heavy Bank To Continue Please Enter Your MPIN  `);

const user = {
  accountNumber: 1234567,
  userName: "Ahmad",
  pin: 1245,
  balance: 100000000,
};

const { accountNumber, userName, pin, balance } = user;

// User Input
const answers = inquirer.prompt([
  {
    type: "number",
    name: "accNumb",
    message: "Enter Your Account Number",
  },
  {
    type: "number",
    name: "accPin",
    message: "Enter Your 4 digit pin",
  },
]);
// Balance Checking Functionality
const balanceChecker = () => {
  const balcInquirer = inquirer.prompt([
    {
      type: "confirm",
      name: "opt",
      message: "Do You Want to check the Balance?",
    },
  ]);
  balcInquirer.then((balc) => {
    const { opt } = balc;
    if (opt) {
      console.log("Your Balance is " + balance);
    } else {
      console.log("Thank You For Using Heavy Bank");
    }
  });
};
//  Transaction

const transaction = await inquirer.prompt([
  {
    type: "list",
    name: "trans",
    message: "What do you want to transact?",
    choices: ["Withdraw", "Deposit"],
  },
]);

// Main Functionality
answers.then((answer) => {
  const { accNumb, accPin } = answer;
  if (pin == accPin && accountNumber == accNumb) {
    console.log("Welcome " + userName);
    balanceChecker();
  } else {
    console.log("Wrong");
  }
});
