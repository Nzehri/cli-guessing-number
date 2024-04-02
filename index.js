#! usr/bin/env node
import inqurirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inqurirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a Number between 1-10:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guessed right Number.");
}
else {
    console.log("you guessed wrong number");
}
;
