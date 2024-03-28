#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 2323;
console.log("welcome to Mahjabeen");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, Login successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select on option:",
            choices: ["withdraw", "Check Balance", "Fastcash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw: "
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Intufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw succsesfully`);
            console.log(`your current Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your Account Balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fast_opt",
                message: "How much money you want to withdraw",
                type: "list",
                choices: ["1000", '2000', "4000"]
            }
        ]);
        if (fast.fast_opt === "1000") {
            myBalance -= fast.fast_opt;
            console.log(`your current Balance is ${myBalance}`);
        }
        if (fast.fast_opt === "2000") {
            myBalance -= fast.fast_opt;
            console.log(`your current Balance is ${myBalance}`);
        }
        if (fast.fast_opt === "4000") {
            myBalance -= fast.fast_opt;
            console.log(`your current Balance is ${myBalance}`);
        }
    }
}
else {
    console.log("pin is Incorrect, Tryagain!");
}
