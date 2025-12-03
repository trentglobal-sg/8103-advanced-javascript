// 1. Variable Sub
// 2. ( )
// 3. function calls
// 4. arth operators
//    **
//    / * %
//    + -
// 5. comparsion operators
// 6. logical operators
//    they one boolean value (true/false) on the left hand side or right hand side
//    and simplfy to a boolean value as well
const prompt = require('prompt-sync')();
console.log("true && true =", true && true);
console.log("true && false =", true && false);
console.log("false && true =", false && true);
console.log("false && false =", false && false);

// short circuit
function foobar() {
    console.log("foobar");
    return false;
}

let name = prompt("Please enter your name: ");

true && foobar();  // --> foobar() will be called
false && foobar();

let nameLength = name && name.length;
console.log(nameLength);

// when you use && on a chain of ALL truthy values, the result is the last truthy value
console.log(1 && 2 && 3 && 4);
