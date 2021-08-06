const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;

function getNumber() {
    readline.question('Please enter the number for summation or enter the word stop to exit from the program: ', userInput => {
        if (userInput.trim() === "stop") {
            console.log(`Sum of the all the numbers you entered is: ${sum}`)
            readline.close();
        } else {
            sum += parseInt(userInput);
            getNumber();
        }
    });
}

getNumber();