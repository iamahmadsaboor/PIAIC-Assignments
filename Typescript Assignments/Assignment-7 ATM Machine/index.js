import inquirer from "inquirer";
console.log(`Welcome to Heavy Bank To Continue Please Enter Your MPIN  `);
const user = {
    accountNumber: 1234567,
    userName: "Ahmad",
    pin: 1245,
    balance: 100000000,
    transactionRecord: [],
};
const { accountNumber, userName, pin, balance, transactionRecord } = user;
// Balance Checking Functionality
const balanceChecker = async () => {
    const balcInquirer = await inquirer.prompt([
        {
            type: "confirm",
            name: "opt",
            message: "Do You Want to check the Balance?",
        },
    ]);
    const { opt } = balcInquirer;
    if (opt) {
        console.log("Your Balance is " + balance);
    }
    else {
        console.log("Thank You For Using Heavy Bank");
    }
};
//  Transaction
const performTransaction = async () => {
    const transaction = await inquirer.prompt([
        {
            type: "list",
            name: "trans",
            message: "Do You want to perform a transaction",
            choices: ["Withdraw", "Deposit"],
        },
    ]);
    const { trans } = transaction;
    if (trans == "Withdraw") {
        const withdraw = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: "Enter the amount you want to withdraw",
            },
        ]);
        const { amount } = withdraw;
        if (amount > balance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log("Your Remaining Balance is " + (balance - amount));
        }
    }
    else {
        if (trans == "Deposit") {
            const deposit = await inquirer.prompt([
                {
                    type: "number",
                    name: "depAmount",
                    message: "Enter the amount you want to deposit",
                },
            ]);
            const { depAmount } = deposit;
            if (depAmount > 0) {
                console.log("Your New Balance is " + (balance + depAmount));
            }
            else {
                console.log("Wrong Input");
            }
        }
    }
    console.log(transactionRecord.length);
    if (transactionRecord.length >= 5) {
        const chkRecord = await inquirer.prompt([
            {
                type: "confirm",
                name: "chk",
                message: "Do you want to check your last 5 transactions",
            },
        ]);
        const { chk } = chkRecord;
        if (chk) {
            console.log(transactionRecord);
        }
        else {
            console.log("Thank You For Using Heavy Bank");
        }
    }
};
// Main Functionality
// User Input
const mainFunc = async () => {
    const answers = await inquirer.prompt([
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
    const { accNumb, accPin } = answers;
    if (pin == accPin && accountNumber == accNumb) {
        console.log("Welcome " + userName);
        setTimeout(async () => {
            await performTransaction();
            await balanceChecker();
            moreTransaction();
        }, 2000);
    }
    else {
        console.log("Wrong Input");
    }
};
const moreTransaction = async () => {
    const moreTrans = await inquirer.prompt([
        {
            type: "confirm",
            name: "more",
            message: "Do you want to perform more transactions",
        },
    ]);
    const { more } = moreTrans;
    if (!more) {
    }
    else {
        while (more == true) {
            await performTransaction();
            await moreTransaction();
        }
    }
};
// moreTransaction();
mainFunc();
