import inquirer from "inquirer"; //calling inquirer
import chalk from "chalk";
// calculator function defination
async function userCal() {
    // asking questions [values / operators]
    let answers = await inquirer.prompt([
        {
            name: "number1",
            type: "number",
            message: "Enter value",
            default: 0,
            validate: (req) => {
                if (!req) {
                    return "Please Enter Number";
                }
                return true;
            },
        },
        {
            name: "number2",
            type: "number",
            message: "Enter value",
            default: 0,
            validate: (req) => {
                if (!req) {
                    return "Please Enter Number";
                }
                return true;
            },
        },
        {
            name: "operator",
            type: "list",
            message: "Select operator",
            choices: ["+", "-", "*", "/", "%"],
        },
    ]);
    //identify artithmetic operators to perform operations
    if (answers.operator === "+") {
        console.log(chalk.green(`Result: ${answers.number1 + answers.number2}`));
    }
    else if (answers.operator === "-") {
        console.log(chalk.green(`Result: ${answers.number1 - answers.number2}`));
    }
    else if (answers.operator === "*") {
        console.log(chalk.green(`Result: ${answers.number1 * answers.number2}`));
    }
    else if (answers.operator === "/") {
        console.log(chalk.green(`Result: ${answers.number1 / answers.number2}`));
    }
    else if (answers.operator === "%") {
        console.log(chalk.green(`Result: ${answers.number1 % answers.number2}`));
    }
}
//asking for another operation
async function nextOPeration() {
    do {
        await userCal(); //calling calculator function
        var repeat = await inquirer.prompt([
            {
                name: "re",
                type: "string",
                message: "Would you like to perform another operation.[Y/N]",
            },
        ]);
    } while (repeat.re === "Y" ||
        repeat.re === "y" ||
        repeat.re === "Yes" ||
        repeat.re === "yes");
}
//calling nextOPeration function
await nextOPeration();
