import inquirer from "inquirer";
const calcInput = async () => {
  let value1 = await inquirer.prompt([
    {
      type: "number",
      name: "number_1",
      message: "Please Enter Number 1",
    },
  ]);
  let value2 = await inquirer.prompt([
    {
      type: "number",
      name: "number_2",
      message: "Please Enter Number 2",
    },
  ]);
  let operator_All = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Please Select Operator",
      choices: ["+", "-", "*", "/", "^", "%"],
    },
  ]);
  if (operator_All.operator == "+") {
    console.log(
      `${value1.number_1} ${operator_All.operator} ${value2.number_2} = ${
        value1.number_1 + value2.number_2
      }`
    );
  } else if (operator_All.operator == "-") {
    console.log(
      `${value1.number_1} ${operator_All.operator} ${value2.number_2} = ${
        value1.number_1 - value2.number_2
      }`
    );
  } else if (operator_All.operator == "*") {
    console.log(
      `${value1.number_1} ${operator_All.operator} ${value2.number_2} = ${
        value1.number_1 * value2.number_2
      }`
    );
  } else if (operator_All.operator == "/") {
    console.log(
      `${value1.number_1} ${operator_All.operator} ${value2.number_2} = ${
        value1.number_1 / value2.number_2
      }`
    );
  } else if (operator_All.operator == "^") {
    console.log(
      `${value1.number_1} ${operator_All.operator} ${value2.number_2} = ${
        value1.number_1 ** value2.number_2
      }`
    );
  } else if (operator_All.operator == "%") {
    console.log(
      `${value1.number_1} ${operator_All.operator}  ${value2.number_2} = ${
        value1.number_1 % value2.number_2
      }`
    );
  } else {
    console.log("Invalid!!");
  }
  let ask = await inquirer.prompt([
    {
      type: "confirm",
      name: "again",
      message: "Do you want to continue?", // Message to show the user
      //   default: true, // Default value of the prompt
    },
  ]);
  if (ask.again == true) {
    calcInput();
  } else {
    console.log(`Thanks for Using Our Calculator -- iamahmadsaboor`);
  }
};
calcInput();
