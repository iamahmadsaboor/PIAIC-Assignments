import inquirer from "inquirer";
const calcInput = async () => {
    // Below Done Object Destructuring
    const { number_1 } = await inquirer.prompt([
        {
            type: "number",
            name: "number_1",
            message: "Please Enter Number 1",
        },
    ]);
    // Below Done Object Destructuring
    const { number_2 } = await inquirer.prompt([
        {
            type: "number",
            name: "number_2",
            message: "Please Enter Number 2",
        },
    ]);
    // Below Done Object Destructuring
    const { operator } = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Please Select Operator",
            choices: ["+", "-", "*", "/", "^", "%"],
        },
    ]);
    if (operator == "+") {
        console.log(`${number_1} ${operator} ${number_2} = ${number_1 + number_2}`);
    }
    else if (operator == "-") {
        console.log(`${number_1} ${operator} ${number_2} = ${number_1 - number_2}`);
    }
    else if (operator == "*") {
        console.log(`${number_1} ${operator} ${number_2} = ${number_1 * number_2}`);
    }
    else if (operator == "/") {
        console.log(`${number_1} ${operator} ${number_2} = ${number_1 / number_2}`);
    }
    else if (operator == "^") {
        console.log(`${number_1} ${operator} ${number_2} = ${number_1 ** number_2}`);
    }
    else if (operator == "%") {
        console.log(`${number_1} ${operator}  ${number_2} = ${number_1 % number_2}`);
    }
    else {
        console.log("Invalid!!");
    }
    let ask = await inquirer.prompt([
        {
            type: "confirm",
            name: "again",
            message: "Do you want to continue?",
        },
    ]);
    if (ask.again == true) {
        calcInput();
    }
    else {
        console.log(`Thanks for Using Our Calculator -- iamahmadsaboor`);
    }
};
calcInput();
