const prompt = require('prompt-sync')();

// 1. How to recongize a scope -- { }
// Whenever you see a curly brace, a new scope begins
// - if
// - for
// - while
// - function
// 2. any function or variable not in a  { } is in the GLOBAL scope
// 3. a more "outer scope" cannot access the more inner scope
// but a more inner scope access those in the more outer scope

let income = parseFloat(prompt("Enter a number:"));
let taxPayble;
if (income <= 50000) {
    taxPayable = 0;
} else {
    taxPayable = income * 0.0025;
}
console.log("Tax to pay =", taxPayable);

{
    let x = 3;
    console.log("x=",3);
    {
        let x = 4;
        {
            {
                console.log("x =", x);
            }
        }
    }
}

{
   console.log(a);
    {
         let a = 3;
        {
            {
                {
                    console.log(a);
                }
            }
        }
    }
}