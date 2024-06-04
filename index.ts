#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.underline.yellow("\n\t\t WELCOME TO NUMBER GUESSING GAME..."));


//  1) Computer will generate a random number.
//  2) User input for guessing number.
//  3) Compare user input with computer generated number and show result.

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:chalk.underline.cyan( "Please guess a number between 1-6: "),
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log(chalk.underline.magenta("Congratulations! You guessed right number."));
}else{
    console.log(chalk.underline.red("Oh no! You guessed wrong number"));
}