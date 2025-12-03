const prompt = require('prompt-sync')();

// let name = prompt("Please enter your name: ");
// if (!name) {
//     console.log("You didn't enter your name");
// }

// let annualIncome = parseFloat(prompt("Enter your annual income: "));
// if (annualIncome) {
//     let taxRate = 0.01;
//     console.log(annualIncome * taxRate);
// } else {
//     console.log("Please enter something greater than 0 or which is a valid number");
// }

let name;
while (true) {
    name = prompt("Please enter your name: ");
    if (name) {
        break;
    } else {
        console.log("Please enter your name");
    }
}

let annualIncome;
while (true) {
    annualIncome = parseFloat(prompt("Please enter your annual income: "));
    if (annualIncome) {
        break;
    } else {
        console.log("Please enter a value for your annual income");
    }
}